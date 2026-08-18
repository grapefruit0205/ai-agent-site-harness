#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { parsePhase } from "./lib/phase-contract.mjs";
import { createPhaseWorktree } from "./lib/worktree.mjs";

const [phaseFile, ...flags] = process.argv.slice(2);
const repositoryFlag = flags.indexOf("--repository");

if (!phaseFile) {
  throw new Error("Usage: new-phase.mjs <phase.md> [--repository <path>]");
}

const repository = resolve(
  repositoryFlag >= 0 ? flags[repositoryFlag + 1] : process.cwd()
);
const phase = parsePhase(readFileSync(resolve(phaseFile), "utf8"));
const target = resolve(repository, phase.worktree);
const result = createPhaseWorktree({
  repository,
  target,
  branch: phase.branch,
  base: phase.base
});

process.stdout.write(`${JSON.stringify({ phaseId: phase.id, ...result }, null, 2)}\n`);
