# Recover a failed phase

1. Keep the failed verification JSON unchanged.
2. Record the failed command, exit code, relevant output, and suspected cause.
3. Create a new attempt on the same phase branch or a dedicated `codex/<phase>-recovery-<n>` branch.
4. Add a regression test before changing behavior.
5. Apply the smallest correction and rerun every declared verification command.
6. Feed all attempts into `collect-metrics.mjs`.

```powershell
node tools/orchestration/collect-metrics.mjs attempts.json `
  --output docs/orchestration/runs/phase-01-summary.json
```

Do not delete the first failure or relabel a recovery as a first-pass success.
