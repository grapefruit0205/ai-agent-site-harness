# Backend status

The production article does not use an application backend. CloudFront serves a static build from a private S3 origin.

The imported frontend history contains optional Cloudflare Worker, D1, and Drizzle scaffold files because the original site toolchain generated them. The AWS deployment proof does not show those components running in production. They remain under `frontend/` so the imported snapshot still builds and its history stays traceable.

Add a service under this directory only after the project has a concrete server-side requirement, tests, and deployment evidence.
