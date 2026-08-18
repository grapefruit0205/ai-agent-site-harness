#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { buildCodexInvocation } from "./lib/codex-command.mjs";
import { parsePhase } from "./lib/phase-contract.mjs";

const [phaseFile, ...flags] = process.argv.slice(2);

if (!phaseFile) {
  throw new Error("Usage: run-phase.mjs <phase.md> [--repository <path>] [--dry-run]");
}

const repositoryFlag = flags.indexOf("--repository");
const roleFlag = flags.indexOf("--role");
const repository = resolve(
  repositoryFlag >= 0 ? flags[repositoryFlag + 1] : process.cwd()
);
const role = roleFlag >= 0 ? flags[roleFlag + 1] : "worker";
const dryRun = flags.includes("--dry-run");
const phase = parsePhase(readFileSync(resolve(phaseFile), "utf8"));
const worktree = resolve(repository, phase.worktree);
const invocation = buildCodexInvocation({ role, cwd: worktree });
const prompt = [
  role === "reviewer"
    ? `You are the independent reviewer for ${phase.id}: ${phase.title}.`
    : `You are the worker for ${phase.id}: ${phase.title}.`,
  "",
  phase.body,
  "",
  "Acceptance criteria:",
  ...phase.acceptance.map((item) => `- ${item}`),
  "",
  "Run the declared verification commands before reporting completion.",
  "Do not merge or deploy."
].join("\n");

if (dryRun) {
  process.stdout.write(
    `${JSON.stringify({ phaseId: phase.id, invocation, prompt }, null, 2)}\n`
  );
  process.exit(0);
}

const result = spawnSync(invocation.command, invocation.args, {
  cwd: invocation.cwd,
  input: prompt,
  encoding: "utf8",
  windowsHide: true
});

process.stdout.write(result.stdout ?? "");
process.stderr.write(result.stderr ?? "");
process.exit(result.status ?? 1);
