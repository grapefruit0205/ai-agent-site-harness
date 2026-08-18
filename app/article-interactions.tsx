"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const chapters = [
  {
    id: "learn",
    label: "LEARN",
    eyebrow: "THE SHARED CURRICULUM",
    title: "서로 다른 교육 과정, 왜 한 방향을 가리키고 있을까요?",
    summary: "공개된 교육 과정은 프로그래밍과 데이터를 익힌 뒤 AI를 연결하고, 프로젝트를 배포하고 운영하는 순서로 나아갑니다.",
    leftTitle: "공통 학습 순서",
    leftBody: "기초 → 연결 → 에이전트 → 운영",
    factBody: [
      "메가존클라우드 AI 캠퍼스와 SK네트웍스 Family AI 캠프는 프로그래밍·데이터 처리에서 생성형 AI 프로젝트로 학습 범위를 넓힙니다. 한화시스템 과정은 RAG와 에이전트 구현을 다루고, SeSAC 과정은 Python·SQL·클라우드·데이터 파이프라인을 한 과정에 묶습니다.",
      "교육 기관마다 강조점은 다릅니다. 그래도 수강생은 데이터를 다루는 코드, 모델과 외부 시스템의 연결, 팀 프로젝트, 배포와 운영을 차례로 경험합니다. 네 과정이 비슷한 순서를 택했다는 점은 공개된 커리큘럼에서 확인할 수 있습니다.",
    ],
    interpretationBody: [
      "이 순서는 에이전트가 프로그래밍 기초를 대체하지 않는다는 뜻입니다. 에이전트는 코드와 데이터 위에서 움직입니다. 개발자가 그 기반을 읽지 못하면 모델의 답변이 틀렸는지, 연결 코드가 깨졌는지 구분하기 어렵습니다.",
      "처음 배우는 사람은 문법 암기에 머물 필요가 없습니다. 작은 프로그램을 읽고 수정한 뒤, API와 데이터베이스를 연결하고, AI가 만든 코드를 테스트하는 흐름으로 연습하면 됩니다. 기초와 에이전트 활용을 한 프로젝트 안에서 익히는 방식입니다.",
    ],
    question: "내 에이전트가 읽는 데이터 구조와 실패 지점을 코드 수준에서 설명할 수 있는가?",
    tone: "sage",
  },
  {
    id: "collaborate",
    label: "COLLABORATE",
    eyebrow: "COLLABORATION IS ARCHITECTURE",
    title: "에이전트 협업은 대화보다 시스템 설계에 가깝습니다",
    summary: "역할, 상태, 권한, 종료 조건과 사람에게 넘길 지점을 함께 설계해야 합니다.",
    leftTitle: "업무를 나누는 법",
    leftBody: "PLANNER → RESEARCH → TOOL → REVIEW",
    factBody: [
      "한화시스템 과정은 AI 에이전트와 멀티에이전트 구현을 학습 주제로 제시합니다. 여러 에이전트가 함께 일하려면 한 에이전트가 만든 결과를 다음 에이전트가 읽을 형식, 사용할 도구, 작업을 멈출 조건을 정해야 합니다.",
      "실제 시스템에서는 조사 에이전트에 읽기 권한을 주고, 실행 에이전트에는 제한된 API만 허용할 수 있습니다. 검토 에이전트는 별도의 평가 기준으로 결과를 확인합니다. 사람은 승인·수정·중단을 결정하는 지점에 남습니다.",
    ],
    interpretationBody: [
      "협업 능력은 에이전트와 말을 잘 주고받는 요령보다 업무를 구조화하는 힘에 가깝습니다. 개발자는 모호한 요청을 작은 작업으로 나누고, 각 작업의 입력과 출력을 코드로 고정해야 합니다.",
      "상태가 어디에 저장되는지, 재시도하면 같은 작업이 두 번 실행되는지, 어느 로그로 실패 원인을 찾을지도 사람이 정합니다. 이 설계는 프롬프트만으로 끝나지 않습니다. 스키마, 예외 처리, 권한 검사와 테스트 코드가 협업 규칙을 실행 가능한 형태로 만듭니다.",
    ],
    question: "각 에이전트의 권한과 종료 조건, 사람에게 넘길 시점을 한 장의 흐름도로 그릴 수 있는가?",
    tone: "ink",
  },
  {
    id: "connect",
    label: "CONNECT",
    eyebrow: "TWO CONNECTION LAYERS",
    title: "RAG는 ‘지식’을 다루고, MCP는 ‘행동’할 도구를 연결합니다",
    summary: "검색할 근거와 실행할 도구를 구분하면 에이전트 시스템의 경계가 선명해집니다.",
    leftTitle: "RAG / KNOW",
    leftBody: "문서를 검색하고 답변의 근거를 모델에 전달합니다.",
    factBody: [
      "IBM Technology 영상(What is RAG? & What is MCP?)은 RAG를 모델이 학습 기억에만 갇히지 않고 최신 문서를 찾아보는 '오픈북 시험'으로, MCP는 도구와 모델을 단일 규격으로 꽂는 'AI의 USB-C' 표준으로 설명합니다.",
      "RAG는 질문과 관련된 지식을 검색(Retrieval)해 프롬프트에 보강(Augmentation)하여 외부 근거에 기반한 답변(Generation)을 생성하도록 돕습니다. 반면 MCP는 Host-Client-Server 구조로 모델이 데이터베이스 조회나 업무 API 호출 같은 실제 행동(Action)을 안전하게 실행하도록 연결합니다.",
    ],
    interpretationBody: [
      "지식 검색층(RAG)과 도구 실행층(MCP)을 분리하면 장애 원인을 선명하게 진단할 수 있습니다. 팩트 오류는 청킹·임베딩·검색 적중률을 점검하고, 도구 실패는 MCP Server의 인자 스키마, 인증, API 응답을 확인합니다.",
      "개발자는 이 경계를 코드로 방어해야 합니다. 모델이 만든 인자를 무검증 상태로 넘기면 엉뚱한 검색이나 위험한 데이터 수정이 발생할 수 있습니다. 스키마 검증, 최소 권한 원칙, 예외 처리가 신뢰성 있는 AI 시스템의 핵심 안전판입니다.",
    ],
    question: "지금 발생한 오류가 지식 검색의 문제인지, 도구 호출의 문제인지 로그만 보고 구분할 수 있는가?",
    tone: "lavender",
  },
  {
    id: "read",
    label: "READ",
    eyebrow: "THE COUNTERARGUMENT",
    title: "AI가 다 작성해주는데, 굳이 코딩을 배워야 할까요?",
    summary: "코드 판독, 상태 변화 추적, 부수 효과와 복구 흐름을 이해해야 AI 코드를 채택할 수 있습니다.",
    leftTitle: "생성된 코드",
    leftBody: "빠르게 실행되는 결과는 출발점일 뿐입니다.",
    factBody: [
      "Jason Ku는 AI 시대의 개발자가 코드 작성(Typing)보다 코드 읽기(Reading), 제어 흐름 분석, 의도 전달에 대부분의 시간을 쓰게 된다고 강조합니다. 교육 과정 역시 프로그래밍 기초 실습과 AI 에이전트 프로젝트를 함께 배치해 판독 훈련을 강화하고 있습니다.",
      "AI가 생성한 함수는 문법상 맞더라도 내부 상태를 어떻게 변경하는지, 비동기 호출이나 외부 DB와 만났을 때 예외가 어떻게 전파되는지 개발자가 직접 추적해야 안전하게 통합될 수 있습니다.",
    ],
    interpretationBody: [
      "코딩 기본기의 본질은 타이핑 속도가 아니라 '시스템 상태 변화와 부수 효과를 읽어내는 판독력'입니다. 함수 입력값 검증, 엣지 케이스 처리, 예외 복구(Rollback) 경로를 코드로 읽어내지 못하면 생성된 코드를 운영에 투입할 수 없습니다.",
      "초보자도 AI에게 초안 생성을 맡긴 후 '이 함수가 무엇을 바꾸고 왜 이렇게 분기하는지' 한 줄씩 설명하고 테스트 코드로 검증하는 훈련을 통해 실무 판독 역량을 빠르게 기를 수 있습니다.",
    ],
    question: "AI가 만든 함수의 입력, 상태 변화, 실패 조건과 되돌리는 방법을 내 말로 설명할 수 있는가?",
    tone: "coral",
  },
  {
    id: "verify",
    label: "VERIFY",
    eyebrow: "FROM TEXT TO ACTION",
    title: "에이전트의 텍스트 한 줄은 실제 행동이 됩니다",
    summary: "최소 권한 정책, 입력 스키마 검증, 실행 전 Policy Gate와 감사 로그로 오작동을 차단합니다.",
    leftTitle: "위험한 기본값",
    leftBody: "조회 요청이 수정 호출로 바뀌면 데이터와 비용에 즉시 영향을 줍니다.",
    factBody: [
      "OWASP GenAI Top 10 보안 가이드는 '출력값 검증 미흡(Improper Output Handling)'과 '에이전트의 과도한 권한 보유(Excessive Agency)'를 가장 위험한 취약점으로 규정합니다. 텍스트 오류는 대화 실패로 끝나지만, 도구를 쥔 에이전트의 오류는 실제 DB 변조와 재무 손실로 이어집니다.",
      "개발팀은 실행 직전에 요청 의도와 도구 권한을 대조하는 'Policy Gate'를 구현하고, 각 도구에 '최소 권한'만 부여하며, 모든 실행 내역을 감사 로그로 남겨 실패 원인을 추적해야 합니다.",
    ],
    interpretationBody: [
      "안전 검증은 사후 디버깅이 아니라 '실행 직전의 차단 구조'입니다. 사용자가 조회를 요청했을 때 에이전트가 잘못된 수정 도구를 고르더라도, 정책 게이트가 이를 감지하여 실행을 멈추고 로그를 남길 수 있어야 합니다.",
      "코딩 능력이 있어야 안전 규칙을 선언적 정책과 코드로 강제할 수 있습니다. 입력 스키마 검증, 권한 필터링, 사람의 승인(Human-in-the-Loop)을 코드로 엮는 것이 에이전트 안전의 핵심입니다.",
    ],
    question: "에이전트가 잘못 판단했을 때 실제 행동을 막는 검증 코드와 승인 지점이 어디에 있는가?",
    tone: "coral",
  },
];

