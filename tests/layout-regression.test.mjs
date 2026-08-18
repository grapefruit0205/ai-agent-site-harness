import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { JSDOM, VirtualConsole } from "jsdom";

test("keeps Korean technical terms intact in definition card headings", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(
    `<!doctype html><html><head><style>${css}</style></head><body>
      <div class="definition-card mcp-card">
        <h3>모델 컨텍스트 프로토콜</h3>
      </div>
    </body></html>`,
    { virtualConsole },
  );

  const heading = dom.window.document.querySelector(".definition-card h3");
  assert.ok(heading);
  assert.equal(dom.window.getComputedStyle(heading).wordBreak, "keep-all");

  dom.window.close();
});
