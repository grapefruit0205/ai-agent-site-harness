import type { Metadata } from "next";
import { Geist_Mono, Gowun_Batang, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const editorialSerif = Gowun_Batang({
  weight: ["400", "700"],
  variable: "--font-editorial-serif",
  display: "swap",
  preload: false,
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI가 코드를 쓸수록, 개발자는 더 깊이 읽어야 한다",
  description:
    "AI 에이전트 개발·협업 능력과 코딩 기본기를 하나의 실무 역량으로 읽는 인터랙티브 칼럼.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-gov.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.addEventListener('pageshow', function(event) {
                if (!window.location.hash) {
                  window.scrollTo(0, 0);
                }
              });
              if (!window.location.hash) {
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
      </head>
      <body
        className={`${editorialSerif.variable} ${notoSansKr.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
