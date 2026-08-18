#!/usr/bin/env node

import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import { parsePhase } from "./lib/phase-contract.mjs";

const directory = resolve(process.argv[2] ?? "docs/phases");
const files = readdirSync(directory)
  .filter((name) => /^phase-.*\.md$/.test(name))
  .sort();

if (files.length === 0) {
  throw new Error(`No phase documents found in ${directory}`);
}

const phases = files.map((file) => {
  const phase = parsePhase(readFileSync(resolve(directory, file), "utf8"));
  return { file, id: phase.id, status: phase.status, branch: phase.branch };
});

process.stdout.write(`${JSON.stringify({ count: phases.length, phases }, null, 2)}\n`);
