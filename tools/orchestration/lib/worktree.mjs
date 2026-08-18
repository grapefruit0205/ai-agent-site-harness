import { execFileSync } from "node:child_process";

function git(repository, ...args) {
  return execFileSync("git", ["-C", repository, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true
  }).trim();
}

export function createPhaseWorktree({ repository, target, branch, base }) {
  const baseCommit = git(repository, "rev-parse", base);
  git(repository, "worktree", "add", "-b", branch, target, base);

  return { branch, target, baseCommit };
}
