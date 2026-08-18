"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "learn", label: "LEARN" },
  { id: "collaborate", label: "COLLABORATE" },
  { id: "connect", label: "CONNECT" },
  { id: "read", label: "READ" },
  { id: "verify", label: "VERIFY" },
  { id: "operate", label: "OPERATE" },
  { id: "measure", label: "MEASURE" },
  { id: "act", label: "ACT" },
];

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
