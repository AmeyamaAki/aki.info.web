// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zh-CN">
                <Head>
                    <meta name="application-name" content="aki.info.web"/>
                    <meta name="generator" content="Next.js"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <body>
                <Main/>
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;