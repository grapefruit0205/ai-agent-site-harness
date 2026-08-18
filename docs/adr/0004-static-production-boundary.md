# ADR 0004: Keep the production runtime static

Status: accepted

## Context

The article builds to static assets and is served through CloudFront with a private S3 origin. The imported frontend also contains Worker, D1, and Drizzle scaffolding that the AWS deployment does not use.

## Decision

Treat `frontend/dist/client` as the production artifact. Treat `infra/terraform` as the production infrastructure definition. Keep `backend/` documentary until a deployed server-side requirement exists.

## Consequences

The portfolio does not overstate backend experience. CloudFront, OAC, bucket policy, DNS, certificate, and runtime checks remain supported by the infrastructure history and deployment proof.
