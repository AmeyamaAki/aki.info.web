import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Serif_JP } from "next/font/google";
import { GetServerSideProps } from 'next';
import Metadata from "@/pages/components/Metadata";

const twin = Noto_Serif_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
});

export const getServerSideProps: GetServerSideProps = async () => {
  const descriptions = [
    "僕を連れてって浸み込んでしまう前に",
    "溶け合い未来へ届くようにと",
    "you know it's naughty virtual virtualize a life alive"
  ];
  return {
    props: {
      randomOutput: descriptions[Math.floor(Math.random() * descriptions.length)]
    }
  };
};

const Home: React.FC<{ randomOutput: string }> = ({ randomOutput }) => {
  const keySequence = ['a', 'k', 'i'];
  let keyIndex = 0;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === keySequence[keyIndex]) {
        keyIndex++;
        if (keyIndex === keySequence.length) {
          alert("生まれ変わってもあたしがいいと思わないよ");
          console.log('Easter Egg: You found the hidden sequence!');
          window.open(atob("dGc6Ly9yZXNvbHZlP2RvbWFpbj1ha2lhbWV5X2JvdA=="));
          keyIndex = 0;
        }
      } else {
        keyIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Metadata title="银杏树之下" description="占位符占位符占位符占位符占位符" />
      <div className="background">
        <div className="card">
          <div className="avatar">
            <Image src="/avatar.jpg" alt="Avatar" width={144} height={144} className="rounded-full shadow-lg" />
          </div>
          <div className="name-and-description">
            <h1>秋 雨山</h1>
            <p className={`description ${twin.className}`}>{randomOutput}</p>
          </div>
          <div className="content">
            <p className="fade-in" style={{ animationDelay: '0.2s' }}>
              银杏树之下，躺着一位叫「雨山秋」的孩子
            </p>
            <p className="fade-in" style={{ animationDelay: '0.4s' }}>
              秋的身上，仍然有许多东西是谜一样的存在... <br />当然，也有一些已知的信息：
            </p>
            <blockquote className="blockquote-custom fade-in" style={{ animationDelay: '0.6s' }}>
              <ul className="list-disc pl-5 space-y-2">
                <li>「秋雨山」只是姓名颠倒的结果 <del className="text-gray-500">，也有可能是秋故意的（小声）</del></li>
                <li>在收到陌生且新鲜的 DM 时，秋会有些不知所措</li>
                <li>喜欢用秋天相关的插画作为秋的头像</li>
              </ul>
            </blockquote>
            <p className="fade-in" style={{ animationDelay: '0.8s' }}>
              有关秋的日常生活，可以左转 <a href="https://t.me/Sea_of_Sunflower" className="font-medium">@Sea_of_Sunflower</a> 看看w
            </p>
            <p className="fade-in" style={{ animationDelay: '1s' }}>
              同时，也可以在其他的平台上找到秋~ <br /> 例如 <a href="https://x.com/Ameyama_aki" className="font-medium">X</a> / <a rel="me" href="https://el5.net/@AmeyamaAki">Mastodon</a> / <a href="https://bsky.app/profile/aki.cat">Bluesky</a>
            </p>
            <p className="fade-in" style={{ animationDelay: '1.2s' }}>
              也可以去看看 <Link href="/friends">其他人的链接</Link> 的！
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;