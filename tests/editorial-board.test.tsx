import assert from "node:assert/strict";
import { after, afterEach, test } from "node:test";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost/",
});

Object.defineProperties(globalThis, {
  window: { value: dom.window, configurable: true },
  document: { value: dom.window.document, configurable: true },
  navigator: { value: dom.window.navigator, configurable: true },
  HTMLElement: { value: dom.window.HTMLElement, configurable: true },
  Node: { value: dom.window.Node, configurable: true },
  MutationObserver: { value: dom.window.MutationObserver, configurable: true },
  getComputedStyle: { value: dom.window.getComputedStyle.bind(dom.window), configurable: true },
  IS_REACT_ACT_ENVIRONMENT: { value: true, configurable: true, writable: true },
});

class IntersectionObserverStub {
  observe() {}
  disconnect() {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  value: IntersectionObserverStub,
  configurable: true,
});

const React = await import("react");
const { cleanup, render, screen, waitFor } = await import("@testing-library/react");
const userEvent = (await import("@testing-library/user-event")).default;
const { ArticleInteractions } = await import("../app/article-interactions");
const { default: Home } = await import("../app/page");

after(() => dom.window.close());

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
  document.body.style.overflow = "";
});

test("opens each chapter as an accessible book and closes the selected book with Escape", async () => {
  const user = userEvent.setup({ document });
  render(React.createElement(ArticleInteractions));

  const chapterButtons = screen.getAllByRole("button", { name: /책 펼치기$/ });
  assert.equal(chapterButtons.length, 5);

  const learnButton = screen.getByRole("button", { name: "LEARN 책 펼치기" });
  await user.click(learnButton);

  const dialog = screen.getByRole("dialog", { name: "LEARN 자세히 읽기" });
  assert.match(dialog.textContent ?? "", /서로 다른 교육 과정/);
  assert.match(dialog.textContent ?? "", /기초 → 연결 → 에이전트 → 운영/);

  const closeButton = screen.getByRole("button", { name: "책 닫기" });
  await waitFor(() => assert.equal(document.activeElement, closeButton));

  await user.keyboard("{Escape}");

  assert.equal(screen.queryByRole("dialog"), null);
  assert.equal(document.activeElement, learnButton);
});

test("keeps the hero headline in four meaning-based display lines", () => {
  render(React.createElement(ArticleInteractions));

  const heading = screen.getByRole("heading", {
    name: "AI가 코드를 써줄수록, 개발자는 코드를 더 깊이 읽어야 합니다",
  });
  const lines = Array.from(heading.querySelectorAll(":scope > .title-line"));

  assert.deepEqual(
    lines.map((line) => line.textContent?.trim()),
    ["AI가 코드를", "써줄수록,", "개발자는 코드를", "더 깊이 읽어야 합니다"],
  );
});

test("places the verify title above both content columns", () => {
  render(React.createElement(Home));

  const section = document.querySelector("#verify");
  const content = section?.querySelector(":scope > .section-content");
  const heading = content?.querySelector(":scope > h2");
  const split = content?.querySelector(":scope > .split-content");

  assert.ok(section && content && heading && split);
  assert.match(heading.textContent ?? "", /에이전트의 텍스트 한 줄/);
  assert.ok(
    Boolean(heading.compareDocumentPosition(split) & Node.DOCUMENT_POSITION_FOLLOWING),
    "the full-width title must come before the two-column body",
  );
});

test("renders the requested article copy as deliberate display lines", () => {
  render(React.createElement(Home));

  const expectedLines = [
    ["#learn h2", ["서로 다른 교육 과정,", "왜 한 방향을 가리키고 있을까요?"]],
    ["#connect h2", ["RAG는 ‘지식’을 다루고,", "MCP는 ‘행동’할 도구를 연결합니다"]],
    ["#read h2", ["“AI가 다 작성해주는데,", "굳이 코딩을 배워야 할까요?”"]],
  ] as const;

  for (const [selector, lines] of expectedLines) {
    const heading = document.querySelector(selector);
    assert.ok(heading, `${selector} must exist`);
    assert.deepEqual(
      Array.from(heading.querySelectorAll(":scope > .section-title-line")).map((line) =>
        line.textContent?.trim(),
      ),
      lines,
    );
    assert.equal(
      heading.textContent?.replace(/\s+/g, " ").trim(),
      lines.join(" "),
      "line breaks must preserve a readable space when copied or announced",
    );
  }

  const learnCopy = document.querySelector("#learn .lead-copy");
  const readCopy = document.querySelector("#read .lead-copy");
  const editorCopy = document.querySelector("#learn .editor-note-copy");
  assert.ok(learnCopy && readCopy && editorCopy);
  assert.equal(learnCopy.querySelectorAll(":scope > .copy-line").length, 3);
  assert.equal(readCopy.querySelectorAll(":scope > .copy-line").length, 3);
  assert.equal(editorCopy.querySelectorAll(":scope > .copy-line").length, 2);
});

test("the close button dismisses a different chapter and restores its trigger", async () => {
  const user = userEvent.setup({ document });
  render(React.createElement(ArticleInteractions));

  const connectButton = screen.getByRole("button", { name: "CONNECT 책 펼치기" });
  await user.click(connectButton);

  assert.match(
    screen.getByRole("dialog", { name: "CONNECT 자세히 읽기" }).textContent ?? "",
    /RAG는 ‘지식’을 다루고/,
  );

  await user.click(screen.getByRole("button", { name: "책 닫기" }));

  assert.equal(screen.queryByRole("dialog"), null);
  assert.equal(document.activeElement, connectButton);
});

test("every chapter opens as a sourced mini-column with a practical question", async () => {
  const user = userEvent.setup({ document });
  render(React.createElement(ArticleInteractions));

  const chapterLabels = [
    "LEARN",
    "COLLABORATE",
    "CONNECT",
    "READ",
    "VERIFY",
  ];

  for (const label of chapterLabels) {
    await user.click(screen.getByRole("button", { name: `${label} 책 펼치기` }));

    const dialog = screen.getByRole("dialog", { name: `${label} 자세히 읽기` });
    const dialogText = dialog.textContent ?? "";

    assert.match(dialogText, /자료에서 확인되는 점/);
    assert.match(dialogText, /필자의 해석/);
    assert.match(dialogText, /현장에서 확인할 질문/);
    assert.ok(dialog.querySelectorAll("p").length >= 4);

    await user.click(screen.getByRole("button", { name: "책 닫기" }));
  }
});
