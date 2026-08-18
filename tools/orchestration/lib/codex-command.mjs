export function buildCodexInvocation({ role, cwd }) {
  const sandbox = role === "reviewer" ? "read-only" : "workspace-write";

  return {
    command: "codex",
    args: ["exec", "--json", "--sandbox", sandbox, "-"],
    cwd
  };
}
