import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { parse } from "yaml";

test("repository keeps the requested portfolio boundaries", () => {
  for (const path of [
    ".github/workflows",
    "backend",
    "docs/adr",
    "docs/architecture",
    "docs/orchestration",
    "docs/phases",
    "docs/runbooks",
    "frontend",
    "infra/terraform",
    "tools/orchestration"
  ]) {
    assert.equal(existsSync(resolve(path)), true, `${path} must exist`);
  }
});

test("production workflow requires a manual input and protected environment", () => {
  const workflow = parse(
    readFileSync(resolve(".github/workflows/deploy-manual.yml"), "utf8")
  );

  assert.deepEqual(Object.keys(workflow.on), ["workflow_dispatch"]);
  assert.equal(workflow.jobs.deploy.if, "${{ inputs.perform_deploy }}");
  assert.equal(workflow.jobs.deploy.environment, "production");
  assert.equal(workflow.jobs.deploy.permissions["id-token"], "write");
});

test("every GitHub Actions workflow has a trigger and at least one job", () => {
  const directory = resolve(".github/workflows");

  for (const file of readdirSync(directory).filter((name) => name.endsWith(".yml"))) {
    const workflow = parse(readFileSync(resolve(directory, file), "utf8"));
    assert.equal(typeof workflow.on, "object", `${file} must declare on`);
    assert.equal(typeof workflow.jobs, "object", `${file} must declare jobs`);
    assert.ok(Object.keys(workflow.jobs).length > 0, `${file} must declare a job`);
  }
});

test("source commits remain ancestors of the harness branch", () => {
  for (const commit of [
    "873ae0c524a87f2a5bfeaf062fcb7c4b8f0069d1",
    "b033f25177043d62d42f9a4ae31fa10cf24dd7cb"
  ]) {
    const result = spawnSync(
      "git",
      ["merge-base", "--is-ancestor", commit, "HEAD"],
      { cwd: process.cwd(), windowsHide: true }
    );

    assert.equal(result.status, 0, `${commit} must remain reachable from HEAD`);
  }
});
