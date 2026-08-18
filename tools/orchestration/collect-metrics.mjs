#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import { summarizeRun } from "./lib/metrics.mjs";

const [inputFile, ...flags] = process.argv.slice(2);
const outputFlag = flags.indexOf("--output");

if (!inputFile) {
  throw new Error("Usage: collect-metrics.mjs <attempts.json> [--output <summary.json>]");
}

const input = JSON.parse(readFileSync(resolve(inputFile), "utf8"));
const summary = summarizeRun(input);

if (outputFlag >= 0 && flags[outputFlag + 1]) {
  const output = resolve(flags[outputFlag + 1]);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, `${JSON.stringify(summary, null, 2)}\n`);
}

process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
