// src/app/layou.tsx

import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import Footer from "./components/Footer";
import LanguageDetector from './components/LanguageDetector';
import "./globals.css";

const inter = Noto_Serif_SC ({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
});

const title = 'Create Next App'
const description = '占位符占位符占位符占位符占位符'


export const metadata: Metadata = {
  title,
  description,
  generator: 'Next.js',
  applicationName: 'Your App Name',
  authors: [{ name: 'Ameyama Aki', url: 'https://github.com/ameyama_aki' }],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'zh_CN',
    // url: 'Your website URL',
    // images: [{ url: 'https://website.png', width: 800, height: 600 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@ameyama_aki',
    // images: ['https://website.png'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`bg-orange-200 dark:bg-slate-800 transition-colors duration-500 min-h-screen ${inter.className}`}>
        <LanguageDetector />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
