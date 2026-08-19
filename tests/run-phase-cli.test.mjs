import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import test from "node:test";

test("run-phase dry-run emits a bounded worker invocation without starting Codex", () => {
  const sandbox = mkdtempSync(join(tmpdir(), "agent-harness-phase-"));
  const phasePath = join(sandbox, "phase.md");

  try {
    writeFileSync(
      phasePath,
      `---
id: phase-01
title: Verify the harness
status: planned
base: main
branch: phase/01-verify
worktree: .worktrees/phase-01
verify:
  - npm test
acceptance:
  - All harness tests pass
---

## Objective

Run the bounded implementation phase.
`
    );

    const stdout = execFileSync(
      process.execPath,
      [
        "tools/orchestration/run-phase.mjs",
        phasePath,
        "--repository",
        process.cwd(),
        "--dry-run"
      ],
      { cwd: process.cwd(), encoding: "utf8" }
    );
    const result = JSON.parse(stdout);

    assert.equal(result.phaseId, "phase-01");
    assert.equal(result.invocation.command, "codex");
    assert.deepEqual(result.invocation.args, [
      "exec",
      "--json",
      "--sandbox",
      "workspace-write",
      "-"
    ]);
    assert.equal(result.invocation.cwd, resolve(".worktrees/phase-01"));
    assert.match(result.prompt, /All harness tests pass/);
    assert.match(result.prompt, /Do not merge or deploy/);
  } finally {
    rmSync(sandbox, { recursive: true, force: true });
  }
});

test("run-phase dry-run emits a read-only reviewer invocation", () => {
  const sandbox = mkdtempSync(join(tmpdir(), "agent-harness-review-"));
  const phasePath = join(sandbox, "phase.md");

  try {
    writeFileSync(
      phasePath,
      `---
id: phase-02
title: Review the change
status: planned
base: main
branch: phase/02-review
worktree: .worktrees/phase-02
verify:
  - npm test
acceptance:
  - Reviewer reports no blocking issue
---

## Objective

Review the worker diff and verification evidence.
`
    );

    const stdout = execFileSync(
      process.execPath,
      [
        "tools/orchestration/run-phase.mjs",
        phasePath,
        "--repository",
        process.cwd(),
        "--role",
        "reviewer",
        "--dry-run"
      ],
      { cwd: process.cwd(), encoding: "utf8" }
    );
    const result = JSON.parse(stdout);

    assert.deepEqual(result.invocation.args, [
      "exec",
      "--json",
      "--sandbox",
      "read-only",
      "-"
    ]);
    assert.match(result.prompt, /independent reviewer/);
  } finally {
    rmSync(sandbox, { recursive: true, force: true });
  }
});
