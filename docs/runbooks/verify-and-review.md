# Verify and review a phase

Run the phase's deterministic commands and save the result outside the committed raw-log path.

```powershell
node tools/orchestration/verify-phase.mjs docs/phases/phase-01-baseline-measurement.md `
  --output .harness/runs/raw/phase-01-verification.json
```

Inspect the JSON before asking for review. A failed command keeps the phase out of review.

Preview the reviewer invocation:

```powershell
node tools/orchestration/run-phase.mjs docs/phases/phase-01-baseline-measurement.md `
  --role reviewer `
  --dry-run
```

The reviewer runs with a read-only sandbox. Commit the decision summary, not raw model reasoning. A human merges after checking the diff, verification artifact, and reviewer findings.
