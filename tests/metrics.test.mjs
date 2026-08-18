import assert from "node:assert/strict";
import test from "node:test";

import { summarizeRun } from "../tools/orchestration/lib/metrics.mjs";

test("summarizeRun records a failed first pass and one recovery", () => {
  const summary = summarizeRun({
    phaseId: "phase-01",
    attempts: [
      {
        passed: false,
        humanInterventions: 1,
        tests: { total: 14, passed: 12, failed: 2 }
      },
      {
        passed: true,
        humanInterventions: 0,
        tests: { total: 14, passed: 14, failed: 0 }
      }
    ]
  });

  assert.deepEqual(summary, {
    phaseId: "phase-01",
    firstPass: false,
    recoveryCount: 1,
    humanInterventions: 1,
    finalStatus: "accepted",
    finalTests: { total: 14, passed: 14, failed: 0 }
  });
});
