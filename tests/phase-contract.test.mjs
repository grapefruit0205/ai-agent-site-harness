import assert from "node:assert/strict";
import test from "node:test";

import { parsePhase } from "../tools/orchestration/lib/phase-contract.mjs";

const validPhase = `---
id: phase-01
title: Build the verification gate
status: planned
base: main
branch: phase/01-verification-gate
worktree: .worktrees/phase-01
verify:
  - npm test
acceptance:
  - Tests pass in a clean checkout
---

## Objective

Create a deterministic verification gate.
`;

test("parsePhase returns a validated phase contract", () => {
  assert.deepEqual(parsePhase(validPhase), {
    id: "phase-01",
    title: "Build the verification gate",
    status: "planned",
    base: "main",
    branch: "phase/01-verification-gate",
    worktree: ".worktrees/phase-01",
    verify: ["npm test"],
    acceptance: ["Tests pass in a clean checkout"],
    body: "## Objective\n\nCreate a deterministic verification gate."
  });
});

test("parsePhase rejects a phase without acceptance criteria", () => {
  const incompletePhase = validPhase.replace(
    "acceptance:\n  - Tests pass in a clean checkout\n",
    ""
  );

  assert.throws(
    () => parsePhase(incompletePhase),
    /acceptance must contain at least one item/
  );
});

test("parsePhase rejects a worker branch outside the phase namespace", () => {
  const unsafePhase = validPhase.replace(
    "branch: phase/01-verification-gate",
    "branch: main"
  );

  assert.throws(() => parsePhase(unsafePhase), /branch must start with phase\//);
});

test("parsePhase rejects a phase without verification commands", () => {
  const unverifiablePhase = validPhase.replace("verify:\n  - npm test\n", "");

  assert.throws(
    () => parsePhase(unverifiablePhase),
    /verify must contain at least one command/
  );
});
