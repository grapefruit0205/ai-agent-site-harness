---
id: phase-01
title: Measure a baseline coding-agent task
status: planned
base: main
branch: codex/phase-01-baseline-measurement
worktree: .worktrees/phase-01
verify:
  - npm run verify:harness
acceptance:
  - One bounded frontend task is executed without the harness and recorded without private prompt data
  - Rework count, elapsed time, test result, and human interventions are captured
  - The baseline task and harness task use comparable acceptance criteria
---

# Objective

Establish a comparison point for one small UI or documentation change. This phase measures the existing single-session method; it does not claim a historical baseline that Git cannot prove.
