import assert from "node:assert/strict";
import test from "node:test";

import { runVerification } from "../tools/orchestration/lib/verification.mjs";

test("runVerification records every command and fails the gate when one command fails", () => {
  const commands = [
    'node -e "process.exit(0)"',
    'node -e "process.exit(3)"'
  ];

  const result = runVerification({ commands, cwd: process.cwd() });

  assert.equal(result.passed, false);
  assert.deepEqual(
    result.commands.map(({ command, exitCode, passed }) => ({ command, exitCode, passed })),
    [
      { command: commands[0], exitCode: 0, passed: true },
      { command: commands[1], exitCode: 3, passed: false }
    ]
  );
});
