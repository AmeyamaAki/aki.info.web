'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import parser from 'accept-language-parser';

export default function LanguageDetector() {
  const router = useRouter();

  useEffect(() => {
    const detectAndRedirect = () => {
      // 获取浏览器的语言设置
      const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
      
      // 将浏览器语言设置转换为 accept-language-parser 可以理解的格式
      const languageHeader = browserLanguages.join(',');
      
      // 解析语言设置
      const languages = parser.parse(languageHeader);
      
      // 检查是否有加泰隆尼亚语变体
      const catalanVariants = ['ca', 'ca-ES', 'ca-AD', 'ca-FR', 'ca-IT'];
      const isCatalan = languages.some(lang => 
        catalanVariants.includes(lang.code) || 
        (lang.code === 'ca' && catalanVariants.includes(`${lang.code}-${lang.region}`))
      );

      // 如果检测到加泰隆尼亚语，重定向到 /cat
      if (isCatalan) {
        router.push('/cat');
      }
    };

    detectAndRedirect();
  }, [router]);

  return null; // 这个组件不渲染任何内容
}