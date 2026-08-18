#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import { parsePhase } from "./lib/phase-contract.mjs";
import { runVerification } from "./lib/verification.mjs";

const [phaseFile, ...flags] = process.argv.slice(2);
const repositoryFlag = flags.indexOf("--repository");
const outputFlag = flags.indexOf("--output");

if (!phaseFile || outputFlag < 0 || !flags[outputFlag + 1]) {
  throw new Error(
    "Usage: verify-phase.mjs <phase.md> --output <verification.json> [--repository <path>]"
  );
}

const repository = resolve(
  repositoryFlag >= 0 ? flags[repositoryFlag + 1] : process.cwd()
);
const output = resolve(flags[outputFlag + 1]);
const phase = parsePhase(readFileSync(resolve(phaseFile), "utf8"));
const worktree = resolve(repository, phase.worktree);
const result = runVerification({ commands: phase.verify, cwd: worktree });
const evidence = {
  phaseId: phase.id,
  branch: phase.branch,
  worktree,
  passed: result.passed,
  commands: result.commands
};

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, `${JSON.stringify(evidence, null, 2)}\n`);
process.stdout.write(`${JSON.stringify(evidence, null, 2)}\n`);
process.exit(result.passed ? 0 : 1);
