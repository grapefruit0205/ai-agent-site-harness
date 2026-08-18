import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ai-agent-code-reading.chic-tick-3172.chatgpt.site";
const socialImageUrl = new URL("/og.png", siteUrl).toString();

export const metadata: Metadata = {
  title: "AI Agent는 왜 만드는 것보다 운영하는 것이 어려운가 | FIELDNOTE 002",
  description:
    "7 Layer AI Stack과 LLMOps, 거버넌스 및 성과 지표로 살펴보는 엔터프라이즈 AI 에이전트 운영의 현실.",
  openGraph: {
    title: "AI Agent는 왜 만드는 것보다 운영하는 것이 어려운가 | FIELDNOTE 002",
    description: "데모 구축을 넘어 실제 조직에서 AI 서비스를 유지하고 발전시키는 7개 운영 계층 이야기.",
    type: "article",
    url: `${siteUrl}/fieldnotes/agent-operations`,
    images: [
      {
        url: socialImageUrl,
        width: 1731,
        height: 909,
        alt: "FIELDNOTE 002: AI Agent는 왜 만드는 것보다 운영하는 것이 어려운가",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent는 왜 만드는 것보다 운영하는 것이 어려운가 | FIELDNOTE 002",
    description: "7 Layer AI Stack과 LLMOps, 거버넌스 및 성과 지표로 살펴보는 엔터프라이즈 AI 에이전트 운영의 현실.",
    images: [socialImageUrl],
  },
};

const sourceProps = {
  target: "_blank",
  rel: "noreferrer",
};

export default function AgentOperationsPage() {
  return (
    <main className="fieldnote-detail-page">
      <header className="site-header" aria-label="필드노트 정보">
        <a className="wordmark" href="/" aria-label="FIELDNOTE 001로 이동">
          FIELDNOTE <span>002</span>
        </a>
        <div className="header-meta" aria-label="읽기 정보">
          <span>7 MIN READ</span>
          <span>3 SOURCES</span>
          <span>OPERATIONS EDITION</span>
        </div>
      </header>

      <div className="fieldnote-detail-hero">
        <div className="fieldnote-back-nav">
          <a href="/" className="back-link">
            ← FIELDNOTE 001: AI가 코드를 써줄수록, 개발자는 코드를 더 깊이 읽어야 합니다
          </a>
        </div>
        <p className="eyebrow">FIELDNOTE 002 · THE OPERATING STACK & GOVERNANCE</p>
        <h1>
          AI Agent는 왜 만드는 것보다
          <span>운영하는 것이 어려운가</span>
        </h1>
        <p className="hero-deck">
          데모 환경에서 프롬프트를 엮어 작동시키는 것은 출발점에 불과합니다.
          실제 조직 환경에서 모델 드리프트, 데이터 변경, 보안 통제, 그리고 비용과 성과를 지속적으로
          관리하기 위한 7 Layer AI Stack과 운영 체계(LLMOps)의 핵심 원리를 정리합니다.
        </p>
      </div>

      <article className="article-body">
        {/* SECTION 1: 7 LAYER AI STACK */}
        <section className="story-section section-operate" id="stack" data-reveal>
          <div className="section-index">01 / 03</div>
          <div className="section-content">
            <p className="section-kicker">01 STACK</p>
            <h2>
              <span className="section-title-line">Agent는 모델 하나로</span>
              {" "}
              <span className="section-title-line">운영되지 않습니다</span>
            </h2>
            <p className="lead-copy">
              베스핀글로벌의 ‘7 Layer AI Stack’에 따르면, 성공적인 AI 서비스는 모델 하나만으로 완성되지 않습니다.
              인프라와 데이터에서 시작해 거버넌스와 비즈니스 가치로 이어지는 일곱 계층이 유기적으로 맞물려야 합니다.
            </p>

            <div className="operate-layout">
              <div className="layer-stack" aria-label="7 Layer AI Stack 계층 구조">
                <details open>
                  <summary><span>07</span><b>성과 · ROI</b><i>VALUE</i></summary>
                  <p>시간, 비용, 실제 사용률과 업무 기여도를 다각도로 측정하고 정량화합니다.</p>
                </details>
                <details open>
                  <summary><span>06</span><b>거버넌스 · 보안</b><i>TRUST</i></summary>
                  <p>접근 권한, 규제 준수, 보안 감사 로그 및 책임 기준을 관리합니다.</p>
                </details>
                <details open>
                  <summary><span>05</span><b>에이전트 구축 · 운영</b><i>ACT</i></summary>
                  <p>에이전트의 역할, 사용할 도구, 평가 지표와 긴급 중단(Human Gate) 조건을 설계합니다.</p>
                </details>
                <details>
                  <summary><span>04</span><b>온톨로지</b><i>MEAN</i></summary>
                  <p>조직 고유의 비즈니스 개념과 데이터 관계를 AI가 이해할 수 있도록 구조화합니다.</p>
                </details>
                <details>
                  <summary><span>03</span><b>데이터</b><i>GROUND</i></summary>
                  <p>정제 파이프라인, 데이터 품질 검증, 접근 통제와 버전 관리를 체계화합니다.</p>
                </details>
                <details>
                  <summary><span>02</span><b>모델 · LLMOps</b><i>THINK</i></summary>
                  <p>모델 성능 모니터링, 프롬프트 드리프트 감지, 토큰 비용 최적화와 교체 체계를 다룹니다.</p>
                </details>
                <details>
                  <summary><span>01</span><b>인프라</b><i>RUN</i></summary>
                  <p>안정적인 연산 자원, 네트워크 격리, 보안 저장소 및 자동 배포 파이프라인을 제공합니다.</p>
                </details>
              </div>

              <aside className="case-file">
                <p>CASE FILE / KHNP</p>
                <strong>약 2,500만 건</strong>
                <h3>원전 문서 검색 시스템, 구축 그 이후</h3>
                <p>
                  한국수력원자력의 대용량 문서 RAG 구축 사례는 데모 이후 사내 폐쇄망 인프라,
                  지속적인 데이터 정제, 접근 권한 관리가 어떻게 서비스 안정성을 결정하는지 보여줍니다.
                </p>
                <div className="case-constraints">
                  <span>DATA CLEANING</span><span>ACCESS CONTROL</span><span>PRIVATE ENV</span>
                </div>
                <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-reference-260813/" {...sourceProps}>
                  사례 상세 보기 ↗
                </a>
              </aside>
            </div>
          </div>
        </section>

        {/* SECTION 2: OPERATIONAL RISKS & OBSERVABILITY */}
        <section className="story-section section-risks" id="observe" data-reveal>
          <div className="section-index">02 / 03</div>
          <div className="section-content">
            <p className="section-kicker">02 OBSERVE</p>
            <h2>
              <span className="section-title-line">한 번 잘된 Agent도</span>
              {" "}
              <span className="section-title-line">데이터와 모델이 바뀌면 흔들립니다</span>
            </h2>
            <p className="lead-copy compact">
              출시 이후 시스템이 지속적으로 신뢰를 얻기 위해서는 다음 네 가지 영역에 대한 관찰성(Observability) 코드가 구현되어야 합니다.
            </p>

            <div className="operations-grid">
              <div>
                <span>QUALITY</span>
                <h3>답변 품질 저하</h3>
                <p>참조 데이터가 갱신되거나 사용자 질문 패턴이 변하면 검색 적중률과 답변 품질이 저하될 수 있습니다.</p>
              </div>
              <div>
                <span>COST</span>
                <h3>비용 변동성</h3>
                <p>토큰 사용량과 반복 도구 호출(Tool Calling)이 증가하면 건당 클라우드 및 모델 비용이 급증합니다.</p>
              </div>
              <div>
                <span>MODEL</span>
                <h3>모델 드리프트 및 업데이트</h3>
                <p>기본 파운데이션 모델 버전이 업데이트되면 기존 프롬프트와 평가 기준을 재점검해야 합니다.</p>
              </div>
              <div>
                <span>DATA</span>
                <h3>데이터 스키마 변경</h3>
                <p>사내 DB 스키마나 API 명세가 미세하게 변경되어도 도구 실행이 실패하므로 유효성 검증이 필수입니다.</p>
              </div>
            </div>

            <div className="bespin-links">
              <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-intro-260813/" {...sourceProps}>
                7 LAYER 소개글 읽기 ↗
              </a>
              <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-interview-260813/" {...sourceProps}>
                운영 전략 인터뷰 보기 ↗
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEASURE */}
        <section className="story-section section-measure" id="measure" data-reveal>
          <div className="section-index">03 / 03</div>
          <div className="section-content">
            <p className="section-kicker">03 MEASURE</p>
            <h2>
              <span className="section-title-line">Agent를 만들 줄 안다는 것과,</span>
              {" "}
              <span className="section-title-line">Agent가 가치를 만든다는 것은 다릅니다</span>
            </h2>
            <p className="lead-copy">
              구축 개수는 개발 활동량을 보여줄 뿐, 업무 가치를 증명하지 않습니다.
              반복 사용률, 업무 완료율, 사람의 수정 횟수, 건당 시간과 비용을 함께 확인해야 합니다.
            </p>

            <div className="company-report-card">
              <span className="report-badge">COMPANY-REPORTED CASE</span>
              <div className="metric-grid">
                <div><span>AX PROJECTS</span><strong>200+</strong><small>산업별 프로젝트 경험</small></div>
                <div><span>AI AGENTS</span><strong>511</strong><small>실무 도입 에이전트 수</small></div>
                <div><span>HOURS / YEAR</span><strong>36,800</strong><small>연간 절감 기대 시간</small></div>
              </div>
              <p className="self-report">* 위 수치는 기업 자체 발표 수치이며 독립 기관의 검증 수치와는 다를 수 있습니다.</p>
            </div>

            <div className="usage-story">
              <div className="usage-copy">
                <span>THE USAGE GAP</span>
                <h3>상위 10~20%의 에이전트에 실무 성과가 집중됩니다</h3>
                <p>
                  베스핀글로벌 인터뷰에서 밝힌 자체 분석 기준에 따르면, 수백 개의 에이전트를 구축하더라도 현업의 일상적 업무 개선은 핵심 10~20% 에이전트에서 주로 발생합니다.
                </p>
              </div>
              <div className="usage-chart" aria-label="상위 에이전트 활용 집중도">
                <div className="top-agents">
                  <span>TOP 10–20%</span>
                  <span>(핵심 활용)</span>
                </div>
                <div className="long-tail">
                  <span>LONG TAIL</span>
                  <span>(간헐적 활용)</span>
                </div>
              </div>
            </div>

            <p className="measure-closing-note">
              팀은 검색 품질, 도구 실행 성공률, 정책 차단 로그와 실제 사용 지표를 함께 살펴야 Agent가 업무를 개선하고 있는지 판단할 수 있습니다.
            </p>

            <div className="next-fieldnote-banner" style={{ marginTop: "3rem" }}>
              <p>기초 역량과 코드 판독, 그리고 검증 체계를 다룬 이전 글을 확인해보세요.</p>
              <a href="/">
                ← FIELDNOTE 001: AI가 코드를 써줄수록, 개발자는 코드를 더 깊이 읽어야 합니다
              </a>
            </div>
          </div>
        </section>
      </article>

      <footer className="site-footer">
        <div className="footer-title">
          <span>SOURCES / 03</span>
          <h2>FIELDNOTE 002 참고 자료</h2>
        </div>
        <div className="source-list">
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-intro-260813/" {...sourceProps}>
            <span>01</span>베스핀글로벌: 7 Layer AI Stack 소개 ↗
          </a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-reference-260813/" {...sourceProps}>
            <span>02</span>베스핀글로벌: 산업별 AX 구축 및 운영 사례 ↗
          </a>
          <a href="https://www.bespinglobal.com/newsroom/news-pr-plan-7layer-interview-260813/" {...sourceProps}>
            <span>03</span>베스핀글로벌: AI 운영 전략 및 LLMOps 인터뷰 ↗
          </a>
        </div>
        <div className="footer-end">
          <p>FIELDNOTE 002 · THE OPERATING STACK & GOVERNANCE</p>
          <a href="/">FIELDNOTE 001로 돌아가기</a>
        </div>
      </footer>
    </main>
  );
}
