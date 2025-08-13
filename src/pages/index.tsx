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
          console.log('You find it! 秋没想好放点什么，于是就奖励你一颗星星~ 🌟');
          window.open(atob("dGc6Ly9yZXNvbHZlP2RvbWFpbj1kbV9ha2lfYm90"));
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
            <h1>雨山秋</h1>
            <p className={`description ${twin.className}`}>{randomOutput}</p>
          </div>
          <div className="content">
            <p className="fade-in" style={{ animationDelay: '0.2s' }}>
              银杏树之下，躺着一位叫「雨山秋」的孩子
            </p>
            <p className="fade-in" style={{ animationDelay: '0.4s' }}>
              秋的身上，仍然有许多谜一样的东西... <br />当然，也有一些已知的信息：
            </p>
            <blockquote className="blockquote-custom fade-in" style={{ animationDelay: '0.6s' }}>
              <ul className="list-disc pl-5 space-y-2">
                <li>「秋雨山」只是姓名颠倒的结果 <del>，俨然已经成为了一个...新的名字？（小声）</del></li>
                <li>面对陌生的 DM，秋会有些不知所措。<del>聊得多了就会发现秋其实是一个无趣的人</del></li>
                <li>喜欢用秋天相关的插画作为头像<del>吗？</del></li>
              </ul>
            </blockquote>
            <p className="fade-in" style={{ animationDelay: '0.8s' }}>
              因为 Telegram 账号经常被冻结，频道就暂时不建了
            </p>
            <p className="fade-in" style={{ animationDelay: '1s' }}>
              也可以在其他地方联系到秋~ <br /> 例如 <a rel="me" href="https://el5.net/@AmeyamaAki">Mastodon</a> / <a href="https://bsky.app/profile/aki.cat">Bluesky</a> / <a href="https://x.com/Ameyama_aki" className="font-medium">X</a>
            </p>
            <p className="fade-in" style={{ animationDelay: '1.2s' }}>
              要不来看看 <Link href="/friends">其他人的链接</Link> ！
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
