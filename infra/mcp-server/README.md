# AWS S3 + CloudFront OAC Infrastructure & RAG MCP Server

This **Model Context Protocol (MCP)** server equips AI agents (Claude Desktop, Cursor, Antigravity, custom agentic workflows) with the ability to:

1. **Audit Security Boundaries**: Verify that S3 Public Access is 100% blocked and CloudFront OAC SigV4 policies (`AWS:SourceArn`) are strictly enforced.
2. **Serve Multimodal RAG Citations**: Generate fast, edge-cached CloudFront CDN links for private RAG assets (PDF figures, tables, charts).
3. **Manage Infrastructure & Invalidation**: Trigger CDN cache invalidations and retrieve deployment metadata for LLM grounding.

---

## Available MCP Tools

| Tool Name | Purpose | Key Parameters |
| :--- | :--- | :--- |
| `verify_s3_oac_security` | Audits S3 Public Access Block, Bucket Policy, and OAC settings. | `bucket_name`, `distribution_id` |
| `get_rag_document_url` | Generates a CloudFront citation URL for an asset in private S3. | `asset_path`, `custom_domain` |
| `list_rag_knowledge_assets` | Lists indexed RAG documents and multimodal assets. | `category` (optional) |
| `invalidate_cdn_cache` | Triggers CloudFront cache invalidation after knowledge updates. | `paths`, `distribution_id` |
| `get_infra_summary` | Returns active infrastructure endpoints and TLS/header profiles. | None |

---

## Setup & Integration Guide

### 1. Claude Desktop Integration

Add the server to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "aws-rag-storage": {
      "command": "python",
      "args": [
        "C:/path/to/aws-private-s3-cloudfront-oac/mcp-server/server.py"
      ],
      "env": {
        "CLOUDFRONT_DOMAIN": "your-distribution.cloudfront.net",
        "S3_ORIGIN_BUCKET": "your-private-rag-bucket"
      }
    }
  }
}
```

### 2. Cursor / Antigravity IDE Integration

Add to your MCP settings or launch via stdio:

```bash
python mcp-server/server.py
```

---

## Testing the MCP Server

Run the test suite with standard Python `unittest`:

```bash
cd mcp-server
python -m unittest discover tests
```
