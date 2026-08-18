import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("npm run build works in the host shell", () => {
  const result = spawnSync("npm run build", {
    cwd: projectRoot,
    encoding: "utf8",
    shell: true,
  });

  assert.equal(
    result.status,
    0,
    `npm run build failed:\n${result.stdout ?? ""}\n${result.stderr ?? ""}\n${result.error ?? ""}`,
  );
});
