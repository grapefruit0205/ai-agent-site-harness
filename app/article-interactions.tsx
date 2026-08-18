"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const chapters = [
  {
    id: "learn",
    label: "LEARN",
    eyebrow: "THE SHARED CURRICULUM",
    title: "서로 다른 교육 과정, 왜 한 방향을 가리킬까요?",
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
    tone: "acid",
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
    title: "RAG는 지식을, MCP는 행동을 연결합니다",
    summary: "검색할 근거와 실행할 도구를 구분하면 에이전트 시스템의 경계가 선명해집니다.",
    leftTitle: "RAG / KNOW",
    leftBody: "문서를 검색하고 답변의 근거를 모델에 전달합니다.",
    factBody: [
      "RAG(검색 증강 생성)는 질문과 관련된 문서를 먼저 찾고 그 내용을 모델의 입력에 넣는 방식입니다. 모델은 학습 당시 기억만 쓰지 않고 조직의 최신 문서와 규정을 답변 근거로 사용할 수 있습니다.",
      "MCP(모델 컨텍스트 프로토콜)는 모델이 사용할 도구와 데이터의 연결 형식을 표준화합니다. 검색이 답변의 근거를 가져오는 일이라면, 도구 연결은 데이터베이스 조회나 업무 시스템 호출 같은 행동으로 이어집니다.",
    ],
    interpretationBody: [
      "두 연결층을 나누면 문제를 찾기 쉬워집니다. 답변 근거가 틀렸다면 검색·청킹·임베딩 과정을 살핍니다. 도구 실행이 실패했다면 인자 스키마, 인증, 네트워크와 API 응답을 확인합니다.",
      "개발자는 코드로 이 경계를 확인해야 합니다. 모델이 만든 인자를 그대로 넘기면 잘못된 검색어나 허용되지 않은 수정 요청이 실행될 수 있습니다. 입력 검증과 오류 처리가 모델과 외부 시스템 사이의 마지막 안전판이 됩니다.",
    ],
    question: "지금 발생한 오류가 지식 검색의 문제인지, 도구 호출의 문제인지 로그만 보고 구분할 수 있는가?",
    tone: "blue",
  },
  {
    id: "read",
    label: "READ",
    eyebrow: "THE COUNTERARGUMENT",
    title: "AI가 작성해도 코드를 배워야 하는 이유",
    summary: "작성 속도와 별개로 채택, 검증, 통합과 복구 책임은 사람에게 남습니다.",
    leftTitle: "생성된 코드",
    leftBody: "빠르게 실행되는 결과는 출발점일 뿐입니다.",
    factBody: [
      "Jason Ku는 두 영상에서 AI 시대의 개발자가 코드 타이핑보다 코드 읽기, 검증, 의도 전달에 더 많은 시간을 쓰게 된다고 설명합니다. 이 관점은 공개 교육 과정이 프로그래밍 실습과 AI 프로젝트를 함께 배치한 구성과도 맞닿아 있습니다.",
      "AI가 만든 코드는 문법상 맞고 데모에서도 작동할 수 있습니다. 운영 환경에서는 기존 데이터 모델, 인증 규칙, 성능 한도와 배포 절차에 맞아야 합니다. 이 조건은 저장소와 실행 환경마다 달라서 개발자가 직접 확인해야 합니다.",
    ],
    interpretationBody: [
      "코딩 기본기는 작성 속도를 겨루는 기술에서 판독과 책임의 기술로 이동합니다. 함수가 어떤 상태를 바꾸는지, 오류가 어디로 전파되는지, 테스트가 놓친 조건이 무엇인지 읽을 수 있어야 생성된 코드를 채택할 수 있습니다.",
      "초보자도 모든 코드를 처음부터 작성할 필요는 없습니다. AI에게 초안을 맡긴 뒤 한 줄씩 실행 흐름을 설명하고, 실패 사례를 만들고, 작은 수정 후 다시 테스트하는 훈련이 효과적입니다. 설명하지 못한 코드는 운영 책임도 질 수 없습니다.",
    ],
    question: "AI가 만든 함수의 입력, 상태 변화, 실패 조건과 되돌리는 방법을 내 말로 설명할 수 있는가?",
    tone: "coral",
  },
  {
    id: "verify",
    label: "VERIFY",
    eyebrow: "FROM TEXT TO ACTION",
    title: "에이전트의 텍스트 한 줄은 실제 행동이 됩니다",
    summary: "출력을 검증하고 권한을 제한하며 모든 실행을 추적해야 합니다.",
    leftTitle: "위험한 기본값",
    leftBody: "조회 요청이 수정 호출로 바뀌면 데이터와 비용에 즉시 영향을 줍니다.",
    factBody: [
      "OWASP GenAI 보안 자료는 모델 출력값을 검증하지 않는 문제와 에이전트에 과도한 권한을 주는 문제를 주요 위험으로 다룹니다. 챗봇의 잘못된 문장은 답변 오류로 끝날 수 있지만, 도구를 가진 에이전트의 출력은 데이터 수정과 외부 전송으로 이어질 수 있습니다.",
      "개발팀은 실행 전 입력값을 검증하고, 도구마다 최소 권한을 부여하고, 호출 기록을 남겨야 합니다. 결제·삭제·외부 공유처럼 되돌리기 어려운 행동에는 사람의 승인을 코드와 정책으로 강제할 수 있습니다.",
    ],
    interpretationBody: [
      "검증은 마지막에 테스트 한 번을 돌리는 단계가 아닙니다. 개발자는 모델 출력, 도구 입력, 실제 실행 결과를 서로 다른 지점에서 확인해야 합니다. 한 지점의 실패가 다음 행동으로 넘어가지 않도록 차단하는 구조가 필요합니다.",
      "코딩을 알아야 안전 규칙이 문서에 머물지 않습니다. 타입과 스키마로 허용값을 좁히고, 권한 검사와 승인 흐름을 구현하고, 감사 로그로 누가 무엇을 실행했는지 남길 수 있습니다.",
    ],
    question: "에이전트가 잘못 판단했을 때 실제 행동을 막는 검증 코드와 승인 지점이 어디에 있는가?",
    tone: "danger",
  },
  {
    id: "operate",
    label: "OPERATE",
    eyebrow: "THE OPERATING STACK",
    title: "구축보다 운영이 어려운 이유",
    summary: "인프라부터 성과까지 일곱 계층을 지속적으로 관찰하고 조정해야 합니다.",
    leftTitle: "7 LAYER",
    leftBody: "INFRA → MODEL → DATA → MEAN → ACT → TRUST → VALUE",
    factBody: [
      "베스핀글로벌은 AI 서비스를 인프라, 모델·LLMOps, 데이터, 온톨로지, 에이전트, 거버넌스, 성과의 일곱 계층으로 설명합니다. LLMOps는 모델의 배포·평가·관찰·교체를 반복해서 관리하는 운영 체계입니다.",
      "회사가 공개한 한국수력원자력 사례는 약 2,500만 건의 원전 문서를 다루는 RAG 검색 환경을 소개합니다. 외부망과 분리된 환경, 문서 정제, 접근 통제 같은 조건도 함께 다룹니다. 사례 수치와 성과 설명은 기업 자체 발표입니다.",
    ],
    interpretationBody: [
      "데모는 정해진 문서와 질문으로 한 번 작동하면 끝납니다. 운영팀은 문서 양식이 바뀌고 모델 비용이 오르고 권한 정책이 달라져도 서비스를 유지해야 합니다. 한 계층의 변경은 검색 품질과 응답 속도에 영향을 줍니다.",
      "개발자는 계층 사이의 연결을 코드로 추적하고 관찰 지표를 정해야 합니다. 모델 응답 시간만 보는 것으로 부족합니다. 검색 적중률, 도구 오류, 사람의 재검토 비율과 건당 비용을 함께 보면 서비스가 흔들리는 위치를 찾을 수 있습니다.",
    ],
    question: "모델·데이터·권한 중 하나가 바뀌었을 때 영향을 받는 코드와 지표를 추적할 수 있는가?",
    tone: "paper",
  },
  {
    id: "measure",
    label: "MEASURE",
    eyebrow: "BUILD COUNT ≠ VALUE",
    title: "많이 만든 것과 실제로 쓰이는 것은 다릅니다",
    summary: "에이전트 수보다 사용률, 오류율, 처리 비용과 업무 기여도를 봐야 합니다.",
    leftTitle: "보이는 숫자",
    leftBody: "PROJECTS · AGENTS · SAVED HOURS",
    factBody: [
      "베스핀글로벌은 200건이 넘는 AX 프로젝트 경험, 511개 에이전트, 연간 3만6,800시간의 절감 기대치를 발표했습니다. 같은 인터뷰는 상위 10~20% 에이전트에 생산성 향상이 집중된다고 설명합니다. 이 수치는 기업 자체 발표이며 독립 기관의 검증 수치와 구분해 읽어야 합니다.",
      "에이전트를 만든 개수는 구축 활동을 보여줍니다. 현장 성과를 확인하려면 반복 사용자 수, 작업 완료율, 오류 후 복구 시간, 사람의 수정 비율과 건당 처리 비용을 지속해서 측정해야 합니다.",
    ],
    interpretationBody: [
      "운영 책임자는 평균 수치만 보면 사용이 집중된 소수 에이전트와 방치된 다수를 놓칠 수 있습니다. 팀별 사용 빈도와 실패 유형을 나눠 보면 어떤 업무에서 자동화가 자리를 잡았는지 드러납니다.",
      "측정 코드는 제품 기능과 함께 설계해야 합니다. 이벤트 이름과 성공 조건이 뒤늦게 바뀌면 이전 데이터를 비교하기 어렵습니다. 개발자가 로그와 평가 기준을 이해해야 경영 성과와 기술 지표를 같은 흐름에서 읽을 수 있습니다.",
    ],
    question: "사용자가 반복해서 쓰는지, 실패 후 복구되는지, 비용보다 큰 업무 가치를 만드는지 측정하고 있는가?",
    tone: "mint",
  },
  {
    id: "act",
    label: "ACT",
    eyebrow: "WHAT TO DO NEXT",
    title: "에이전트 활용과 코딩을 하나의 역량으로 묶으세요",
    summary: "문제 정의부터 평가, 운영과 회고까지 하나의 프로젝트로 증명합니다.",
    leftTitle: "만드는 과정",
    leftBody: "PROBLEM → SYSTEM → EVAL → LEARNING",
    factBody: [
      "공개 교육 과정은 개인 또는 팀 프로젝트를 통해 학습한 기술을 연결합니다. 산업 사례도 모델 선택만 설명하지 않고 데이터 정제, 보안 환경, 운영 지표와 현업 적용을 함께 다룹니다.",
      "취업 준비생은 실행 화면과 소스 코드 외에도 문제 정의, 시스템 구조, 평가 기준과 실패 로그를 기록할 수 있습니다. 교육 담당자는 Python·SQL·클라우드와 RAG·MCP를 하나의 프로젝트 흐름으로 구성할 수 있습니다.",
    ],
    interpretationBody: [
      "에이전트 활용과 코딩은 한 실무 역량으로 평가해야 합니다. 도구를 골라 결과를 만든 사람은 많아집니다. 결과가 맞는 이유를 설명하고, 오류를 재현하고, 운영 조건에 맞게 고친 기록이 작업자의 판단을 보여줍니다.",
      "현업 관리자는 에이전트 개수 대신 사용률·오류율·비용과 승인 지점을 봐야 합니다. 개발자는 이 지표를 남기는 코드를 구현하고 회고에서 개선 근거로 사용합니다. 한 프로젝트가 문제 정의부터 운영 책임까지 이어집니다.",
    ],
    question: "내 포트폴리오나 교육 결과물에 설계 판단, 실패 로그, 검증 기준과 복구 경험이 남아 있는가?",
    tone: "acid",
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
      <span>{String(index + 1).padStart(2, "0")} / 08</span>
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
          <h1 id="board-title">
            AI가 코드를
            <strong>써줄수록,</strong>
            <em>개발자는 코드를</em>
            더 깊이 읽어야 합니다
          </h1>
          <div className="board-skill-list" aria-label="개발 역량의 이동">
            <span>01 WRITE</span><span>02 READ</span><b>03 VERIFY</b><b>04 STEER</b><strong>05 OWN</strong>
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
            <div className="book-cover" aria-hidden="true">
              <span>{openChapter.eyebrow}</span>
              <b>{openChapter.label}</b>
              <i>OPEN FIELDNOTE</i>
            </div>
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
  const [mode, setMode] = useState<"wide" | "least">("wide");
  const safe = mode === "least";

  return (
    <div className={`permission-demo ${safe ? "safe" : "danger"}`}>
      <div className="permission-controls" role="group" aria-label="에이전트 권한 설정">
        <button
          type="button"
          aria-pressed={mode === "wide"}
          onClick={() => setMode("wide")}
        >
          권한 넓게
        </button>
        <button
          type="button"
          aria-pressed={mode === "least"}
          onClick={() => setMode("least")}
        >
          최소 권한
        </button>
      </div>
      <div className="permission-console" aria-live="polite">
        <div>
          <span>USER</span>
          <p>“지난달 청구 내역을 보여줘.”</p>
        </div>
        <div>
          <span>AGENT</span>
          <code>billing.update(status: &quot;approved&quot;)</code>
        </div>
        <div className="policy-result">
          <span>POLICY</span>
          <strong>
            {safe ? "수정 차단 · 사람의 승인 요청" : "승인 없이 수정 실행"}
          </strong>
        </div>
      </div>
      <p className="permission-note">
        {safe
          ? "읽기 전용 도구만 허용해 의도와 다른 행동을 멈췄다."
          : "자연스러운 답변 뒤에서 실제 데이터가 바뀔 수 있다."}
      </p>
    </div>
  );
}