type Chapter = (typeof chapters)[number];

const featuredChapterIds = new Set(["learn", "connect", "verify"]);

function ChapterTrigger({
  chapter,
  index,
  featured = false,
  onOpen,
  registerTrigger,
}: {
  chapter: Chapter;
  index: number;
  featured?: boolean;
  onOpen: (id: string) => void;
  registerTrigger: (id: string, element: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      type="button"
      className={`${featured ? "board-book-card" : "chapter-spine"} tone-${chapter.tone}`}
      data-chapter={chapter.id}
      aria-label={`${chapter.label} 책 펼치기`}
      onClick={() => onOpen(chapter.id)}
      ref={(element) => registerTrigger(chapter.id, element)}
    >
      <span>{String(index + 1).padStart(2, "0")} / 05</span>
      <b>{chapter.label}</b>
      {featured ? <small>{chapter.title}</small> : null}
      <i aria-hidden="true">↗</i>
    </button>
  );
}

function EditorialBoard() {
  const [openChapterId, setOpenChapterId] = useState<string | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openChapter = chapters.find((chapter) => chapter.id === openChapterId) ?? null;

  const registerTrigger = useCallback((id: string, element: HTMLButtonElement | null) => {
    triggerRefs.current[id] = element;
  }, []);

  const closeBook = useCallback(() => {
    if (!openChapterId) return;
    const trigger = triggerRefs.current[openChapterId];
    setOpenChapterId(null);
    trigger?.focus();
  }, [openChapterId]);

  useEffect(() => {
    if (!openChapter) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBook();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeBook, openChapter]);

  return (
    <>
      <section className="editorial-board" id="top" aria-labelledby="board-title">
        <div className="board-engraving" aria-hidden="true">
          <span>FIELDNOTE 001</span>
          <b>AI × CODE × OPERATIONS</b>
          <i>INTERACTIVE EDITION</i>
        </div>

        <aside className="board-hero-panel">
          <span className="board-panel-label">HERO</span>
          <h1
            id="board-title"
            aria-label="AI가 코드를 써줄수록, 개발자는 코드를 더 깊이 읽어야 합니다"
          >
            <span className="title-line">AI가 코드를</span>
            <strong className="title-line">써줄수록,</strong>
            <em className="title-line">개발자는 코드를</em>
            <span className="title-line">더 깊이 읽어야 합니다</span>
          </h1>
          <div className="board-skill-list" aria-label="개발 역량의 이동">
            <span>01 WRITE</span>
            <span>02 READ</span>
            <b>03 VERIFY</b>
            <b>04 STEER</b>
            <strong>05 OWN</strong>
          </div>
          <a href="#learn">전체 칼럼 이어 읽기 ↓</a>
        </aside>

        <div className="board-workspace">
          <article className="board-thesis-panel">
            <span className="board-panel-label">THESIS</span>
            <p>코드 생성이 쉬워진 만큼,</p>
            <strong>사람이 지는 책임의 무게는 더 커집니다.</strong>
          </article>

          {chapters.map((chapter, index) =>
            featuredChapterIds.has(chapter.id) ? (
              <ChapterTrigger
                chapter={chapter}
                featured
                index={index}
                key={chapter.id}
                onOpen={setOpenChapterId}
                registerTrigger={registerTrigger}
              />
            ) : null,
          )}

          <nav className="chapter-shelf" aria-label="펼쳐볼 책 선택">
            {chapters.map((chapter, index) =>
              featuredChapterIds.has(chapter.id) ? null : (
                <ChapterTrigger
                  chapter={chapter}
                  index={index}
                  key={chapter.id}
                  onOpen={setOpenChapterId}
                  registerTrigger={registerTrigger}
                />
              ),
            )}
          </nav>
        </div>
      </section>

      {openChapter ? (
        <div className="book-overlay">
          <button
            type="button"
            className="book-backdrop"
            aria-label="책 바깥 영역 닫기"
            onClick={closeBook}
          />
          <section
            className={`chapter-book tone-${openChapter.tone}`}
            role="dialog"
            aria-modal="true"
            aria-label={`${openChapter.label} 자세히 읽기`}
          >
            <button
              type="button"
              className="book-close"
              aria-label="책 닫기"
              onClick={closeBook}
              ref={closeButtonRef}
            >
              CLOSE <span aria-hidden="true">×</span>
            </button>
            <div className="book-spread">
              <article className="book-page book-page-left">
                <span>{openChapter.eyebrow}</span>
                <h2>{openChapter.title}</h2>
                <p className="book-page-summary">{openChapter.summary}</p>
                <div className="book-page-note">
                  <b>{openChapter.leftTitle}</b>
                  <strong>{openChapter.leftBody}</strong>
                </div>
                <div className="book-column-section">
                  <h3>자료에서 확인되는 점</h3>
                  {openChapter.factBody.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
              <article className="book-page book-page-right">
                <span>{openChapter.label} / FIELDNOTE</span>
                <div className="book-column-section book-column-interpretation">
                  <h3>필자의 해석</h3>
                  {openChapter.interpretationBody.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <aside className="book-field-question">
                  <b>현장에서 확인할 질문</b>
                  <p>{openChapter.question}</p>
                </aside>
                <a href={`#${openChapter.id}`} onClick={closeBook}>
                  아래 본문에서 근거와 도표 읽기 →
                </a>
              </article>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

export function ArticleInteractions() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("learn");

  useEffect(() => {
    document.documentElement.classList.add("has-js");

    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      if (!window.location.hash && typeof window.scrollTo === "function") {
        window.scrollTo(0, 0);
      }
    }

    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const next = height > 0 ? (window.scrollY / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, next)));
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    const chapterObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0.05, 0.25, 0.5] },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });
    chapters.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) chapterObserver.observe(section);
    });

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      document.documentElement.classList.remove("has-js");
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      revealObserver.disconnect();
      chapterObserver.disconnect();
    };
  }, []);

  return (
    <>
      <EditorialBoard />
      <div className="reading-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <nav className="chapter-nav" aria-label="칼럼 목차">
        {chapters.map((chapter, index) => (
          <a
            key={chapter.id}
            className={active === chapter.id ? "active" : undefined}
            href={`#${chapter.id}`}
            aria-current={active === chapter.id ? "location" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{chapter.label}</b>
          </a>
        ))}
      </nav>
    </>
  );
}

