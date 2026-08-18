# Start a phase

1. Write a phase file under `docs/phases/` with YAML frontmatter, one objective, explicit boundaries, verification commands, and acceptance criteria.
2. Validate every phase contract.

```powershell
npm run validate:phases
```

3. Create the declared branch and worktree.

```powershell
node tools/orchestration/new-phase.mjs docs/phases/phase-01-baseline-measurement.md
```

4. Inspect the worker invocation without starting Codex.

```powershell
node tools/orchestration/run-phase.mjs docs/phases/phase-01-baseline-measurement.md --dry-run
```

5. Run without `--dry-run` only after confirming that the target worktree and permissions are correct. The current worker sandbox is `workspace-write`; it cannot merge or deploy by instruction.
