import type { Metadata } from "next";
import { ArticleInteractions, PermissionDemo } from "./article-interactions";

export const metadata: Metadata = {
  title: "AI가 코드를 쓸수록, 개발자는 더 깊이 읽어야 한다",
  description:
    "교육과정과 산업 사례로 살펴보는 AI 에이전트 협업, 코딩 기본기, 그리고 운영 책임의 변화.",
  openGraph: {
    title: "AI가 코드를 쓸수록, 개발자는 더 깊이 읽어야 한다",
    description: "AI가 코드를 생성하는 시대, 사람은 무엇을 배워야 할까?",
    type: "article",
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
          <span>11 SOURCES</span>
          <span>2026.08.18</span>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="article-title">
        <div className="hero-copy">
          <p className="eyebrow">AI × CODE × OPERATIONS</p>
          <h1 id="article-title">
            AI가 코드를 쓸수록,
            <span>개발자는 더 깊이 읽어야 한다</span>
          </h1>
          <p className="hero-deck">
            코드 생성의 속도가 빨라질수록 사람의 일은 사라지지 않는다.
            판독하고, 검증하고, 시스템에 연결하고, 운영 결과를 책임하는 쪽으로
            이동한다.
          </p>
          <a className="scroll-link" href="#thesis">
            <span aria-hidden="true">↓</span> SCROLL TO READ
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
        <div className="thesis-label">THE CENTRAL ARGUMENT</div>
        <h2 id="thesis-title">
          코드 생성이 자동화될수록
          <span>책임은 사라지지 않고 위로 이동한다.</span>
        </h2>
        <div className="responsibility-shift" aria-label="개발 책임의 이동">
          <span>직접 타이핑</span>
          <i aria-hidden="true">→</i>
          <span>코드 판독</span>
          <i aria-hidden="true">→</i>
          <span>검증·통합</span>
          <i aria-hidden="true">→</i>
          <strong>운영 책임</strong>
        </div>
      </section>

      <article className="article-body">
        <section className="story-section section-learn" id="learn" data-reveal>
          <div className="section-index">01 / 08</div>
          <div className="section-content">
            <p className="section-kicker">THE SHARED CURRICULUM</p>
            <h2>서로 다른 교육과정은 왜 같은 순서로 움직일까</h2>
            <p className="lead-copy">
              네 개의 교육장은 서로 다른 분야를 내세운다. 그런데 수강생의
              이동 경로를 겹쳐 보면 하나의 선이 나타난다. 먼저 코드를 읽고
              데이터를 다룬다. 그 위에 AI를 연결하고, 마지막에는 팀이 만든
              시스템을 배포하거나 운영 환경에 올린다.
            </p>

            <div className="learning-rail" aria-label="공통 학습 순서">
              <div><span>01</span><strong>PYTHON</strong><small>실행 흐름 이해</small></div>
              <i aria-hidden="true">→</i>
              <div><span>02</span><strong>DATA · API</strong><small>시스템과 연결</small></div>
              <i aria-hidden="true">→</i>
              <div><span>03</span><strong>RAG · MCP</strong><small>지식과 도구 연결</small></div>
              <i aria-hidden="true">→</i>
              <div><span>04</span><strong>MULTI-AGENT</strong><small>역할과 상태 설계</small></div>
              <i aria-hidden="true">→</i>
              <div><span>05</span><strong>OPERATE</strong><small>배포·검증·개선</small></div>
            </div>

            <div className="course-grid">
              <a href="https://training.megazone.com/ai-campus/index.html" {...sourceProps}>
                <span>984H</span>
                <h3>메가존클라우드</h3>
                <p>Python·FastAPI → RAG·Tool Calling → LangGraph·ReAct → Kubernetes</p>
                <b>OPEN SOURCE ↗</b>
              </a>
              <a href="https://networks-aicamp.io/program" {...sourceProps}>
                <span>MULTI</span>
                <h3>SK네트웍스</h3>
                <p>Python·SQL → RAG·MCP → 멀티에이전트 → 웹·클라우드 배포</p>
                <b>OPEN SOURCE ↗</b>
              </a>
              <a href="https://knda-hanwhasystems.com/training/detail/19" {...sourceProps}>
                <span>400H</span>
                <h3>한화시스템</h3>
                <p>백엔드 → RAG·MCP → LangGraph·Human-in-the-Loop → 제품화</p>
                <b>OPEN SOURCE ↗</b>
              </a>
              <a href="https://sesac.seoul.kr/sesac/course/offline/courseDetail.do?crsSn=1267" {...sourceProps}>
                <span>806H</span>
                <h3>SeSAC</h3>
                <p>Python·Linux → AWS → 데이터 파이프라인 → 통합 분석 플랫폼</p>
                <b>OPEN SOURCE ↗</b>
              </a>
            </div>

            <p className="editor-note">
              <span>EDITOR&apos;S READ</span>
              분야는 달라도 순서는 같다. 에이전트는 기초를 건너뛰는 지름길이
              아니라, 기초 위에 올라가는 새로운 시스템 계층이다.
            </p>
          </div>
        </section>

        <section className="story-section section-collab" id="collaborate" data-reveal>
          <div className="section-index">02 / 08</div>
          <div className="section-content">
            <p className="section-kicker">COLLABORATION IS ARCHITECTURE</p>
            <h2>에이전트 협업은 대화 기술보다 시스템 설계에 가깝다</h2>
            <p className="lead-copy">
              업무를 작은 작업으로 나누고, 각 에이전트가 무엇을 읽고 어디까지
              행동할지 정해야 한다. 입력, 권한, 공유 상태, 종료 조건, 실패 시
              사람에게 넘기는 지점이 모두 설계 대상이다.
            </p>

            <div className="agent-map" aria-label="멀티에이전트 협업 구조 예시">
              <div className="map-node problem"><span>현업 문제</span><strong>무엇을 자동화할까?</strong></div>
              <div className="map-arrow" aria-hidden="true">↓</div>
              <div className="map-node planner"><span>PLANNER</span><strong>업무 분해 · 순서 결정</strong></div>
              <div className="map-branch" aria-hidden="true"><span /><span /><span /></div>
              <div className="agent-row">
                <div className="map-node"><span>RESEARCH</span><strong>근거 검색</strong><small>읽기 전용</small></div>
                <div className="map-node"><span>TOOL</span><strong>API 실행</strong><small>권한 제한</small></div>
                <div className="map-node"><span>REVIEWER</span><strong>결과 검증</strong><small>평가 기준</small></div>
              </div>
              <div className="map-arrow" aria-hidden="true">↓</div>
              <div className="map-node human"><span>HUMAN GATE</span><strong>승인 · 수정 · 중단</strong></div>
            </div>

            <div className="concept-strip">
              <div><b>ROLE</b><p>누가 조사하고 누가 실행하는가</p></div>
              <div><b>STATE</b><p>앞 작업의 결과를 어떻게 넘기는가</p></div>
              <div><b>LIMIT</b><p>반복과 비용을 어디서 멈추는가</p></div>
              <div><b>HANDOFF</b><p>언제 사람이 책임을 이어받는가</p></div>
            </div>
          </div>
        </section>

        <section className="story-section section-connect" id="connect" data-reveal>
          <div className="section-index">03 / 08</div>
          <div className="section-content">
            <p className="section-kicker">TWO CONNECTION LAYERS</p>
            <h2>RAG는 지식을, MCP는 행동할 도구를 연결한다</h2>
            <div className="definition-grid">
              <div className="definition-card rag-card">
                <span>RAG</span>
                <h3>검색 증강 생성</h3>
                <p>모델이 답하기 전에 관련 문서를 찾아 근거로 붙이는 방식이다.</p>
                <div className="mini-flow"><i>문서</i><b>→</b><i>검색</i><b>→</b><i>답변</i></div>
              </div>
              <div className="definition-card mcp-card">
                <span>MCP</span>
                <h3>모델 컨텍스트 프로토콜</h3>
                <p>AI 애플리케이션을 외부 도구와 데이터에 연결하는 규약이다.</p>
                <div className="mini-flow"><i>AI</i><b>↔</b><i>도구</i><b>↔</b><i>업무</i></div>
              </div>
            </div>

            <div className="system-diagram" aria-label="RAG와 MCP가 연결된 서비스 구조">
              <div className="diagram-lane">
                <span>KNOWLEDGE LANE</span>
                <div><b>사내 문서</b><i>→</i><b>분할·임베딩</b><i>→</i><b>벡터 검색</b></div>
              </div>
              <div className="diagram-core"><span>LLM</span><strong>답하고 판단한다</strong></div>
              <div className="diagram-lane">
                <span>ACTION LANE</span>
                <div><b>MCP Client</b><i>→</i><b>Tool Server</b><i>→</i><b>DB · API</b></div>
              </div>
            </div>

            <div className="failure-grid">
              <div><span>01</span><h3>검색 결과 0건</h3><p>‘모름’으로 처리할지, 사람에게 질문할지 정해야 한다.</p></div>
              <div><span>02</span><h3>스키마 불일치</h3><p>도구가 기대한 값과 AI가 만든 인자가 다르면 호출이 깨진다.</p></div>
              <div><span>03</span><h3>권한 초과</h3><p>조회 요청이 수정 호출로 바뀌지 않도록 코드와 정책으로 막아야 한다.</p></div>
            </div>
          </div>
        </section>

        <section className="story-section section-read" id="read" data-reveal>
          <div className="section-index">04 / 08</div>
          <div className="section-content">
            <p className="section-kicker">THE COUNTERARGUMENT</p>
            <h2>“AI가 코드를 쓰는데 왜 코딩을 배우나?”</h2>
            <div className="counter-grid">
              <div className="counter-claim">
                <span>THE SHORTCUT</span>
                <p>코드 작성이 자동화되면 코딩 학습도 줄여도 된다.</p>
              </div>
              <div className="counter-answer">
                <span>THE MISSING PART</span>
                <p>작성은 줄어도 채택·검증·배포의 책임은 사람에게 남는다.</p>
              </div>
            </div>
            <p className="lead-copy compact">
              생성된 코드가 실행된다는 사실만으로는 충분하지 않다. 어떤 데이터를
              바꾸는지, 실패하면 어디까지 되돌리는지, 요구사항과 보안 경계를
              지키는지 설명할 수 있어야 한다.
            </p>

            <div className="skill-ladder" aria-label="Jason Ku가 설명한 코딩 역량의 이동">
              <div><span>01</span><b>WRITE</b><small>직접 작성</small></div>
              <div><span>02</span><b>READ</b><small>실행 흐름 판독</small></div>
              <div><span>03</span><b>VERIFY</b><small>테스트와 검증</small></div>
              <div><span>04</span><b>STEER</b><small>AI에 방향 제시</small></div>
              <div><span>05</span><b>INTENT</b><small>의도와 기준 정의</small></div>
            </div>

            <div className="video-sources">
              <p>개발자 Jason Ku의 관점이며 채용시장 통계로 사용하지 않았다.</p>
              <a href="https://youtu.be/0QXzV2T9p20" {...sourceProps}>WRONG TECH SKILLS ↗</a>
              <a href="https://youtu.be/sq67daxRZ6c" {...sourceProps}>LEARN TO CODE? ↗</a>
            </div>
          </div>
        </section>

        <section className="story-section section-verify" id="verify" data-reveal>
          <div className="section-index">05 / 08</div>
          <div className="section-content split-content">
            <div>
              <p className="section-kicker">FROM TEXT TO ACTION</p>
              <h2>에이전트의 한 문장은 실제 시스템 행동이 된다</h2>
              <p className="lead-copy">
                일반 챗봇의 오류는 잘못된 문장으로 끝날 수 있다. 도구를 가진
                에이전트의 오류는 데이터 수정, 비용 발생, 외부 전송으로 이어질 수
                있다. 그래서 코딩 기본기는 안전장치를 구현하는 능력과 연결된다.
              </p>
              <div className="safety-points">
                <div><b>VALIDATE</b><p>입력과 출력을 실행 전에 검사한다.</p></div>
                <div><b>LIMIT</b><p>필요한 도구와 권한만 허용한다.</p></div>
                <div><b>TRACE</b><p>로그로 실패를 재현하고 책임을 추적한다.</p></div>
              </div>
              <p className="owasp-note">
                OWASP는 LLM 애플리케이션의 위험으로
                <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/2_0_vulns/LLM05_ImproperOutputHandling" {...sourceProps}> 출력 검증 부재</a>와
                <a href="https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" {...sourceProps}> 과도한 권한</a>을 다룬다.
              </p>
            </div>
            <PermissionDemo />
          </div>
        </section>

        <section className="story-section section-operate" id="operate" data-reveal>
          <div className="section-index">06 / 08</div>
          <div className="section-content">
            <p className="section-kicker">THE OPERATING STACK</p>
            <h2>구축보다 운영이 어려운 이유는 계층이 일곱 개이기 때문이다</h2>
            <p className="lead-copy compact">
              베스핀글로벌이 제시한 7 Layer AI Stack은 AI 서비스를 모델 하나가
              아니라 연결된 운영 체계로 본다. LLMOps는 대규모 언어모델을
              배포하고 관찰하며 평가·교체하는 운영 체계다.
            </p>

            <div className="operate-layout">
              <div className="layer-stack" aria-label="7 Layer AI Stack">
                <details open><summary><span>07</span><b>성과 · ROI</b><i>VALUE</i></summary><p>시간, 비용, 사용률, 업무 기여도를 측정한다.</p></details>
                <details><summary><span>06</span><b>거버넌스 · 보안</b><i>TRUST</i></summary><p>권한, 규제, 감사와 책임 기준을 관리한다.</p></details>
                <details><summary><span>05</span><b>에이전트 구축 · 운영</b><i>ACT</i></summary><p>역할, 도구, 상태, 평가와 중단 조건을 설계한다.</p></details>
                <details><summary><span>04</span><b>온톨로지</b><i>MEAN</i></summary><p>조직의 업무 개념과 관계를 AI가 이해하게 만든다.</p></details>
                <details><summary><span>03</span><b>데이터</b><i>GROUND</i></summary><p>정제, 품질, 접근성과 변경 이력을 관리한다.</p></details>
                <details><summary><span>02</span><b>모델 · LLMOps</b><i>THINK</i></summary><p>모델 성능과 비용을 관찰하고 교체한다.</p></details>
                <details><summary><span>01</span><b>인프라</b><i>RUN</i></summary><p>컴퓨팅, 네트워크, 저장소와 배포 환경을 제공한다.</p></details>
              </div>

              <aside className="case-file">
                <p>CASE FILE / KHNP</p>
                <strong>약 2,500만 건</strong>
                <h3>문서를 검색하는 것만으로 끝나지 않았다</h3>
                <p>
                  한국수력원자력 사례는 원전 관련 문서를 RAG로 다루면서 보안
                  특성에 맞춰 외부망과 분리된 사내 데이터센터에 시스템을
                  구성했다.
                </p>
                <div className="case-constraints">
                  <span>DATA CLEANING</span><span>ACCESS CONTROL</span><span>PRIVATE ENV</span>
                </div>
                <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-reference-260813/" {...sourceProps}>READ CASE ↗</a>
              </aside>
            </div>
          </div>
        </section>

        <section className="story-section section-measure" id="measure" data-reveal>
          <div className="section-index">07 / 08</div>
          <div className="section-content">
            <p className="section-kicker">BUILD COUNT ≠ BUSINESS VALUE</p>
            <h2>많이 만든 것과 많이 쓰이는 것은 다르다</h2>

            <div className="metric-grid">
              <div><span>AX PROJECTS</span><strong>200+</strong><small>프로젝트 경험</small></div>
              <div><span>AI AGENTS</span><strong>511</strong><small>업무 활용</small></div>
              <div><span>HOURS / YEAR</span><strong>36,800</strong><small>절감 주장</small></div>
            </div>
            <p className="self-report">위 수치는 모두 베스핀글로벌의 자체 발표이며 독립 검증 통계가 아니다.</p>

            <div className="usage-story">
              <div className="usage-copy">
                <span>THE USAGE GAP</span>
                <h3>상위 10~20%가 절감 효과 대부분을 만든다</h3>
                <p>인터뷰는 511개가 모두 활발히 쓰이는 것은 아니라고 설명한다.</p>
              </div>
              <div className="usage-chart" aria-label="상위 사용 에이전트에 성과가 집중되는 구조">
                <div className="top-agents"><span>TOP 10–20%</span></div>
                <div className="long-tail"><span>LONG TAIL</span></div>
              </div>
            </div>

            <div className="operations-grid">
              <div><span>QUALITY</span><h3>품질 저하</h3><p>데이터와 질문이 바뀌면 답변 품질도 흔들린다.</p></div>
              <div><span>COST</span><h3>비용 급증</h3><p>토큰과 도구 호출이 늘면 건당 비용이 달라진다.</p></div>
              <div><span>MODEL</span><h3>모델 교체</h3><p>모델 변경 뒤 프롬프트와 평가를 다시 확인한다.</p></div>
              <div><span>DATA</span><h3>데이터 변경</h3><p>문서와 스키마의 변화가 검색과 호출을 깨뜨린다.</p></div>
            </div>
            <div className="bespin-links">
              <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-intro-260813/" {...sourceProps}>7 LAYER INTRO ↗</a>
              <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-interview-260813/" {...sourceProps}>OPERATIONS INTERVIEW ↗</a>
            </div>
          </div>
        </section>

        <section className="story-section section-act" id="act" data-reveal>
          <div className="section-index">08 / 08</div>
          <div className="section-content">
            <p className="section-kicker">WHAT TO DO NEXT</p>
            <h2>에이전트 활용과 코딩을 하나의 실무 역량으로 묶어라</h2>
            <p className="lead-copy compact">
              목표는 코드를 많이 입력하는 사람이 되는 것이 아니다. AI와 함께
              만든 시스템을 설명하고 검증하며 운영할 수 있는 사람이 되는 것이다.
            </p>

            <div className="audience-grid">
              <div>
                <span>JOB SEEKER</span>
                <h3>결과보다 검증 과정을 보여준다</h3>
                <p>업무 분해, 아키텍처, 평가셋, 실패 로그, 복구 방법을 포트폴리오에 담는다.</p>
                <b>PROBLEM → SYSTEM → EVAL → LEARNING</b>
              </div>
              <div>
                <span>EDUCATOR</span>
                <h3>기초와 에이전트를 한 프로젝트로 잇는다</h3>
                <p>Python·SQL·웹·클라우드와 RAG·MCP·멀티에이전트를 따로 떼지 않는다.</p>
                <b>FOUNDATION → CONNECTION → OPERATION</b>
              </div>
              <div>
                <span>MANAGER</span>
                <h3>에이전트 수보다 운영 지표를 본다</h3>
                <p>사용률, 오류율, 건당 비용, 사람의 승인 지점을 함께 관리한다.</p>
                <b>USE → QUALITY → COST → ACCOUNTABILITY</b>
              </div>
            </div>

            <blockquote>
              <span>THE TAKEAWAY</span>
              AI가 코드를 더 많이 생성할수록 사람은 코드를 덜 책임지는 것이
              아니라 <strong>더 넓은 시스템을 책임진다.</strong>
            </blockquote>
          </div>
        </section>
      </article>

      <footer className="site-footer">
        <div className="footer-title">
          <span>SOURCES / 11</span>
          <h2>읽고, 확인하고, 직접 판단하기</h2>
        </div>
        <div className="source-list">
          <a href="https://training.megazone.com/ai-campus/index.html" {...sourceProps}><span>01</span>메가존클라우드 AI 캠퍼스 ↗</a>
          <a href="https://networks-aicamp.io/program" {...sourceProps}><span>02</span>SK네트웍스 Family AI 캠프 ↗</a>
          <a href="https://knda-hanwhasystems.com/training/detail/19" {...sourceProps}><span>03</span>한화시스템 AI 에이전트 과정 ↗</a>
          <a href="https://sesac.seoul.kr/sesac/course/offline/courseDetail.do?crsSn=1267" {...sourceProps}><span>04</span>SeSAC 클라우드 데이터 엔지니어 과정 ↗</a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-intro-260813/" {...sourceProps}><span>05</span>7 Layer AI Stack 소개 ↗</a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-reference-260813/" {...sourceProps}><span>06</span>산업별 AX 사례 ↗</a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-interview-260813/" {...sourceProps}><span>07</span>AI 운영 전략 인터뷰 ↗</a>
          <a href="https://youtu.be/0QXzV2T9p20" {...sourceProps}><span>08</span>Jason Ku: Wrong tech skills ↗</a>
          <a href="https://youtu.be/sq67daxRZ6c" {...sourceProps}><span>09</span>Jason Ku: Learn to code? ↗</a>
          <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/2_0_vulns/LLM05_ImproperOutputHandling" {...sourceProps}><span>10</span>OWASP: Improper Output Handling ↗</a>
          <a href="https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" {...sourceProps}><span>11</span>OWASP: Excessive Agency ↗</a>
        </div>
        <div className="footer-end">
          <p>FIELDNOTE 001 · SOURCE-BACKED DIGITAL ESSAY</p>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
