import type { Metadata } from "next";
import {
  ArticleInteractions,
  ConnectFieldnoteCards,
  PermissionDemo,
} from "./article-interactions";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ai-agent-code-reading.chic-tick-3172.chatgpt.site";
const socialImageUrl = new URL("/og.png", siteUrl).toString();

export const metadata: Metadata = {
  title: "AI가 코드를 작성하는 시대, 개발자의 진짜 역할은 무엇일까요?",
  description:
    "교육과정과 현장 사례로 둘러보는 AI 에이전트 협업, 코딩 기본기, 그리고 운영 책임 이야기.",
  openGraph: {
    title: "AI가 코드를 작성하는 시대, 개발자의 진짜 역할은 무엇일까요?",
    description: "AI가 코드를 만들어주는 요즘, 우리는 무엇을 깊이 있게 배워야 할까요?",
    type: "article",
    url: siteUrl,
    images: [
      {
        url: socialImageUrl,
        width: 1731,
        height: 909,
        alt: "AI가 코드를 써줄수록, 개발자는 코드를 더 깊이 읽어야 합니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI가 코드를 작성하는 시대, 개발자의 진짜 역할은 무엇일까요?",
    description: "AI 에이전트 활용과 코딩 기본기를 함께 배우는 이유를 살펴봅니다.",
    images: [socialImageUrl],
  },
};

const sourceProps = {
  target: "_blank",
  rel: "noreferrer",
};

export default function Home() {
  return (
    <main>
      <ArticleInteractions />

      <header className="site-header" aria-label="아티클 정보">
        <a className="wordmark" href="#top" aria-label="페이지 맨 위로">
          FIELDNOTE <span>001</span>
        </a>
        <div className="header-meta" aria-label="읽기 정보">
          <span>8 MIN READ</span>
          <span>10 SOURCES</span>
          <span>2026.08.18</span>
        </div>
      </header>

      <section className="hero" id="legacy-hero" aria-labelledby="article-title">
        <div className="hero-copy">
          <p className="eyebrow">AI × CODE × OPERATIONS</p>
          <h1 id="article-title">
            AI가 코드를 써줄수록,
            <span>개발자는 코드를 더 깊이 읽어야 합니다</span>
          </h1>
          <p className="hero-deck">
            AI 덕분에 코드 생성이 순식간에 끝나는 시대입니다.
            하지만 사람의 일은 줄지 않았습니다.
            만들어진 코드를 정확히 판독하고, 안전하게 연결하며,
            결과까지 책임지는 쪽으로 역할이 옮겨가고 있습니다.
          </p>
          <a className="scroll-link" href="#thesis">
            <span aria-hidden="true">↓</span> 천천히 읽어보기
          </a>
        </div>

        <div className="hero-visual" aria-label="개발 역량의 이동: 작성에서 책임까지">
          <div className="signal signal-one">AGENT ONLINE</div>
          <div className="skill-stack">
            <div className="skill-card muted">
              <span>01</span>
              <strong>WRITE</strong>
            </div>
            <div className="skill-card">
              <span>02</span>
              <strong>READ</strong>
            </div>
            <div className="skill-card">
              <span>03</span>
              <strong>VERIFY</strong>
            </div>
            <div className="skill-card accent">
              <span>04</span>
              <strong>STEER</strong>
            </div>
            <div className="skill-card dark">
              <span>05</span>
              <strong>OWN</strong>
            </div>
          </div>
          <div className="signal signal-two">HUMAN IN THE LOOP</div>
        </div>

        <p className="hero-caption">A SOURCE-BACKED INTERACTIVE EDITORIAL</p>
      </section>

      <section className="thesis" id="thesis" aria-labelledby="thesis-title">
        <div className="thesis-label">핵심 인사이트</div>
        <h2 id="thesis-title">
          코드 생성이 쉬워진 만큼,
          <span>사람이 지는 책임의 무게는 더 커집니다.</span>
        </h2>
        <div className="responsibility-shift" aria-label="개발 책임의 이동">
          <span>직접 타이핑</span>
          <i aria-hidden="true">→</i>
          <span>코드 맥락 읽기</span>
          <i aria-hidden="true">→</i>
          <span>검증 및 통합</span>
          <i aria-hidden="true">→</i>
          <strong>시스템 결과 책임</strong>
        </div>
      </section>

      <article className="article-body">
        {/* CHAPTER 01: LEARN */}
        <section className="story-section section-learn" id="learn" data-reveal>
          <div className="section-index">01 / 05</div>
          <div className="section-content">
            <p className="section-kicker">THE SHARED CURRICULUM</p>
            <h2>
              <span className="section-title-line">서로 다른 교육 과정,</span>
              {" "}
              <span className="section-title-line">왜 한 방향을 가리키고 있을까요?</span>
            </h2>
            <p className="lead-copy">
              <span className="copy-line">서로 다른 분야를 다루는 대표 교육 프로그램 4곳을 살펴봤습니다.</span>
              <span className="copy-line">흥미롭게도 수강생들의 성장 경로를 이어보면 하나의 흐름이 완성됩니다.</span>
              <span className="copy-line">코드를 읽고 데이터를 다루는 법을 먼저 익히고, 그 위에 AI를 연결한 뒤, 마지막에는 시스템을 실제로 배포하고 검증해보는 과정입니다.</span>
            </p>

            <div className="learning-rail" aria-label="공통 학습 순서">
              <div><span>01</span><strong>PYTHON</strong><small>실행 흐름 이해하기</small></div>
              <i aria-hidden="true">→</i>
              <div><span>02</span><strong>DATA · API</strong><small>시스템 연결하기</small></div>
              <i aria-hidden="true">→</i>
              <div><span>03</span><strong>RAG · MCP</strong><small>지식과 도구 붙이기</small></div>
              <i aria-hidden="true">→</i>
              <div><span>04</span><strong>MULTI-AGENT</strong><small>역할과 상태 설계하기</small></div>
              <i aria-hidden="true">→</i>
              <div><span>05</span><strong>OPERATE</strong><small>배포·검증·지속적 개선</small></div>
            </div>

            <div className="course-reference-list" aria-label="분석 대상 교육과정 출처">
              <a href="https://sesac.seoul.kr/sesac/course/offline/courseDetail.do?crsSn=1267" {...sourceProps}>
                <b>베스핀글로벌</b><span>Python · Linux → AWS → 데이터 파이프라인 (806H) ↗</span>
              </a>
              <a href="https://networks-aicamp.io/program" {...sourceProps}>
                <b>SK네트웍스</b><span>Python · SQL → RAG · MCP → 멀티에이전트 배포 ↗</span>
              </a>
              <a href="https://knda-hanwhasystems.com/training/detail/19" {...sourceProps}>
                <b>한화시스템</b><span>백엔드 → RAG · MCP → LangGraph · HITL (400H) ↗</span>
              </a>
              <a href="https://training.megazone.com/ai-campus/index.html" {...sourceProps}>
                <b>메가존클라우드</b><span>Python · FastAPI → RAG · Tool Calling → K8s (984H) ↗</span>
              </a>
            </div>

            <p className="editor-note">
              <span className="editor-note-label">에디터의 한 줄 생각</span>
              <span className="editor-note-copy">
                <span className="copy-line">교육 과정이 달라도 배우는 순서는 비슷합니다.</span>
                <span className="copy-line">AI 에이전트는 기초를 대체하는 지름길이 아니라, 확실한 기초 위에 올라가는 새로운 시스템 레이어이기 때문입니다.</span>
              </span>
            </p>
          </div>
        </section>

        {/* CHAPTER 02: COLLABORATE */}
        <section className="story-section section-collab" id="collaborate" data-reveal>
          <div className="section-index">02 / 05</div>
          <div className="section-content">
            <p className="section-kicker">COLLABORATION IS ARCHITECTURE</p>
            <h2>에이전트 협업은 ‘대화’보다 ‘시스템 설계’에 가깝습니다</h2>
            <p className="lead-copy">
              에이전트를 제대로 쓰려면 복잡한 업무를 잘게 나누고, 각 에이전트가 어떤
              데이터를 보고 어디까지 행동할 수 있을지 명확히 정해주어야 합니다.
              입력값, 접근 권한, 공유할 상태, 작업 종료 조건, 그리고 에러 발생 시 사람에게
              바통을 넘길 지점까지 모두 섬세한 시스템 설계의 대상입니다.
            </p>

            <div className="agent-map" aria-label="멀티에이전트 협업 구조 예시">
              <div className="map-node problem"><span>풀어야 할 문제</span><strong>무엇을 자동화할까?</strong></div>
              <div className="map-arrow" aria-hidden="true">↓</div>
              <div className="map-node planner"><span>PLANNER</span><strong>업무 분해 · 순서 결정</strong></div>
              <div className="map-branch" aria-hidden="true"><span /><span /><span /></div>
              <div className="agent-row">
                <div className="map-node"><span>RESEARCH</span><strong>근거 및 자료 수집</strong><small>읽기 전용 권한</small></div>
                <div className="map-node"><span>TOOL</span><strong>API 실제 실행</strong><small>제한된 접근 권한</small></div>
                <div className="map-node"><span>REVIEWER</span><strong>결과물 검증</strong><small>명확한 평가 기준</small></div>
              </div>
              <div className="map-arrow" aria-hidden="true">↓</div>
              <div className="map-node human"><span>HUMAN GATE</span><strong>최종 승인 · 수정 · 중단 판단</strong></div>
            </div>

            <div className="architecture-caption">
              <p>
                <strong>설계 경계</strong>: 멀티에이전트는 자유로운 대화가 아니라
                <b> 역할(Role)</b>, <b>공유 상태(State)</b>, <b>비용·루프 한도(Limit)</b>, 그리고 <b>사람 개입(Handoff)</b>을
                코드로 명시하는 분산 시스템 아키텍처입니다.
              </p>
            </div>
          </div>
        </section>

        {/* CHAPTER 03: CONNECT */}
        <section className="story-section section-connect" id="connect" data-reveal>
          <div className="section-index">03 / 05</div>
          <div className="section-content">
            <p className="section-kicker">TWO CONNECTION LAYERS</p>
            <h2>
              <span className="section-title-line">RAG는 ‘지식’을 다루고,</span>
              {" "}
              <span className="section-title-line">MCP는 ‘행동’할 도구를 연결합니다</span>
            </h2>
            <p className="lead-copy compact">
              RAG는 모델이 답변하기 전 관련 문서를 검색해 근거를 보강하고,
              MCP는 모델이 외부 데이터와 도구에 접근할 수 있도록 표준 규약을 제공합니다.
            </p>

            <ConnectFieldnoteCards />

            <div className="system-diagram" aria-label="RAG와 MCP가 연결된 서비스 구조">
              <div className="diagram-lane">
                <span>KNOWLEDGE LANE (지식 보강: RAG)</span>
                <div><b>사내 문서·DB</b><i>→</i><b>임베딩·벡터 검색</b><i>→</i><b>검증된 컨텍스트</b></div>
              </div>
              <div className="diagram-core"><span>LLM</span><strong>판단 및 도구 실행 결정</strong></div>
              <div className="diagram-lane">
                <span>ACTION LANE (행동 실행: MCP)</span>
                <div><b>MCP Host</b><i>→</i><b>MCP Server</b><i>→</i><b>DB 쿼리 · API 호출</b></div>
              </div>
            </div>

            <div className="video-sources">
              <p>IBM Technology의 해설을 바탕으로 지식(Knowledge)과 행동(Action)의 연결 표준을 정리했습니다.</p>
              <a href="https://youtu.be/T-D1OfcDW1M" {...sourceProps}>IBM RAG 영상 보기 ↗</a>
              <a href="https://youtu.be/eur8dUO9mvE" {...sourceProps}>IBM MCP 영상 보기 ↗</a>
            </div>
          </div>
        </section>

        {/* CHAPTER 04: READ */}
        <section className="story-section section-read" id="read" data-reveal>
          <div className="section-index">04 / 05</div>
          <div className="section-content">
            <p className="section-kicker">THE COUNTERARGUMENT</p>
            <h2>
              <span className="section-title-line">“AI가 다 작성해주는데,</span>
              {" "}
              <span className="section-title-line">굳이 코딩을 배워야 할까요?”</span>
            </h2>
            <div className="counter-grid">
              <div className="counter-claim">
                <span>흔히 하는 생각</span>
                <p>코드 작성을 AI가 해주니까, 사람이 코딩을 공부하는 비중은 줄여도 되지 않을까요?</p>
              </div>
              <div className="counter-answer">
                <span>우리가 놓치기 쉬운 점</span>
                <p>작성은 쉬워져도, 그 코드를 채택하고 검증해서 실제 시스템에 올리는 책임은 여전히 사람 몫입니다.</p>
              </div>
            </div>
            <p className="lead-copy compact">
              <span className="copy-line">AI가 만들어준 코드가 당장 잘 돌아간다고 해서 끝이 아닙니다.</span>
              <span className="copy-line">어떤 데이터를 어떻게 바꾸는지, 문제가 생겼을 때 어떻게 되돌릴 수 있는지,</span>
              <span className="copy-line">보안 지침을 잘 따르고 있는지 개발자가 직접 설명할 수 있어야 합니다.</span>
            </p>

            <div className="skill-ladder" aria-label="Jason Ku가 설명한 코딩 역량의 이동">
              <div><span>01</span><b>WRITE</b><small>직접 타이핑</small></div>
              <div><span>02</span><b>READ</b><small>실행 흐름 판독</small></div>
              <div><span>03</span><b>VERIFY</b><small>테스트와 검증</small></div>
              <div><span>04</span><b>STEER</b><small>AI에게 방향 제시</small></div>
              <div><span>05</span><b>INTENT</b><small>의도와 기준 정의</small></div>
            </div>

            <div className="video-sources">
              <p>엔지니어 Jason Ku의 제언을 바탕으로 재구성한 내용입니다.</p>
              <a href="https://youtu.be/0QXzV2T9p20" {...sourceProps}>WRONG TECH SKILLS 영상 보기 ↗</a>
              <a href="https://youtu.be/sq67daxRZ6c" {...sourceProps}>LEARN TO CODE? 영상 보기 ↗</a>
            </div>
          </div>
        </section>

        {/* CHAPTER 05: VERIFY */}
        <section className="story-section section-verify" id="verify" data-reveal>
          <div className="section-index">05 / 05</div>
          <div className="section-content">
            <p className="section-kicker">FROM TEXT TO ACTION</p>
            <h2>에이전트의 텍스트 한 줄은 실제 시스템의 행동이 됩니다</h2>
            <div className="split-content">
              <div>
                <p className="lead-copy">
                  챗봇의 텍스트 오류는 대화 실패로 끝나지만,
                  도구를 쥔 에이전트의 잘못된 선택은 실제 데이터 변조와 재무 손실로 직결됩니다.
                  단순 프롬프트 작성을 넘어, <strong>실행 전 의도 대조(Policy Gate), 최소 권한 격리, 감사 로그</strong>를 코드로 구현하는 능력이 핵심입니다.
                </p>
                <div className="safety-points">
                  <div><b>VALIDATE</b><p>입력과 출력 데이터를 실행 직전에 스키마로 검사합니다.</p></div>
                  <div><b>LIMIT</b><p>조회와 수정을 엄격히 분리하고 최소 권한만 부여합니다.</p></div>
                  <div><b>TRACE</b><p>모든 로그를 남겨 실패 원인을 추적하고 복구합니다.</p></div>
                </div>
                <p className="owasp-note">
                  OWASP(국제웹보안표준기구)에서도 LLM 활용 시
                  <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/2_0_vulns/LLM05_ImproperOutputHandling" {...sourceProps}> 출력값 검증 미흡</a>과
                  <a href="https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" {...sourceProps}> 에이전트의 과도한 권한 보유</a>를 최우선 보안 위험으로 지목합니다.
                </p>
              </div>
              <PermissionDemo />
            </div>
          </div>
        </section>

        {/* CONCLUSION & CAREER EPILOGUE */}
        <section className="story-section section-conclusion" id="conclusion" data-reveal>
          <div className="section-content">
            <p className="section-kicker">CONCLUSION</p>
            <h2>에이전트 활용 능력과 코딩 기본기는 하나의 실무 역량입니다</h2>
            <div className="conclusion-body">
              <p className="lead-copy">
                생성 도구는 빠르게 코드를 채우지만, 시스템 경계를 설계하고 실패를 검증하며 결과를 책임지는 일은 개발자의 몫으로 남습니다.
                AI 에이전트 활용 능력과 코딩 기본기는 서로 대체하는 역량이 아니라, 탄탄한 기초 위에 새로운 도구를 얹는 하나의 완성된 실무 역량입니다.
              </p>
              <p>
                취업 준비생과 주니어 개발자에게 필요한 포트폴리오 역시 단순히 &lsquo;AI로 빠르게 구현한 결과물 화면&rsquo;에 머물지 않습니다.
                어떤 문제를 왜 나누었는지, 데이터와 권한을 어떻게 제한했는지, 어떤 평가 기준으로 모델의 출력을 검증했는지,
                그리고 실패했을 때의 복구 로그를 함께 기록하는 것이 현장에서 요구하는 개발자의 판단력을 증명합니다.
              </p>
            </div>

            <div className="next-fieldnote-banner">
              <p>다음 FIELDNOTE에서는 AI 에이전트를 실제 조직에서 운영할 때 필요한 7개 계층과 거버넌스를 살펴봅니다.</p>
              <a href="/fieldnotes/agent-operations" className="next-fieldnote-link">
                FIELDNOTE 002: AI Agent는 왜 만드는 것보다 운영하는 것이 어려운가 ↗
              </a>
            </div>

            <blockquote>
              <span>요약하며</span>
              AI가 코드를 더 많이 만들어내는 시대일수록,
              사람의 역할은 축소되는 것이 아니라 <strong>더 넓고 깊은 시스템을 검증하고 책임지는 방향으로 확장됩니다.</strong>
            </blockquote>
          </div>
        </section>
      </article>

      <footer className="site-footer">
        <div className="footer-title">
          <span>SOURCES / 10</span>
          <h2>참고 자료 둘러보기</h2>
        </div>
        <div className="source-list">
          <a href="https://sesac.seoul.kr/sesac/course/offline/courseDetail.do?crsSn=1267" {...sourceProps}><span>01</span>베스핀글로벌 클라우드 데이터 엔지니어 과정 ↗</a>
          <a href="https://networks-aicamp.io/program" {...sourceProps}><span>02</span>SK네트웍스 Family AI 캠프 ↗</a>
          <a href="https://knda-hanwhasystems.com/training/detail/19" {...sourceProps}><span>03</span>한화시스템 AI 에이전트 과정 ↗</a>
          <a href="https://training.megazone.com/ai-campus/index.html" {...sourceProps}><span>04</span>메가존클라우드 AI 캠퍼스 ↗</a>
          <a href="https://youtu.be/0QXzV2T9p20" {...sourceProps}><span>05</span>Jason Ku: Wrong tech skills ↗</a>
          <a href="https://youtu.be/sq67daxRZ6c" {...sourceProps}><span>06</span>Jason Ku: Learn to code? ↗</a>
          <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/2_0_vulns/LLM05_ImproperOutputHandling" {...sourceProps}><span>07</span>OWASP: Improper Output Handling ↗</a>
          <a href="https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" {...sourceProps}><span>08</span>OWASP: Excessive Agency ↗</a>
          <a href="https://youtu.be/T-D1OfcDW1M" {...sourceProps}><span>09</span>IBM Technology: What is RAG? ↗</a>
          <a href="https://youtu.be/eur8dUO9mvE" {...sourceProps}><span>10</span>IBM Technology: What is MCP? ↗</a>
        </div>
        <div className="footer-end">
          <p>FIELDNOTE 001 · SOURCE-BACKED DIGITAL ESSAY</p>
          <a href="#top">맨 위로 이동 ↑</a>
        </div>
      </footer>
    </main>
  );
}
