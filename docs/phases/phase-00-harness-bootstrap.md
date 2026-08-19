---
id: phase-00
title: Bootstrap the history-preserving agent harness
status: accepted
base: main
branch: phase/00-harness-bootstrap
worktree: ../ai-agent-site-harness-phase-00
verify:
  - npm run verify:harness
  - npm run verify:frontend
  - terraform -chdir=infra/terraform fmt -check -recursive
  - terraform -chdir=infra/terraform init -backend=false -input=false
  - terraform -chdir=infra/terraform validate
  - terraform -chdir=infra/terraform test
acceptance:
  - Frontend and infrastructure commits remain reachable from the harness history
  - Worker and reviewer permissions are encoded and covered by tests
  - Phase contracts, verification evidence, and recovery metrics are reproducible
  - Pull request workflows run deterministic checks without deploying
  - Production deployment remains manual and approval gated
---

# Objective

Create a portfolio repository that shows how the article was built, checked, recovered, and deployed. Preserve source history instead of copying only final files.

## Inputs

- frontend `main@873ae0c524a87f2a5bfeaf062fcb7c4b8f0069d1`
- infrastructure `main@b033f25177043d62d42f9a4ae31fa10cf24dd7cb`
- the requested repository structure and portfolio narrative

## Boundaries

- Do not deploy the site or change AWS resources.
- Do not include uncommitted files from the infrastructure checkout.
- Keep the new GitHub repository private until the imported private history receives a publication review.
