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
  assert.equal(chapterButtons.length, 8);

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

test("the close button dismisses a different chapter and restores its trigger", async () => {
  const user = userEvent.setup({ document });
  render(React.createElement(ArticleInteractions));

  const connectButton = screen.getByRole("button", { name: "CONNECT 책 펼치기" });
  await user.click(connectButton);

  assert.match(
    screen.getByRole("dialog", { name: "CONNECT 자세히 읽기" }).textContent ?? "",
    /RAG는 지식을/,
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
    "OPERATE",
    "MEASURE",
    "ACT",
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
