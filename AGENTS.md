# Repository instructions

## Scope

- Treat `docs/phases/phase-*.md` as the work contract.
- Create implementation branches under `codex/` and use a separate Git worktree for each phase.
- Keep planner, worker, and reviewer outputs separate. A reviewer must not edit the worker worktree.
- Do not merge, deploy, apply Terraform, invalidate CloudFront, or change DNS without explicit human approval.

## Verification

- Run `npm run verify:harness` after changing orchestration code or phase contracts.
- Run `npm run verify:frontend` after changing files under `frontend/`.
- Run Terraform formatting, initialization without a backend, validation, and `terraform test` after changing `infra/terraform/`.
- Record failed commands as evidence. Do not rewrite a failed run as a successful first pass.

## Evidence

- Commit phase specifications, deterministic test results, review decisions, and recovery summaries.
- Keep raw Codex JSONL, credentials, Terraform state, and environment files out of Git.
- Link claims in `README.md` to commits or files that a reviewer can inspect.
