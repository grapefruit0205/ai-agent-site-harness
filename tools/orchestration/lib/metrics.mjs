export function summarizeRun({ phaseId, attempts }) {
  const finalAttempt = attempts.at(-1);

  return {
    phaseId,
    firstPass: attempts[0]?.passed === true,
    recoveryCount: Math.max(0, attempts.length - 1),
    humanInterventions: attempts.reduce(
      (total, attempt) => total + (attempt.humanInterventions ?? 0),
      0
    ),
    finalStatus: finalAttempt?.passed ? "accepted" : "blocked",
    finalTests: finalAttempt?.tests ?? { total: 0, passed: 0, failed: 0 }
  };
}
