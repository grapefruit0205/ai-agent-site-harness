import assert from "node:assert/strict";
import test from "node:test";

import { buildCodexInvocation } from "../tools/orchestration/lib/codex-command.mjs";

test("buildCodexInvocation limits a worker to workspace-write", () => {
  assert.deepEqual(buildCodexInvocation({ role: "worker", cwd: "C:/repo/worktree" }), {
    command: "codex",
    args: ["exec", "--json", "--sandbox", "workspace-write", "-"],
    cwd: "C:/repo/worktree"
  });
});

test("buildCodexInvocation keeps an independent reviewer read-only", () => {
  assert.deepEqual(buildCodexInvocation({ role: "reviewer", cwd: "C:/repo/worktree" }), {
    command: "codex",
    args: ["exec", "--json", "--sandbox", "read-only", "-"],
    cwd: "C:/repo/worktree"
  });
});
