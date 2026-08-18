# Evidence model

## Committed evidence

- phase Markdown and acceptance criteria
- implementation and recovery commits
- deterministic verification summary
- reviewer decision
- sanitized metrics summary
- deployment proof without credentials

## Local-only evidence

- raw Codex JSONL
- complete prompts containing machine paths or private context
- temporary worktrees
- Terraform state and saved plans
- environment and authentication files

The top-level `.gitignore` enforces the local-only boundary. Before publishing the repository, review the full imported Git history because the frontend source repository was private at import time.

## Run summary fields

| Field | Meaning |
| --- | --- |
| `phaseId` | Stable phase identifier |
| `firstPass` | Whether the first gate attempt passed |
| `recoveryCount` | Attempts after the first gate |
| `humanInterventions` | Explicit changes or decisions supplied by a person during the phase |
| `finalStatus` | `accepted` or `blocked` |
| `finalTests` | Final total, passed, and failed checks |
