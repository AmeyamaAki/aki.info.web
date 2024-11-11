// src/pages/_app.tsx

import type { AppProps } from 'next/app';
import { Noto_Serif_SC } from 'next/font/google';
import Footer from './components/Footer';
import LanguageDetector from './components/LanguageDetector';
import './globals.css';

const inter = Noto_Serif_SC({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
});

function Autumn({ Component, pageProps }: AppProps) {
    return (
        <div className={`bg-orange-200 dark:bg-slate-800 transition-colors duration-500 min-h-screen ${inter.className}`}>
            <LanguageDetector />
            <main className="flex-grow">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default Autumn;