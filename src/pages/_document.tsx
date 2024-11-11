// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zh-CN">
                <Head>
                    <meta name="application-name" content="aki.info" />
                    <meta name="generator" content="Next.js" />
                    <meta name="author" content="Ameyama Aki" />
                    <meta property="og:title" content="银杏树之下" />
                    <meta property="og:description" content="占位符占位符占位符占位符占位符" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="zh_CN" />
                    <meta name="twitter:description" content="占位符占位符占位符占位符占位符" />
                    <meta name="twitter:creator" content="@ameyama_aki" />
                    <meta name="twitter:image" content="https://aki.cat/website.png" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;