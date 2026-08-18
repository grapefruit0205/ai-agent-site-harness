"""Tests for S3 + CloudFront OAC & RAG MCP Server."""

from __future__ import annotations

import json
import unittest

from server import S3CloudFrontMCPServer


class TestS3CloudFrontMCPServer(unittest.TestCase):
    def setUp(self):
        self.server = S3CloudFrontMCPServer(
            default_domain="d123456789.cloudfront.net",
            s3_bucket="test-enterprise-rag-bucket",
        )

    def test_tool_definitions(self):
        tools = self.server.get_tool_definitions()
        tool_names = [t["name"] for t in tools]
        self.assertIn("verify_s3_oac_security", tool_names)
        self.assertIn("get_rag_document_url", tool_names)
        self.assertIn("list_rag_knowledge_assets", tool_names)
        self.assertIn("invalidate_cdn_cache", tool_names)
        self.assertIn("get_infra_summary", tool_names)

    def test_verify_s3_oac_security(self):
        res = self.server.handle_tool_call(
            "verify_s3_oac_security", {"bucket_name": "test-enterprise-rag-bucket"}
        )
        data = json.loads(res["content"][0]["text"])
        self.assertEqual(data["status"], "COMPLIANT")
        self.assertTrue(data["checks"]["block_public_acls"])
        self.assertTrue(data["checks"]["policy_condition_source_arn_enforced"])
        self.assertEqual(data["checks"]["oac_signing_protocol"], "sigv4")

    def test_get_rag_document_url(self):
        res = self.server.handle_tool_call(
            "get_rag_document_url", {"asset_path": "assets/diagram-1.png"}
        )
        data = json.loads(res["content"][0]["text"])
        self.assertEqual(
            data["citation_url"],
            "https://d123456789.cloudfront.net/assets/diagram-1.png",
        )

    def test_list_rag_knowledge_assets(self):
        res = self.server.handle_tool_call("list_rag_knowledge_assets", {})
        data = json.loads(res["content"][0]["text"])
        self.assertGreater(data["count"], 0)
        self.assertEqual(data["s3_bucket"], "test-enterprise-rag-bucket")

    def test_invalidate_cdn_cache(self):
        res = self.server.handle_tool_call(
            "invalidate_cdn_cache", {"paths": ["/docs/*", "/assets/*"]}
        )
        data = json.loads(res["content"][0]["text"])
        self.assertEqual(data["status"], "InProgress")
        self.assertEqual(len(data["invalidated_paths"]), 2)

    def test_get_infra_summary(self):
        res = self.server.handle_tool_call("get_infra_summary", {})
        data = json.loads(res["content"][0]["text"])
        self.assertEqual(data["cloudfront_domain"], "d123456789.cloudfront.net")
        self.assertEqual(data["s3_origin_bucket"], "test-enterprise-rag-bucket")


if __name__ == "__main__":
    unittest.main()
