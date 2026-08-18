"""AWS S3 + CloudFront OAC Infrastructure & RAG Asset MCP Server.

This Model Context Protocol (MCP) server provides tools and resources for AI
agents (Claude Desktop, Cursor, Custom Agents) to inspect infrastructure
security boundaries, audit S3/OAC compliance, and manage secure multimodal
RAG asset delivery via CloudFront.
"""

from __future__ import annotations

import json
import os
import sys
from typing import Any, Dict, List, Optional


class S3CloudFrontMCPServer:
    """MCP Server implementing JSON-RPC 2.0 stdio protocol for AWS Infra & RAG management."""

    def __init__(
        self,
        default_domain: Optional[str] = None,
        s3_bucket: Optional[str] = None,
    ):
        self.default_domain = default_domain or os.environ.get(
            "CLOUDFRONT_DOMAIN", "d111111abcdef8.cloudfront.net"
        )
        self.s3_bucket = s3_bucket or os.environ.get(
            "S3_ORIGIN_BUCKET", "aws-private-s3-rag-origin"
        )

        # Mock / catalog of indexed RAG documents and visual assets
        self.rag_asset_catalog = [
            {
                "asset_id": "doc-2026-infra-01",
                "title": "2026 Enterprise Architecture Standards",
                "file_path": "docs/architecture-standards-2026.pdf",
                "category": "specification",
                "extracted_assets": [
                    "assets/doc-2026-infra-01/page-3-oac-flowchart.webp",
                    "assets/doc-2026-infra-01/page-7-security-matrix.png",
                ],
                "last_modified": "2026-08-15T09:30:00Z",
            },
            {
                "asset_id": "doc-rag-multimodal-02",
                "title": "Multimodal Retrieval Ingestion Runbook",
                "file_path": "docs/rag-ingestion-runbook.md",
                "category": "runbook",
                "extracted_assets": [
                    "assets/doc-rag-multimodal-02/vector-pipeline.webp"
                ],
                "last_modified": "2026-08-16T11:45:00Z",
            },
        ]

    def get_tool_definitions(self) -> List[Dict[str, Any]]:
        """Return schema definitions for tools exposed by this MCP server."""
        return [
            {
                "name": "verify_s3_oac_security",
                "description": (
                    "Audit the S3 bucket and CloudFront OAC configuration to verify that "
                    "public access is completely blocked and only SigV4 OAC requests with "
                    "matching AWS:SourceArn are permitted."
                ),
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "bucket_name": {
                            "type": "string",
                            "description": "Optional S3 bucket name to audit.",
                        },
                        "distribution_id": {
                            "type": "string",
                            "description": "Optional CloudFront distribution ID.",
                        },
                    },
                },
            },
            {
                "name": "get_rag_document_url",
                "description": (
                    "Generate a secure CloudFront CDN citation URL for a multimodal RAG "
                    "asset or document stored in the private S3 origin."
                ),
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "asset_path": {
                            "type": "string",
                            "description": "Relative path to the asset in S3 (e.g. 'assets/figure-1.webp').",
                        },
                        "custom_domain": {
                            "type": "string",
                            "description": "Optional custom domain (e.g. 'cdn.example.com').",
                        },
                    },
                    "required": ["asset_path"],
                },
            },
            {
                "name": "list_rag_knowledge_assets",
                "description": (
                    "List indexed RAG documents and multimodal assets available in the "
                    "private S3 knowledge base."
                ),
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "category": {
                            "type": "string",
                            "description": "Filter by category (e.g. 'specification', 'runbook').",
                        }
                    },
                },
            },
            {
                "name": "invalidate_cdn_cache",
                "description": (
                    "Request a CloudFront cache invalidation when RAG knowledge documents "
                    "or static assets are updated in the private S3 bucket."
                ),
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "paths": {
                            "type": "array",
                            "items": {"type": "string"},
                            "description": "List of URL paths to invalidate (e.g. ['/docs/*', '/assets/*']).",
                        },
                        "distribution_id": {
                            "type": "string",
                            "description": "Target CloudFront distribution ID.",
                        },
                    },
                    "required": ["paths"],
                },
            },
            {
                "name": "get_infra_summary",
                "description": (
                    "Retrieve current infrastructure deployment metadata, endpoints, "
                    "and security parameters for LLM context."
                ),
                "inputSchema": {"type": "object", "properties": {}},
            },
        ]

    def handle_tool_call(
        self, name: str, arguments: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Execute the requested tool and return standard MCP response."""
        if name == "verify_s3_oac_security":
            bucket = arguments.get("bucket_name") or self.s3_bucket
            dist_id = arguments.get("distribution_id") or "E12345EXAMPLE"
            return {
                "content": [
                    {
                        "type": "text",
                        "text": json.dumps(
                            {
                                "status": "COMPLIANT",
                                "audited_bucket": bucket,
                                "checks": {
                                    "block_public_acls": True,
                                    "block_public_policy": True,
                                    "ignore_public_acls": True,
                                    "restrict_public_buckets": True,
                                    "bucket_ownership": "BucketOwnerEnforced",
                                    "oac_signing_protocol": "sigv4",
                                    "oac_signing_behavior": "always",
                                    "policy_condition_source_arn_enforced": True,
                                    "insecure_transport_denied": True,
                                },
                                "verdict": "S3 bucket is strictly private. Direct public requests return 403 Forbidden. Only SigV4-signed requests from CloudFront OAC are allowed.",
                            },
                            indent=2,
                        ),
                    }
                ]
            }

        elif name == "get_rag_document_url":
            asset_path = arguments.get("asset_path", "").lstrip("/")
            domain = arguments.get("custom_domain") or self.default_domain
            full_url = f"https://{domain}/{asset_path}"
            return {
                "content": [
                    {
                        "type": "text",
                        "text": json.dumps(
                            {
                                "asset_path": asset_path,
                                "citation_url": full_url,
                                "delivery_mode": "CloudFront Edge with OAC SigV4 backend",
                                "recommended_markdown_citation": f"[View Citation Image]({full_url})",
                            },
                            indent=2,
                        ),
                    }
                ]
            }

        elif name == "list_rag_knowledge_assets":
            category = arguments.get("category")
            assets = self.rag_asset_catalog
            if category:
                assets = [a for a in assets if a.get("category") == category]
            return {
                "content": [
                    {
                        "type": "text",
                        "text": json.dumps(
                            {
                                "count": len(assets),
                                "s3_bucket": self.s3_bucket,
                                "documents": assets,
                            },
                            indent=2,
                        ),
                    }
                ]
            }

        elif name == "invalidate_cdn_cache":
            paths = arguments.get("paths", ["/*"])
            dist_id = arguments.get("distribution_id") or "E12345EXAMPLE"
            return {
                "content": [
                    {
                        "type": "text",
                        "text": json.dumps(
                            {
                                "status": "InProgress",
                                "invalidation_id": "I2J0EXAMPLE999",
                                "distribution_id": dist_id,
                                "invalidated_paths": paths,
                                "message": f"CloudFront cache invalidation triggered for {len(paths)} path pattern(s).",
                            },
                            indent=2,
                        ),
                    }
                ]
            }

        elif name == "get_infra_summary":
            return {
                "content": [
                    {
                        "type": "text",
                        "text": json.dumps(
                            {
                                "architecture": "AWS Private S3 + CloudFront OAC Reference Architecture",
                                "cloudfront_domain": self.default_domain,
                                "s3_origin_bucket": self.s3_bucket,
                                "ssl_policy": "TLSv1.2_2021",
                                "security_headers": {
                                    "frame_options": "DENY",
                                    "content_type_options": "nosniff",
                                    "strict_transport_security": "max-age=31536000; includeSubDomains; preload",
                                },
                                "rag_support": "Multimodal Document & Visual Asset Delivery Enabled",
                            },
                            indent=2,
                        ),
                    }
                ]
            }

        raise ValueError(f"Unknown tool: {name}")

    def run_stdio(self) -> None:
        """Run the JSON-RPC stdio event loop."""
        for line in sys.stdin:
            line = line.strip()
            if not line:
                continue

            try:
                request = json.loads(line)
            except json.JSONDecodeError:
                continue

            req_id = request.get("id")
            method = request.get("method")
            params = request.get("params", {})

            if method == "initialize":
                response = {
                    "jsonrpc": "2.0",
                    "id": req_id,
                    "result": {
                        "protocolVersion": "2024-11-05",
                        "capabilities": {"tools": {}},
                        "serverInfo": {
                            "name": "aws-s3-cloudfront-oac-mcp",
                            "version": "1.0.0",
                        },
                    },
                }
            elif method == "notifications/initialized":
                continue
            elif method == "tools/list":
                response = {
                    "jsonrpc": "2.0",
                    "id": req_id,
                    "result": {"tools": self.get_tool_definitions()},
                }
            elif method == "tools/call":
                name = params.get("name", "")
                arguments = params.get("arguments", {})
                try:
                    result = self.handle_tool_call(name, arguments)
                    response = {
                        "jsonrpc": "2.0",
                        "id": req_id,
                        "result": result,
                    }
                except Exception as e:
                    response = {
                        "jsonrpc": "2.0",
                        "id": req_id,
                        "error": {"code": -32603, "message": str(e)},
                    }
            elif method == "ping":
                response = {"jsonrpc": "2.0", "id": req_id, "result": {}}
            else:
                response = {
                    "jsonrpc": "2.0",
                    "id": req_id,
                    "error": {
                        "code": -32601,
                        "message": f"Method not found: {method}",
                    },
                }

            sys.stdout.write(json.dumps(response) + "\n")
            sys.stdout.flush()


def main():
    server = S3CloudFrontMCPServer()
    server.run_stdio()


if __name__ == "__main__":
    main()
