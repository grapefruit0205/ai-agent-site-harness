import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { createPhaseWorktree } from "../tools/orchestration/lib/worktree.mjs";

function git(cwd, ...args) {
  return execFileSync("git", ["-C", cwd, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

test("createPhaseWorktree creates an isolated codex branch from the requested base", () => {
  const sandbox = mkdtempSync(join(tmpdir(), "agent-harness-worktree-"));
  const repository = join(sandbox, "repository");
  const worktree = join(sandbox, "phase-01");

  try {
    execFileSync("git", ["init", "-b", "main", repository]);
    git(repository, "config", "core.autocrlf", "false");
    git(repository, "config", "user.name", "Harness Test");
    git(repository, "config", "user.email", "harness@example.invalid");
    writeFileSync(join(repository, "README.md"), "baseline\n");
    git(repository, "add", "README.md");
    git(repository, "commit", "-m", "baseline");
    const baseCommit = git(repository, "rev-parse", "HEAD");

    const result = createPhaseWorktree({
      repository,
      target: worktree,
      branch: "codex/phase-01-isolation",
      base: "main"
    });

    assert.deepEqual(result, {
      branch: "codex/phase-01-isolation",
      target: worktree,
      baseCommit
    });
    assert.equal(git(worktree, "branch", "--show-current"), "codex/phase-01-isolation");
    assert.equal(git(worktree, "rev-parse", "HEAD"), baseCommit);
  } finally {
    if (existsAsWorktree(repository, worktree)) {
      git(repository, "worktree", "remove", "--force", worktree);
    }
    rmSync(sandbox, { recursive: true, force: true });
  }
});

function existsAsWorktree(repository, worktree) {
  try {
    return git(repository, "worktree", "list", "--porcelain").includes(worktree.replaceAll("\\", "/"));
  } catch {
    return false;
  }
}
