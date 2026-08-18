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

      <section className="agent-primer" id="agent-primer" aria-labelledby="agent-primer-title">
        <div className="agent-primer-inner">
          <p className="section-kicker">FROM ANSWER TO ACTION</p>
          <h2 id="agent-primer-title">답하는 모델에서, 일을 수행하는 시스템으로</h2>
          <p className="lead-copy compact">
            LLM과 AI Agent의 차이를 먼저 알아야 뒤에 나오는 RAG, MCP, 검증과 운영이
            하나의 시스템 안에서 어떤 역할을 맡는지 이해할 수 있습니다.
          </p>

          <div className="agent-comparison" aria-label="LLM과 AI Agent의 작업 흐름 비교">
            <div className="comparison-lane llm-lane">
              <span>LLM / ANSWER</span>
              <div className="comparison-flow">
                <b>질문</b><i aria-hidden="true">→</i><strong>LLM</strong><i aria-hidden="true">→</i><b>답변</b>
              </div>
              <p>질문에 맞는 텍스트를 생성합니다.</p>
            </div>
            <div className="comparison-lane agent-lane">
              <span>AI AGENT / ACTION</span>
              <div className="comparison-flow agent-flow">
                <b>목표</b><i aria-hidden="true">→</i><b>계획</b><i aria-hidden="true">→</i><b>정보 조회</b><i aria-hidden="true">→</i><b>도구 실행</b><i aria-hidden="true">→</i><b>검증</b><i aria-hidden="true">→</i><strong>결과</strong>
              </div>
              <p>목표를 받아 필요한 정보를 찾고 도구를 사용해 작업을 수행합니다.</p>
            </div>
          </div>

          <div className="agent-anatomy" aria-label="AI Agent 전체 구성요소">
            <div><b>MODEL</b><span>판단과 생성</span></div>
            <div><b>CONTEXT · MEMORY</b><span>RAG 등으로 근거 보강</span></div>
            <div><b>TOOLS</b><span>MCP 등으로 도구 연결</span></div>
            <div><b>ORCHESTRATION</b><span>계획·상태·작업 순서</span></div>
            <div><b>GUARDRAILS</b><span>권한·정책·사람의 승인</span></div>
            <div><b>EVALUATION</b><span>품질·비용·실제 사용</span></div>
          </div>

          <p className="primer-note">
            RAG는 Context를 보강하는 방식이고 MCP는 Tools를 연결하는 규약입니다.
            둘은 Agent의 일부이며, 실행 흐름과 권한, 평가 체계까지 함께 설계해야 합니다.
          </p>
        </div>
      </section>

      <section className="agent-thesis" id="thesis" aria-labelledby="thesis-title">
        <div className="agent-thesis-inner">
          <p className="section-kicker">WHY DEVELOPERS NEED THE WHOLE PICTURE</p>
          <h2 id="thesis-title">
            Agent가 행동할 수 있는 범위가 넓어지면,
            <span>개발자가 검토할 대상도 넓어집니다</span>
          </h2>
          <p>
            개발자는 생성된 코드만 검토하지 않습니다. Agent가 어떤 정보를 읽었는지,
            어떤 도구를 선택했는지, 어디까지 실행할 수 있는지, 실패했을 때 무엇을
            남겼는지까지 확인해야 합니다.
          </p>
          <div className="responsibility-scope" aria-label="개발자가 검토하는 시스템 범위">
            <span>코드</span><i aria-hidden="true">→</i><span>데이터</span><i aria-hidden="true">→</i><span>도구</span><i aria-hidden="true">→</i><span>권한</span><i aria-hidden="true">→</i><strong>로그와 결과</strong>
          </div>
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
            <p className="section-why">
              <span>WHY FOUNDATION</span>
              에이전트가 실패했을 때 원인이 모델, 데이터, API 중 어디에 있는지 구분하려면
              코드와 데이터 흐름을 읽을 수 있어야 합니다.
            </p>
            <p className="lead-copy">
              <span className="copy-line">네 교육과정의 순서를 나란히 놓으면 공통 흐름이 보입니다.</span>
              <span className="copy-line">코드를 읽고 데이터를 다룬 뒤 AI를 연결하고, 마지막에는 시스템을 배포하고 검증합니다.</span>
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
                <span className="copy-line">교육과정이 기초부터 시작하는 이유는 Agent가 코드와 데이터 위에서 움직이기 때문입니다.</span>
              </span>
            </p>
          </div>
        </section>

        {/* CHAPTER 02: CONNECT */}
        <section className="story-section section-connect" id="connect" data-reveal>
          <div className="section-index">02 / 05</div>
          <div className="section-content">
            <p className="section-kicker">WHY CONTEXT AND TOOLS</p>
            <h2>
              <span className="section-title-line">모델의 학습 데이터만으로는</span>
              {" "}
              <span className="section-title-line">최신 정보와 업무 도구에 접근할 수 없습니다</span>
            </h2>
            <p className="section-why">
              <span>WHY CONNECT</span>
              모델의 기억만으로 답하게 두면 최신 사내 정보를 놓칩니다. 답변만 생성하게
              두면 데이터 조회나 API 실행 같은 업무도 수행할 수 없습니다.
            </p>
            <p className="lead-copy compact">
              RAG는 관련 문서를 찾아 모델의 Context를 보강합니다. MCP는 Agent와 외부
              도구 사이의 연결 방식을 표준화합니다. MCP가 실행 안전성을 보장하는 것은 아니며,
              권한과 검증은 별도의 정책으로 설계해야 합니다.
            </p>

            <ConnectFieldnoteCards />

            <div className="video-sources connect-sources">
              <p>IBM Technology 자료를 바탕으로 지식과 도구의 연결 방식을 구분했습니다.</p>
              <a href="https://youtu.be/T-D1OfcDW1M" {...sourceProps}>IBM RAG 영상 보기 ↗</a>
              <a href="https://youtu.be/eur8dUO9mvE" {...sourceProps}>IBM MCP 영상 보기 ↗</a>
            </div>
          </div>
        </section>

        {/* CHAPTER 03: COLLABORATE */}
        <section className="story-section section-collab" id="collaborate" data-reveal>
          <div className="section-index">03 / 05</div>
          <div className="section-content">
            <p className="section-kicker">COLLABORATION IS ARCHITECTURE</p>
            <h2>에이전트 협업은 ‘대화’보다 ‘시스템 설계’에 가깝습니다</h2>
            <p className="section-why section-why-dark">
              <span>WHY ORCHESTRATE</span>
              업무가 길어질수록 하나의 Agent가 계획, 실행과 검토를 모두 안정적으로 맡기 어렵습니다.
            </p>
            <p className="lead-copy">
              여러 Agent를 사용한다면 역할, 공유 상태, 반복 한도와 사람에게 넘길 조건을
              코드로 정해야 합니다. 작업을 나눌 이유가 없다면 단일 Agent가 더 단순합니다.
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
                역할(Role), 공유 상태(State), 반복 한도(Limit), 사람 개입(Handoff)을
                코드로 명시해야 여러 Agent가 같은 업무 경계를 따릅니다.
              </p>
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
            <p className="section-why section-why-dark">
              <span>WHY READ</span>
              생성 속도는 빨라졌지만, 어떤 코드를 채택하고 실제 시스템에 올릴지 결정하는 사람은 개발자입니다.
            </p>
            <div className="counter-dialogue" aria-label="AI 코딩 시대의 질문과 답">
              <span>QUESTION</span>
              <p>코드 작성을 AI가 맡는다면 사람이 코딩을 공부하는 비중은 줄여도 될까요?</p>
              <span>ANSWER</span>
              <strong>개발자의 책임은 작성에서 판독, 검증, 통제와 운영으로 넓어집니다.</strong>
            </div>
            <p className="lead-copy compact">
              <span className="copy-line">생성된 코드가 한 번 실행됐다는 사실만으로는 채택할 수 없습니다.</span>
              <span className="copy-line">어떤 데이터를 어떻게 바꾸는지, 문제가 생겼을 때 어떻게 되돌릴 수 있는지,</span>
              <span className="copy-line">보안 지침을 잘 따르고 있는지 개발자가 직접 설명할 수 있어야 합니다.</span>
            </p>

            <div className="skill-ladder" aria-label="Jason Ku가 설명한 코딩 역량의 이동">
              <div><span>01</span><b>WRITE</b><small>코드 생성</small></div>
              <div><span>02</span><b>READ</b><small>실행 흐름 판독</small></div>
              <div><span>03</span><b>VERIFY</b><small>테스트와 데이터 검증</small></div>
              <div><span>04</span><b>STEER</b><small>요구사항과 수정 방향</small></div>
              <div><span>05</span><b>OWN</b><small>배포·복구·결과 책임</small></div>
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
            <h2>
              <span className="section-title-line">에이전트의 판단은 틀릴 수 있고,</span>
              {" "}
              <span className="section-title-line">도구 호출은 실제 상태를 바꿉니다</span>
            </h2>
            <p className="section-why">
              <span>WHY VERIFY</span>
              Agent가 답변을 넘어 행동한다면 잘못된 선택을 실행 직전에 막고, 그 이유를 로그로 남겨야 합니다.
            </p>
            <div className="split-content">
              <div>
                <p className="lead-copy">
                  챗봇의 텍스트 오류는 대화 실패로 끝나지만,
                  도구를 쥔 Agent의 잘못된 선택은 실제 데이터 변경이나 재무 손실로 이어질 수 있습니다.
                  개발자는 <strong>실행 전 의도 대조(Policy Gate), 최소 권한과 감사 로그</strong>를 코드로 구현해야 합니다.
                </p>
                <div className="safety-points">
                  <div><b>VALIDATE</b><p>입력과 출력 데이터를 실행 직전에 스키마로 검사합니다.</p></div>
                  <div><b>LIMIT</b><p>조회와 수정을 엄격히 분리하고 최소 권한만 부여합니다.</p></div>
                  <div><b>TRACE</b><p>모든 로그를 남겨 실패 원인을 추적하고 복구합니다.</p></div>
                </div>
                <p className="owasp-note">
                  웹 애플리케이션 보안 프로젝트 OWASP도 LLM 활용 시
                  <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/2_0_vulns/LLM05_ImproperOutputHandling" {...sourceProps}> 출력값 검증 미흡</a>과
                  <a href="https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" {...sourceProps}> 에이전트의 과도한 권한 보유</a>를 주요 위험 항목으로 다룹니다.
                </p>
              </div>
              <PermissionDemo />
            </div>
          </div>
        </section>

        {/* CONCLUSION & CAREER EPILOGUE */}
        <section className="story-section section-conclusion" id="conclusion" data-reveal>
          <div className="section-content">
            <p className="section-kicker">ACT · RETURN TO THE QUESTIONS</p>
            <h2>처음의 질문으로 돌아가 답해보겠습니다</h2>
            <div className="conclusion-body">
              <p className="lead-copy">
                AI Agent는 목표를 받아 필요한 정보를 찾고 도구를 사용해 작업을 수행하는 시스템입니다.
                실제 업무에 연결하려면 Context와 Tools, Orchestration, Guardrails, Evaluation을 함께 설계해야 합니다.
                개발자는 생성된 코드를 읽고 실행 범위를 제한하며, 결과를 검증하고 실패 원인을 설명해야 합니다.
                이 일을 수행하려면 코드와 데이터 흐름을 읽고 수정할 기본기가 필요합니다.
              </p>
              <p>
                포트폴리오에는 결과 화면뿐 아니라 도구 권한, 평가 기준, 실패 로그와 복구 과정도 함께 기록하는 편이 좋습니다.
              </p>
            </div>

            <div className="next-fieldnote-banner">
              <p>다음 FIELDNOTE에서는 AI 에이전트를 실제 조직에서 운영할 때 필요한 7개 계층과 거버넌스를 살펴봅니다.</p>
              <a href="/fieldnotes/agent-operations" className="next-fieldnote-link">
                FIELDNOTE 002: AI Agent는 왜 만드는 것보다 운영하는 것이 어려운가 ↗
              </a>
            </div>

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
