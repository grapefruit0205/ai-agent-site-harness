import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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

test("server-renders the complete Korean interactive article (FIELDNOTE 001)", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /<title>AI가 코드를 작성하는 시대, 개발자의 진짜 역할은 무엇일까요\?<\/title>/i);
  assert.match(html, /답하는 모델에서,/);
  assert.match(html, /일을 수행하는 시스템으로/);
  assert.match(html, /Agent가 행동할 수 있는 범위가 넓어지면/);
  assert.match(
    html,
    /property="og:image" content="https:\/\/ai-agent-code-reading\.chic-tick-3172\.chatgpt\.site\/og\.png"/,
  );
  assert.match(html, /name="twitter:card" content="summary_large_image"/);

  for (const sectionId of [
    "agent-primer",
    "thesis",
    "learn",
    "connect",
    "collaborate",
    "read",
    "verify",
    "conclusion",
  ]) {
    assert.match(html, new RegExp(`id="${sectionId}"`));
  }
});

test("renders accessible navigation and the permission experiment", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /aria-label="펼쳐볼 책 선택|5개 챕터 서가"/);
  assert.match(html, /aria-label="에이전트 권한 설정"/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /권한 넓게/);
  assert.match(html, /최소 권한/);
  assert.match(html, /10 SOURCES/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/i);
});

test("server-renders FIELDNOTE 002 (agent-operations page)", async () => {
  const response = await render("/fieldnotes/agent-operations");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /AI Agent는 왜 만드는 것보다/);
  assert.match(html, /운영하는 것이 어려운가/);
  assert.match(html, /Agent는 모델 하나로/);
  assert.match(html, /약 2,500만 건/);
  assert.match(html, /COMPANY-REPORTED CASE/);
  assert.match(html, /상위 10~20%의 에이전트에 실무 성과가 집중됩니다/);
  assert.match(html, /기업 자체 발표 수치이며 독립 기관의 검증 수치와는 다를 수 있습니다/);
  assert.match(html, /FIELDNOTE 001로 돌아가기|FIELDNOTE 001: AI가 코드를 써줄수록/);

  for (const sectionId of ["stack", "observe", "measure"]) {
    assert.match(html, new RegExp(`id="${sectionId}"`));
  }
});
