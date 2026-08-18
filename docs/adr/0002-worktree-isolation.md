# ADR 0002: Isolate each implementation phase with a branch and worktree

Status: accepted

## Context

The original frontend history uses one `main` branch. It does not prove that earlier tasks ran in isolated worktrees. The harness needs a reproducible boundary for future worker runs.

## Decision

Each phase declares a `codex/` branch and worktree path in YAML frontmatter. `new-phase.mjs` creates the worktree from the declared base commit. Workers may edit only that checkout.

The planner writes the phase contract. A worker implements it. Deterministic checks run in the worker worktree. A reviewer receives read-only Codex permissions and inspects the diff and evidence. A human approves the merge.

## Consequences

Parallel tasks no longer share a working directory. The repository can prove isolation for harness phases created after this ADR. It makes no retrospective claim about worktrees used before the harness existed.
