import type { Metadata } from "next";
import { Geist_Mono, Gowun_Batang, Gowun_Dodum } from "next/font/google";
import "./globals.css";

const editorialSans = Gowun_Dodum({
  weight: "400",
  variable: "--font-editorial-sans",
  display: "swap",
  preload: false,
});

const editorialSerif = Gowun_Batang({
  weight: ["400", "700"],
  variable: "--font-editorial-serif",
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${editorialSans.variable} ${editorialSerif.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