export function PermissionDemo() {
  const [mode, setMode] = useState<"wide" | "least">("least");
  const [step, setStep] = useState<number>(1);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const safe = mode === "least";

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setStep((prev) => (prev < 6 ? prev + 1 : 6));
    }, 1200);
    return () => clearTimeout(timer);
  }, [step, autoPlay, mode]);

  const handleModeChange = (newMode: "wide" | "least") => {
    setMode(newMode);
    setStep(1);
    setAutoPlay(true);
  };

  const handleReplay = () => {
    setStep(1);
    setAutoPlay(true);
  };

  const handleStepClick = (targetStep: number) => {
    setAutoPlay(false);
    setStep(targetStep);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setStep((prev) => Math.min(6, prev + 1));
  };

  const handlePrev = () => {
    setAutoPlay(false);
    setStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className={`permission-demo-container ${safe ? "is-safe" : "is-danger"}`}>
      <div className="demo-top-bar">
        <div className="permission-controls" role="group" aria-label="에이전트 권한 설정">
          <button
            type="button"
            aria-pressed={mode === "wide"}
            onClick={() => handleModeChange("wide")}
            className={mode === "wide" ? "active danger" : ""}
          >
            권한 넓게
          </button>
          <button
            type="button"
            aria-pressed={mode === "least"}
            onClick={() => handleModeChange("least")}
            className={mode === "least" ? "active safe" : ""}
          >
            최소 권한
          </button>
        </div>

        <div className="simulation-playback-controls">
          <button
            type="button"
            className="sim-btn replay-btn"
            onClick={handleReplay}
            title="처음부터 다시 보기"
          >
            ⟳ 다시 보기
          </button>
          <button
            type="button"
            className="sim-btn nav-btn"
            onClick={handlePrev}
            disabled={step <= 1}
            aria-label="이전 단계"
          >
            ‹
          </button>
          <span className="step-indicator">
            단계 <b>{step}</b> / 6
          </span>
          <button
            type="button"
            className="sim-btn nav-btn"
            onClick={handleNext}
            disabled={step >= 6}
            aria-label="다음 단계"
          >
            ›
          </button>
        </div>
      </div>

      {/* Step Pills Navigation */}
      <div className="step-pills-bar" aria-label="시뮬레이션 단계 선택">
        {[
          { num: 1, label: "① USER" },
          { num: 2, label: "② AGENT" },
          { num: 3, label: "③ POLICY GATE" },
          { num: 4, label: safe ? "④ BLOCKED" : "④ EXECUTED" },
          { num: 5, label: "⑤ AUDIT LOG" },
          { num: 6, label: safe ? "⑥ CORRECTED" : "⑥ INCIDENT" },
        ].map((s) => (
          <button
            key={s.num}
            type="button"
            className={`step-pill ${step === s.num ? "active" : ""} ${step > s.num ? "completed" : ""}`}
            onClick={() => handleStepClick(s.num)}
          >
            <span>{s.num}</span>
            <small>{s.label}</small>
          </button>
        ))}
      </div>

      {/* Live Simulation Visual Track */}
      <div className="simulation-flow-stage" aria-live="polite">
        {/* Step 1: User Request */}
        <div className={`flow-card flow-user ${step >= 1 ? "visible current" : ""}`}>
          <div className="flow-card-badge">① USER REQUEST (사용자 요청)</div>
          <p className="flow-bubble">“지난달 청구 내역을 보여줘.”</p>
          <small className="flow-tag">요청 의도: 단순 데이터 조회 (READ)</small>
        </div>

        {/* Connector */}
        {step >= 2 && <div className="flow-connector" aria-hidden="true">↓</div>}

        {/* Step 2: Agent Action */}
        {step >= 2 && (
          <div className="flow-card flow-agent visible">
            <div className="flow-card-badge">② AGENT ACTION (에이전트 도구 선택)</div>
            <div className="flow-code-box">
              <span className="code-label">도구 호출 생성 (오작동 위험)</span>
              <code>billing.update(status: &quot;approved&quot;)</code>
            </div>
            <small className="flow-tag warn">⚠️ 조회 요청인데 수정(update) 도구를 잘못 선택함</small>
          </div>
        )}

        {/* Connector */}
        {step >= 3 && <div className="flow-connector" aria-hidden="true">↓</div>}

        {/* Step 3: Policy Gate */}
        {step >= 3 && (
          <div className={`flow-card flow-gate visible ${safe ? "gate-protected" : "gate-unprotected"}`}>
            <div className="flow-card-badge">③ POLICY GATE (실행 전 검증 대조)</div>
            <div className="gate-matrix">
              <div><span>요청 의도</span><b>조회 (READ)</b></div>
              <div><span>허용 도구</span><b>{safe ? "billing.read (최소 권한)" : "* (모든 도구 무제한)"}</b></div>
              <div><span>선택 도구</span><b className="code-err">billing.update</b></div>
            </div>
          </div>
        )}

        {/* Connector */}
        {step >= 4 && <div className="flow-connector" aria-hidden="true">↓</div>}

        {/* Step 4: Decision */}
        {step >= 4 && (
          <div className={`flow-card flow-decision visible ${safe ? "decision-blocked" : "decision-danger"}`}>
            <div className="flow-card-badge">④ {safe ? "POLICY ENFORCEMENT" : "UNGOVERNED EXECUTION"}</div>
            {safe ? (
              <div className="decision-alert success">
                <strong>🛡️ EXECUTION BLOCKED (실행 즉시 차단)</strong>
                <p>권한 불일치: 조회 요청에 쓰기(update) 도구 호출이 감지되어 정책 게이트가 즉각 차단했습니다.</p>
              </div>
            ) : (
              <div className="decision-alert danger">
                <strong>🚨 MUTATION EXECUTED (무단 변조 실행됨)</strong>
                <p>권한 검증 없이 <code>billing.update</code>가 실행되어 미승인 청구 내역이 승인 처리되었습니다!</p>
              </div>
            )}
          </div>
        )}

        {/* Connector */}
        {step >= 5 && <div className="flow-connector" aria-hidden="true">↓</div>}

        {/* Step 5: Audit Log */}
        {step >= 5 && (
          <div className="flow-card flow-audit visible">
            <div className="flow-card-badge">⑤ AUDIT LOG (감사 로그 기록)</div>
            {safe ? (
              <div className="audit-console">
                <div><span>timestamp</span><code>2026-08-18T16:00:00Z</code></div>
                <div><span>expected_tool</span><code className="text-green">billing.read</code></div>
                <div><span>selected_tool</span><code className="text-red">billing.update</code></div>
                <div><span>result</span><strong className="text-blocked">BLOCKED (권한 불일치로 차단됨)</strong></div>
              </div>
            ) : (
              <div className="audit-console missing">
                <span className="text-red">⚠️ 감사 로그 누락: 사후 원인 추적 불가능</span>
              </div>
            )}
          </div>
        )}

        {/* Connector */}
        {step >= 6 && <div className="flow-connector" aria-hidden="true">↓</div>}

        {/* Step 6: Outcome */}
        {step >= 6 && (
          <div className={`flow-card flow-resolution visible ${safe ? "res-safe" : "res-incident"}`}>
            <div className="flow-card-badge">⑥ {safe ? "CORRECTED & RESOLVED (안전 복구)" : "PRODUCTION INCIDENT (보안 사고)"}</div>
            {safe ? (
              <div className="resolution-box safe">
                <code>billing.read(month: &quot;2026-07&quot;)</code>
                <p>✅ 올바른 도구로 안전하게 재매핑되어 지난달 청구 내역을 정상 조회했습니다.</p>
              </div>
            ) : (
              <div className="resolution-box incident">
                <p>💥 재무 데이터 오염: 사용자는 조회만 요청했으나 청구 상태가 강제 승인되는 보안 사고 발생.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Summary Footer */}
      <div className="simulation-footer-note">
        {safe ? (
          <p>
            <strong>최소 권한의 가치</strong>: 에이전트가 잘못된 도구를 골라도,
            Policy Gate와 감사 로그가 데이터 훼손을 막고 정상 조회 경로로 복구합니다.
          </p>
        ) : (
          <p className="danger-text">
            <strong>권한 남용의 위험</strong>: 입력값과 도구 권한을 검증하지 않으면,
            텍스트 한 줄이 실제 운영 데이터를 망가뜨립니다.
          </p>
        )}
      </div>
    </div>
  );
}

const fieldnotesData = {
  rag: {
    badge: "FIELDNOTE #03-A · KNOWLEDGE GROUNDING",
    title: "RAG(검색 증강 생성) 심층 아키텍처",
    subtitle: "왜 단순 LLM이 아니라 RAG가 실무에서 필요한가?",
    points: [
      {
        tag: "01 · THE PROBLEM",
        title: "단독 모델의 지식 한계와 오류 가능성",
        desc: "LLM의 사전 학습 데이터는 과거 특정 시점의 일반 정보에 머물러 있어, 기업 내부의 비공개 문서나 실시간 데이터를 직접 알지 못합니다. 이 상태에서 사내 규정이나 전문 질문을 받으면 잘못된 추론을 내놓을 위험이 있습니다.",
      },
      {
        tag: "02 · THE SOLUTION",
        title: "외부 지식 검색과 컨텍스트 보강(Grounding)",
        desc: "질문이 들어오는 순간 질문을 벡터로 변환하여 사내 벡터 데이터베이스에서 관련도 높은 문서를 실시간 검색(Retrieve)하고, 이를 질문과 함께 프롬프트에 주입(Augment)하여 검증 가능한 근거에 기반한 답변(Generate)을 생성하도록 유도합니다.",
      },
      {
        tag: "03 · ENGINEERING",
        title: "엔지니어링 핵심 고려사항",
        desc: "문서 분할(Chunking) 전략, 도메인에 적합한 임베딩 모델 선택, 메타데이터 필터링, 그리고 검색 결과가 불충분할 때 임의 생성 대신 '근거 없음'을 명시하거나 사람에게 되묻는 Fallback 규칙이 실무 RAG 품질을 결정합니다.",
      },
    ],
    videoUrl: "https://youtu.be/T-D1OfcDW1M",
    videoLabel: "IBM Technology: What is RAG? 해설 영상 보기 ↗",
  },
  mcp: {
    badge: "FIELDNOTE #03-B · ACTION PROTOCOL",
    title: "MCP(모델 컨텍스트 프로토콜) 심층 아키텍처",
    subtitle: "왜 N×M 파편화를 줄이는 'AI의 USB-C' 규약이 필요한가?",
    points: [
      {
        tag: "01 · THE PROBLEM",
        title: "개별 연동 코드(N×M)의 파편화와 관리 부담",
        desc: "기존에는 모델(Claude, GPT, 로컬 모델)마다, 도구(DB, GitHub, Slack, AWS)마다 매번 전용 연동 코드를 새로 짜야 했습니다. 도구나 모델이 하나만 바뀌어도 전체 시스템을 뜯어고쳐야 하는 비효율이 존재했습니다.",
      },
      {
        tag: "02 · THE SOLUTION",
        title: "도구와 데이터를 위한 단일 표준 연결 규약",
        desc: "Host(에이전트 앱) - Client - Server 표준 구조를 통해, 개발자가 MCP Server를 한 번 구현하면 다양한 에이전트가 데이터와 도구를 일관된 방식으로 안전하게 재사용할 수 있습니다.",
      },
      {
        tag: "03 · ENGINEERING",
        title: "Resources(조회)와 Tools(실행)의 명확한 분리",
        desc: "읽기 전용 데이터는 Resources로 제공해 단순 조회를 보장하고, 실제 상태를 변경하는 작업은 Tools로 분리하며, 엄격한 스키마 검증과 권한 정책(Policy Gate)을 결합해 에이전트의 오작동 위험을 사전에 완화합니다.",
      },
    ],
    videoUrl: "https://youtu.be/eur8dUO9mvE",
    videoLabel: "IBM Technology: What is MCP? 해설 영상 보기 ↗",
  },
};

export function ConnectFieldnoteCards() {
  const [activeModal, setActiveModal] = useState<"rag" | "mcp" | null>(null);
  const activeData = activeModal ? fieldnotesData[activeModal] : null;

  return (
    <>
      <div className="definition-grid">
        <button
          type="button"
          className="definition-card rag-card clickable-fieldnote"
          onClick={() => setActiveModal("rag")}
          aria-label="RAG 상세 필드노트 열기"
        >
          <div className="card-top-row">
            <span>RAG · KNOWLEDGE GROUNDING</span>
            <span className="open-pill">FIELDNOTE ↗</span>
          </div>
          <h3>검색 증강 생성</h3>
          <p>
            AI가 답변을 생성하기 전에 관련 내·외부 문서를 검색해 근거를 제공하는 방식입니다.
            학습 기억에만 의존하지 않고 검증 가능한 최신 문서를 참조하여 답변 신뢰성을 보강합니다.
          </p>
          <div className="mini-flow">
            <i>1. 문서 검색(Retrieve)</i><b>→</b><i>2. 맥락 보강(Augment)</i><b>→</b><i>3. 근거 응답(Generate)</i>
          </div>
          <small className="fieldnote-hint">클릭하여 RAG 심층 아키텍처 필드노트 보기 →</small>
        </button>

        <button
          type="button"
          className="definition-card mcp-card clickable-fieldnote"
          onClick={() => setActiveModal("mcp")}
          aria-label="MCP 상세 필드노트 열기"
        >
          <div className="card-top-row">
            <span>MCP · THE USB-C OF AI AGENTS</span>
            <span className="open-pill">FIELDNOTE ↗</span>
          </div>
          <h3>모델 컨텍스트 프로토콜</h3>
          <p>
            AI 모델이 외부 도구와 데이터에 표준화된 방식으로 접근하도록 연결하는 규약입니다.
            Host-Client-Server 구조로 DB 조회(Resources)와 API 실행(Tools)을 단일 표준으로 연결합니다.
          </p>
          <div className="mini-flow">
            <i>MCP Host(AI 앱)</i><b>↔</b><i>MCP Server</i><b>↔</b><i>DB · API · 클라우드</i>
          </div>
          <small className="fieldnote-hint">클릭하여 MCP 연동 아키텍처 필드노트 보기 →</small>
        </button>
      </div>

      {activeData ? (
        <div className="book-overlay" role="dialog" aria-modal="true" aria-label={activeData.title}>
          <button
            type="button"
            className="book-backdrop"
            aria-label="필드노트 닫기"
            onClick={() => setActiveModal(null)}
          />
          <div className="fieldnote-modal-card">
            <header className="fieldnote-modal-header">
              <div>
                <span className="fieldnote-badge">{activeData.badge}</span>
                <h2>{activeData.title}</h2>
                <p className="fieldnote-sub">{activeData.subtitle}</p>
              </div>
              <button
                type="button"
                className="book-close"
                onClick={() => setActiveModal(null)}
                aria-label="닫기"
              >
                CLOSE ×
              </button>
            </header>

            <div className="fieldnote-points-grid">
              {activeData.points.map((pt) => (
                <div key={pt.tag} className="fieldnote-point-box">
                  <span className="point-tag">{pt.tag}</span>
                  <h4>{pt.title}</h4>
                  <p>{pt.desc}</p>
                </div>
              ))}
            </div>

            <footer className="fieldnote-modal-footer">
              <a
                href={activeData.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="fieldnote-video-btn"
              >
                {activeData.videoLabel}
              </a>
              <button
                type="button"
                className="fieldnote-dismiss-btn"
                onClick={() => setActiveModal(null)}
              >
                확인 완료
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}
