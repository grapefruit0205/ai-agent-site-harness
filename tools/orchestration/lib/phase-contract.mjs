import { parse } from "yaml";

export function parsePhase(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Phase document must start with YAML frontmatter.");
  }

  const metadata = parse(match[1]);

  if (!Array.isArray(metadata.acceptance) || metadata.acceptance.length === 0) {
    throw new Error("acceptance must contain at least one item");
  }

  if (!Array.isArray(metadata.verify) || metadata.verify.length === 0) {
    throw new Error("verify must contain at least one command");
  }

  if (typeof metadata.branch !== "string" || !metadata.branch.startsWith("phase/")) {
    throw new Error("branch must start with phase/");
  }

  return {
    id: metadata.id,
    title: metadata.title,
    status: metadata.status,
    base: metadata.base,
    branch: metadata.branch,
    worktree: metadata.worktree,
    verify: metadata.verify,
    acceptance: metadata.acceptance,
    body: match[2].trim()
  };
}
