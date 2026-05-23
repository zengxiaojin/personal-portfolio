import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeng Jin | Portfolio",
  description:
    "日本でのITエンジニア就職を目指すWeb Developerのポートフォリオサイトです。Next.js、TypeScript、Java、Spring Bootを中心とした学習内容と制作物を紹介しています。",
  keywords: [
    "Zeng Jin",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Japan IT",
  ],
  authors: [{ name: "Zeng Jin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}