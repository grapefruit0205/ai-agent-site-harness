import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { JSDOM, VirtualConsole } from "jsdom";

function rgbFromHex(value) {
  const hex = value.trim().replace("#", "");
  return [0, 2, 4].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16));
}

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

test("uses cool gray paper surfaces instead of warm beige", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(
    `<!doctype html><html><head><style>${css}</style></head><body></body></html>`,
    { virtualConsole },
  );
  const rootStyle = dom.window.getComputedStyle(dom.window.document.documentElement);

  for (const token of ["--paper", "--paper-deep"]) {
    const [red, green, blue] = rgbFromHex(rootStyle.getPropertyValue(token));
    assert.ok(blue > red, `${token} must lean blue rather than yellow`);
    assert.ok(green >= red, `${token} must remain a balanced cool gray`);
  }

  dom.window.close();
});

test("wraps Korean copy by phrase and centers responsive editorial images", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(
    `<!doctype html><html><head><style>${css}</style></head><body>
      <article class="story-section">
        <div class="section-content">
          <h2>문장의 의미 단위를 유지하는 제목</h2>
          <p>한국어 본문도 낱글자가 아니라 어절을 기준으로 줄바꿈합니다.</p>
          <figure><img src="diagram.png" alt="정렬 확인용 도표"></figure>
        </div>
      </article>
    </body></html>`,
    { virtualConsole },
  );

  const heading = dom.window.document.querySelector("h2");
  const paragraph = dom.window.document.querySelector("p");
  const image = dom.window.document.querySelector("img");
  assert.ok(heading && paragraph && image);

  const headingStyle = dom.window.getComputedStyle(heading);
  const paragraphStyle = dom.window.getComputedStyle(paragraph);
  const imageStyle = dom.window.getComputedStyle(image);

  assert.equal(headingStyle.wordBreak, "keep-all");
  assert.equal(paragraphStyle.wordBreak, "keep-all");
  assert.equal(paragraphStyle.overflowWrap, "break-word");
  assert.equal(imageStyle.display, "block");
  assert.equal(imageStyle.maxWidth, "100%");
  assert.equal(imageStyle.height, "auto");
  assert.equal(imageStyle.marginInline, "auto");

  dom.window.close();
});

test("centers the article axis and gives every section title one balanced scale", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(
    `<!doctype html><html><head><style>${css}</style></head><body>
      <section class="story-section">
        <div class="section-index">01 / 05</div>
        <div class="section-content">
          <p class="section-kicker">THE SHARED CURRICULUM</p>
          <h2>서로 다른 교육 과정, 왜 한 방향을 가리키고 있을까요?</h2>
          <p class="lead-copy">본문은 왼쪽 정렬을 유지하되 화면 중앙의 같은 축을 사용합니다.</p>
        </div>
      </section>
    </body></html>`,
    { virtualConsole },
  );

  const content = dom.window.document.querySelector(".section-content");
  const section = dom.window.document.querySelector(".story-section");
  const kicker = dom.window.document.querySelector(".section-kicker");
  const heading = dom.window.document.querySelector("h2");
  const lead = dom.window.document.querySelector(".lead-copy");
  assert.ok(section && content && kicker && heading && lead);

  const sectionStyle = dom.window.getComputedStyle(section);
  const contentStyle = dom.window.getComputedStyle(content);
  const kickerStyle = dom.window.getComputedStyle(kicker);
  const headingStyle = dom.window.getComputedStyle(heading);
  const leadStyle = dom.window.getComputedStyle(lead);

  assert.equal(sectionStyle.display, "block");
  assert.equal(contentStyle.maxWidth, "1120px");
  assert.equal(contentStyle.marginInline, "auto");
  assert.equal(kickerStyle.textAlign, "center");
  assert.equal(headingStyle.maxWidth, "1040px");
  assert.equal(headingStyle.marginInline, "auto");
  assert.equal(headingStyle.textAlign, "center");
  assert.equal(headingStyle.fontSize, "45.056px");
  assert.equal(leadStyle.marginInline, "auto");

  dom.window.close();
});
