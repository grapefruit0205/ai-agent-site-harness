import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Korean interactive article", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /<title>AI가 코드를 작성하는 시대, 개발자의 진짜 역할은 무엇일까요\?<\/title>/i);
  assert.match(html, /개발자는 코드를 더 깊이 읽어야 합니다/);
  assert.match(html, /사람이 지는 책임의 무게는 더 커집니다/);
  assert.match(html, /기업 발표 수치이며 독립 기관의 검증 수치와는 다를 수 있습니다/);
  assert.match(
    html,
    /property="og:image" content="https:\/\/ai-agent-code-reading\.chic-tick-3172\.chatgpt\.site\/og\.png"/,
  );
  assert.match(html, /name="twitter:card" content="summary_large_image"/);

  for (const sectionId of [
    "learn",
    "collaborate",
    "connect",
    "read",
    "verify",
    "operate",
    "measure",
    "act",
  ]) {
    assert.match(html, new RegExp(`id="${sectionId}"`));
  }
});

test("renders accessible navigation and the permission experiment", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /aria-label="칼럼 목차"/);
  assert.match(html, /aria-label="에이전트 권한 설정"/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /권한 넓게/);
  assert.match(html, /최소 권한/);
  assert.match(html, /11 SOURCES/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/i);
});
