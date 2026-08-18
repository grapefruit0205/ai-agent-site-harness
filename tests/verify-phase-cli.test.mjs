import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

test("verify-phase writes failure evidence and exits nonzero", () => {
  const sandbox = mkdtempSync(join(tmpdir(), "agent-harness-verify-"));
  const phasePath = join(sandbox, "phase.md");
  const outputPath = join(sandbox, "verification.json");

  try {
    writeFileSync(
      phasePath,
      `---
id: phase-03
title: Capture a failed gate
status: planned
base: main
branch: codex/phase-03-failed-gate
worktree: .
verify:
  - node -e "process.exit(0)"
  - node -e "process.exit(2)"
acceptance:
  - Failure evidence is written
---

## Objective

Exercise the deterministic gate.
`
    );

    const result = spawnSync(
      process.execPath,
      [
        "tools/orchestration/verify-phase.mjs",
        phasePath,
        "--repository",
        process.cwd(),
        "--output",
        outputPath
      ],
      { cwd: process.cwd(), encoding: "utf8" }
    );
    const evidence = JSON.parse(readFileSync(outputPath, "utf8"));

    assert.equal(result.status, 1);
    assert.equal(evidence.phaseId, "phase-03");
    assert.equal(evidence.passed, false);
    assert.deepEqual(
      evidence.commands.map(({ exitCode }) => exitCode),
      [0, 2]
    );
  } finally {
    rmSync(sandbox, { recursive: true, force: true });
  }
});
