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
        alt: "AI가 코드를 써줄수록, 개발자는 더 깊이 읽어야 합니다",
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
          <span>9 MIN READ</span>
          <span>13 SOURCES</span>
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
            하지만 사람의 일은 줄지 않았어요.
            만들어진 코드를 정확히 판독하고, 안전하게 연결하며,
            운영 결과까지 책임지는 쪽으로 역할이 옮겨가고 있습니다.
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
          <strong>운영 및 시스템 책임</strong>
        </div>
      </section>

      <article className="article-body">
        <section className="story-section section-learn" id="learn" data-reveal>
          <div className="section-index">01 / 08</div>
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
              <span className="copy-line">코드를 읽고 데이터를 다루는 법을 먼저 익히고, 그 위에 AI를 연결한 뒤, 마지막에는 시스템을 실제로 배포하고 운영해보는 과정입니다.</span>
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

            <div className="course-grid">
              <a href="https://sesac.seoul.kr/sesac/course/offline/courseDetail.do?crsSn=1267" {...sourceProps}>
                <span>806H</span>
                <h3>베스핀글로벌</h3>
                <p>Python·Linux → AWS → 데이터 파이프라인 → 통합 분석 플랫폼</p>
                <b>원문 커리큘럼 보기 ↗</b>
              </a>
              <a href="https://networks-aicamp.io/program" {...sourceProps}>
                <span>MULTI</span>
                <h3>SK네트웍스</h3>
                <p>Python·SQL → RAG·MCP → 멀티에이전트 → 웹·클라우드 배포</p>
                <b>원문 커리큘럼 보기 ↗</b>
              </a>
              <a href="https://knda-hanwhasystems.com/training/detail/19" {...sourceProps}>
                <span>400H</span>
                <h3>한화시스템</h3>
                <p>백엔드 → RAG·MCP → LangGraph·Human-in-the-Loop → 제품화</p>
                <b>원문 커리큘럼 보기 ↗</b>
              </a>
              <a href="https://training.megazone.com/ai-campus/index.html" {...sourceProps}>
                <span>984H</span>
                <h3>메가존클라우드</h3>
                <p>Python·FastAPI → RAG·Tool Calling → LangGraph·ReAct → Kubernetes</p>
                <b>원문 커리큘럼 보기 ↗</b>
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

        <section className="story-section section-collab" id="collaborate" data-reveal>
          <div className="section-index">02 / 08</div>
          <div className="section-content">
            <p className="section-kicker">COLLABORATION IS ARCHITECTURE</p>
            <h2>에이전트 협업은 ‘대화’보다 ‘시스템 설계’에 가깝습니다</h2>
            <p className="lead-copy">
              에이전트를 제대로 쓰려면 복잡한 업무를 잘게 나누고, 각 에이전트가 어떤
              데이터를 보고 어디까지 행동할 수 있을지 명확히 정해주어야 합니다.
              입력값, 접근 권한, 공유할 상태, 작업 종료 조건, 그리고 에러 발생 시 사람에게
              바통을 넘길 지점까지 모두 섬세한 설계의 대상입니다.
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

            <div className="concept-strip">
              <div><b>ROLE</b><p>누가 조사하고 누가 행동할 것인가</p></div>
              <div><b>STATE</b><p>앞선 작업 결과를 어떻게 안전하게 전달할 것인가</p></div>
              <div><b>LIMIT</b><p>무한 루프나 과도한 비용을 어디서 차단할 것인가</p></div>
              <div><b>HANDOFF</b><p>어느 시점에 사람이 개입해 책임을 이어받을 것인가</p></div>
            </div>
          </div>
        </section>

        <section className="story-section section-connect" id="connect" data-reveal>
          <div className="section-index">03 / 08</div>
          <div className="section-content">
            <p className="section-kicker">TWO CONNECTION LAYERS</p>
            <h2>
              <span className="section-title-line">RAG는 ‘지식’을 다루고,</span>
              {" "}
              <span className="section-title-line">MCP는 ‘행동’할 도구를 연결합니다</span>
            </h2>
            <ConnectFieldnoteCards />

            <div className="system-diagram" aria-label="RAG와 MCP가 연결된 서비스 구조">
              <div className="diagram-lane">
                <span>KNOWLEDGE LANE (지식 접지: RAG)</span>
                <div><b>사내 문서·DB</b><i>→</i><b>임베딩·벡터 검색</b><i>→</i><b>검증된 컨텍스트</b></div>
              </div>
              <div className="diagram-core"><span>LLM</span><strong>판단 및 도구 실행 결정</strong></div>
              <div className="diagram-lane">
                <span>ACTION LANE (행동 실행: MCP)</span>
                <div><b>MCP Host</b><i>→</i><b>MCP Server</b><i>→</i><b>DB 쿼리 · API 호출</b></div>
              </div>
            </div>

            <div className="failure-grid">
              <div><span>01</span><h3>검색 결과가 없을 때</h3><p>지식 베이스에 없는 질문에 대해 임의 추측(환각) 대신 ‘근거 없음’을 명시하거나 사람에게 되묻는 Fallback 규칙이 필수입니다.</p></div>
              <div><span>02</span><h3>도구 스키마 불일치</h3><p>MCP Server가 요구하는 인자 스키마와 모델의 출력이 다르면 실행이 즉시 실패하므로 타입 유효성 검증이 필수적입니다.</p></div>
              <div><span>03</span><h3>과도한 에이전트 권한</h3><p>단순 조회 요청이 데이터 수정·삭제로 오작동하지 않도록 리소스 읽기 전용과 승인 게이트를 엄격히 분리해야 합니다.</p></div>
            </div>

            {/* 왜 필요한가: 실무 비교 벤토 카드 */}
            <div className="why-needed-bento" aria-label="RAG와 MCP가 실무에서 필요한 이유 비교">
              <div className="why-needed-header">
                <span className="why-badge">WHY WE NEED THIS</span>
                <h3>“그래서 RAG와 MCP가 실무에서 왜 반드시 필요할까요?”</h3>
                <p>
                  단독 LLM 챗봇의 치명적 한계(환각, 연동 파편화, 침묵)를 극복하고,
                  실제 기업 데이터와 업무 시스템을 안전하게 구동하는 엔터프라이즈 에이전트의 핵심 기둥입니다.
                </p>
              </div>

              <div className="why-needed-grid">
                <div className="why-column without-card">
                  <div className="why-col-title">
                    <span className="status-pill danger">WITHOUT RAG & MCP</span>
                    <h4>단독 모델의 한계와 위험</h4>
                  </div>
                  <ul>
                    <li>
                      <b>🚫 환각(Hallucination)의 늪</b>
                      <p>사내 최신 규정이나 DB를 알지 못해(Closed-book), 거짓 정보를 사실처럼 꾸며냄</p>
                    </li>
                    <li>
                      <b>🚫 N×M 연동 파편화</b>
                      <p>도구나 모델이 바뀔 때마다 맞춤 접착제 코드를 처음부터 다시 짜야 하는 유지보수 지옥</p>
                    </li>
                    <li>
                      <b>🚫 텍스트에 갇힌 무기력함</b>
                      <p>말로만 답변할 뿐, 실제 DB 조회나 클라우드 변경 등 어떤 업무 행동(Action)도 수행 불가</p>
                    </li>
                  </ul>
                </div>

                <div className="why-column with-card">
                  <div className="why-col-title">
                    <span className="status-pill success">WITH RAG & MCP</span>
                    <h4>엔터프라이즈 에이전트의 완성</h4>
                  </div>
                  <ul>
                    <li>
                      <b>⚡ 100% 근거 기반 지식 접지</b>
                      <p>사내 벡터 DB의 원문 문서를 실시간 참조(Open-book)하여 출처와 함께 정확하게 답변</p>
                    </li>
                    <li>
                      <b>⚡ AI의 USB-C 표준화</b>
                      <p>한 번 만든 MCP Server로 모든 에이전트가 데이터와 도구를 즉시 재사용 (N+M 확장성)</p>
                    </li>
                    <li>
                      <b>⚡ 통제된 자율 행동(Governed Action)</b>
                      <p>최소 권한 원칙과 사람의 승인 게이트(Human-in-the-Loop) 하에 실제 비즈니스 프로세스 자동화</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="video-sources" style={{ marginTop: "1.5rem" }}>
              <p>IBM Technology의 RAG 및 MCP 아키텍처 설명을 바탕으로 지식(Knowledge)과 행동(Action)의 연결 표준을 정리했습니다.</p>
              <a href="https://youtu.be/T-D1OfcDW1M" {...sourceProps}>IBM RAG 영상 보기 ↗</a>
              <a href="https://youtu.be/eur8dUO9mvE" {...sourceProps}>IBM MCP 영상 보기 ↗</a>
            </div>
          </div>
        </section>

        <section className="story-section section-read" id="read" data-reveal>
          <div className="section-index">04 / 08</div>
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

        <section className="story-section section-verify" id="verify" data-reveal>
          <div className="section-index">05 / 08</div>
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

        <section className="story-section section-operate" id="operate" data-reveal>
          <div className="section-index">06 / 08</div>
          <div className="section-content">
            <p className="section-kicker">THE OPERATING STACK</p>
            <h2>
              <span className="section-title-line">7 Layer AI Stack:</span>
              {" "}
              <span className="section-title-line">구축보다 운영이 어려운 이유</span>
            </h2>
            <p className="lead-copy compact">
              베스핀글로벌의 ‘7 Layer AI Stack’에 따르면, 성공적인 AI 서비스는 모델 하나만 잘 만든다고 완성되지 않습니다.
              모델 성능 저하, 프롬프트 드리프트, 토큰 비용을 지속적으로 관찰하고 평가·교체하는 운영 체계(LLMOps)가 뒷받침되어야 합니다.
            </p>

            <div className="operate-layout">
              <div className="layer-stack" aria-label="7 Layer AI Stack">
                <details open><summary><span>07</span><b>성과 · ROI</b><i>VALUE</i></summary><p>시간, 비용, 실제 사용률과 업무 기여도를 다각도로 측정합니다.</p></details>
                <details><summary><span>06</span><b>거버넌스 · 보안</b><i>TRUST</i></summary><p>접근 권한, 규제 준수, 보안 감사 및 책임 기준을 신중히 관리합니다.</p></details>
                <details><summary><span>05</span><b>에이전트 구축 · 운영</b><i>ACT</i></summary><p>에이전트의 역할, 사용할 도구, 평가 지표와 긴급 중단 조건 등을 설계합니다.</p></details>
                <details><summary><span>04</span><b>온톨로지</b><i>MEAN</i></summary><p>우리 조직만의 독특한 업무 개념과 관계를 AI가 제대로 이해하도록 정리합니다.</p></details>
                <details><summary><span>03</span><b>데이터</b><i>GROUND</i></summary><p>정제 과정, 데이터 품질, 접근 권한과 변경 이력을 체계적으로 다룹니다.</p></details>
                <details><summary><span>02</span><b>모델 · LLMOps</b><i>THINK</i></summary><p>모델 성능과 토큰 비용을 모니터링하고 필요시 적절한 모델로 교체합니다.</p></details>
                <details><summary><span>01</span><b>인프라</b><i>RUN</i></summary><p>안정적인 연산, 네트워크, 저장소 및 배포 환경을 제공합니다.</p></details>
              </div>

              <aside className="case-file">
                <p>CASE FILE / KHNP</p>
                <strong>약 2,500만 건</strong>
                <h3>문서 검색 시스템, 구축 그 이후의 이야기</h3>
                <p>
                  한국수력원자력은 원전 관련 대용량 문서를 RAG로 구축하면서,
                  엄격한 보안 기준에 맞춰 외부망과 분리된 사내 데이터센터 기반의 안정적인 운영 환경을 구현했습니다.
                </p>
                <div className="case-constraints">
                  <span>DATA CLEANING</span><span>ACCESS CONTROL</span><span>PRIVATE ENV</span>
                </div>
                <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-reference-260813/" {...sourceProps}>사례 상세 보기 ↗</a>
              </aside>
            </div>
          </div>
        </section>

        <section className="story-section section-measure" id="measure" data-reveal>
          <div className="section-index">07 / 08</div>
          <div className="section-content">
            <p className="section-kicker">BUILD COUNT ≠ BUSINESS VALUE</p>
            <h2>
              <span className="section-title-line">많이 만든 것과</span>
              {" "}
              <span className="section-title-line">잘 쓰이는 것은 다릅니다</span>
            </h2>

            <div className="metric-grid">
              <div><span>AX PROJECTS</span><strong>200+</strong><small>다양한 프로젝트 경험</small></div>
              <div><span>AI AGENTS</span><strong>511</strong><small>실무 도입 에이전트 수</small></div>
              <div><span>HOURS / YEAR</span><strong>36,800</strong><small>연간 절감 기대 시간</small></div>
            </div>
            <p className="self-report">* 위 수치는 기업 발표 수치이며 독립 기관의 검증 수치와는 다를 수 있습니다.</p>

            <div className="usage-story">
              <div className="usage-copy">
                <span>THE USAGE GAP</span>
                <h3>상위 10~20%의 에이전트가 생산성 향상의 대부분을 만듭니다</h3>
                <p>현장 인터뷰에 따르면, 만들어진 모든 에이전트가 매일 활발하게 사용되는 것은 아닙니다.</p>
              </div>
              <div className="usage-chart" aria-label="상위 사용 에이전트에 성과가 집중되는 구조">
                <div className="top-agents">
                  <span>TOP 10–20%</span>
                  <span>(핵심 활용)</span>
                </div>
                <div className="long-tail">
                  <span>LONG TAIL</span>
                  <span>(가끔 활용)</span>
                </div>
              </div>
            </div>

            <div className="operations-grid">
              <div><span>QUALITY</span><h3>답변 품질 저하</h3><p>참조 데이터나 사용자 질문 양식이 바뀌면 답변이 흔들릴 수 있습니다.</p></div>
              <div><span>COST</span><h3>비용 변동성</h3><p>토큰 사용량과 도구 호출이 많아질수록 건당 운영 비용이 가파르게 상승합니다.</p></div>
              <div><span>MODEL</span><h3>모델 업데이트</h3><p>기본 모델을 바꾸면 기존 프롬프트와 평가 항목을 다시 점검해야 합니다.</p></div>
              <div><span>DATA</span><h3>데이터 구조 변경</h3><p>문서 양식이나 DB 스키마가 조금만 바뀌어도 검색과 API 호출이 작동하지 않을 수 있습니다.</p></div>
            </div>
            <div className="bespin-links">
              <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-intro-260813/" {...sourceProps}>7 LAYER 소개글 읽기 ↗</a>
              <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-interview-260813/" {...sourceProps}>운영 전략 인터뷰 보기 ↗</a>
            </div>
          </div>
        </section>

        <section className="story-section section-act" id="act" data-reveal>
          <div className="section-index">08 / 08</div>
          <div className="section-content">
            <p className="section-kicker">WHAT TO DO NEXT</p>
            <h2>에이전트 활용 능력과 코딩 기본기, 하나의 실무 역량으로 묶어보세요</h2>
            <p className="lead-copy compact">
              우리의 목표는 단순히 코드를 빠르게 타이핑하는 사람이 되는 것이 아닙니다.
              AI와 함께 만든 시스템을 명확히 이해하고, 검증하며, 안정적으로 운영해낼 수 있는 개발자가 되는 것입니다.
            </p>

            <div className="audience-grid">
              <div>
                <span>JOB SEEKER</span>
                <h3>결과물뿐만 아니라 ‘검증 과정’을 보여주세요</h3>
                <p>복잡한 문제를 나누는 과정, 시스템 구조, 평가 기준, 실패 로그와 에러 복구 경험을 포트폴리오에 깊이 있게 담아보세요.</p>
                <b>PROBLEM → SYSTEM → EVAL → LEARNING</b>
              </div>
              <div>
                <span>EDUCATOR</span>
                <h3>탄탄한 기초와 에이전트 활용을 하나의 커리큘럼으로 묶어주세요</h3>
                <p>Python·SQL·클라우드 같은 기본기와 RAG·MCP·멀티에이전트를 동떨어진 과목으로 나누지 않고 이어지게 구성해보세요.</p>
                <b>FOUNDATION → CONNECTION → OPERATION</b>
              </div>
              <div>
                <span>MANAGER</span>
                <h3>에이전트 개수보다 ‘실제 운영 지표’에 주목해주세요</h3>
                <p>단순 제작 수량보다는 실제 활용률, 에러율, 건당 처리 비용, 그리고 사람이 검토하는 지점이 유효한지 지속 점검해보세요.</p>
                <b>USE → QUALITY → COST → ACCOUNTABILITY</b>
              </div>
            </div>

            <blockquote>
              <span>요약하며</span>
              AI가 코드를 더 많이 만들어내는 시대일수록,
              사람의 역할은 축소되는 것이 아니라 <strong>더 넓고 깊은 시스템을 관리하고 책임지는 방향으로 확장됩니다.</strong>
            </blockquote>
          </div>
        </section>
      </article>

      <footer className="site-footer">
        <div className="footer-title">
          <span>SOURCES / 13</span>
          <h2>참고 자료 둘러보기</h2>
        </div>
        <div className="source-list">
          <a href="https://sesac.seoul.kr/sesac/course/offline/courseDetail.do?crsSn=1267" {...sourceProps}><span>01</span>베스핀글로벌 클라우드 데이터 엔지니어 과정 ↗</a>
          <a href="https://networks-aicamp.io/program" {...sourceProps}><span>02</span>SK네트웍스 Family AI 캠프 ↗</a>
          <a href="https://knda-hanwhasystems.com/training/detail/19" {...sourceProps}><span>03</span>한화시스템 AI 에이전트 과정 ↗</a>
          <a href="https://training.megazone.com/ai-campus/index.html" {...sourceProps}><span>04</span>메가존클라우드 AI 캠퍼스 ↗</a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-intro-260813/" {...sourceProps}><span>05</span>7 Layer AI Stack 소개 ↗</a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-reference-260813/" {...sourceProps}><span>06</span>산업별 AX 사례 ↗</a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-interview-260813/" {...sourceProps}><span>07</span>AI 운영 전략 인터뷰 ↗</a>
          <a href="https://youtu.be/0QXzV2T9p20" {...sourceProps}><span>08</span>Jason Ku: Wrong tech skills ↗</a>
          <a href="https://youtu.be/sq67daxRZ6c" {...sourceProps}><span>09</span>Jason Ku: Learn to code? ↗</a>
          <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/2_0_vulns/LLM05_ImproperOutputHandling" {...sourceProps}><span>10</span>OWASP: Improper Output Handling ↗</a>
          <a href="https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" {...sourceProps}><span>11</span>OWASP: Excessive Agency ↗</a>
          <a href="https://youtu.be/T-D1OfcDW1M" {...sourceProps}><span>12</span>IBM Technology: What is RAG? ↗</a>
          <a href="https://youtu.be/eur8dUO9mvE" {...sourceProps}><span>13</span>IBM Technology: What is MCP? ↗</a>
        </div>
        <div className="footer-end">
          <p>FIELDNOTE 001 · SOURCE-BACKED DIGITAL ESSAY</p>
          <a href="#top">맨 위로 이동 ↑</a>
        </div>
      </footer>
    </main>
  );
}
