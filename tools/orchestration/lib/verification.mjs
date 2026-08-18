import { spawnSync } from "node:child_process";

export function runVerification({ commands, cwd }) {
  const results = commands.map((command) => {
    const result = spawnSync(command, {
      cwd,
      encoding: "utf8",
      shell: true,
      windowsHide: true
    });
    const exitCode = result.status ?? 1;

    return {
      command,
      exitCode,
      passed: exitCode === 0,
      stdout: result.stdout,
      stderr: result.stderr
    };
  });

  return {
    passed: results.every((result) => result.passed),
    commands: results
  };
}
