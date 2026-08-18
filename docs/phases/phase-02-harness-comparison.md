---
id: phase-02
title: Run the same class of task through the harness
status: planned
base: main
branch: codex/phase-02-harness-comparison
worktree: .worktrees/phase-02
verify:
  - npm run verify:harness
  - npm run verify:frontend
acceptance:
  - Planner, worker, verifier, reviewer, and recovery outputs remain separate
  - The run produces a sanitized metrics summary
  - The comparison reports measured values without generalizing from one trial
---

# Objective

Run a task comparable to phase 01 with worktree isolation, deterministic checks, and a read-only review. Compare the two runs as a case study, not as a statistical benchmark.
