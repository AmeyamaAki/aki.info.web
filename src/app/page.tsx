import React from 'react';
import Image from 'next/image';
import { Noto_Serif_JP } from "next/font/google";

const twin = Noto_Serif_JP ({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

const Home: React.FC = () => {
  const description = [
    "僕を連れてって浸み込んでしまう前に",
    "溶け合い未来へ届くようにと",
    "you know it's naughty virtual virtualize a life alive"
  ]
  const randomDescription = Math.floor(Math.random() * description.length);
  const randomOutput = description[randomDescription];

  return (
    <div className="background">
      <div className="card">
        <div className="avatar">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={144}
            height={144}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="name-and-description">
          <h1>秋 雨山</h1>
          <p className={`description ${twin.className}`}>{randomOutput}</p>
        </div>
        
        <div className="content">
          <p className="fade-in" style={{animationDelay: '0.2s'}}>
            银杏树之下，躺着一位名叫「雨山秋」的孩子
          </p>
          <p className="fade-in" style={{animationDelay: '0.4s'}}>
            秋的身上，仍然有许多东西是谜一样的存在... <br/>当然，也有一些已知的信息：
          </p>
          <blockquote className="blockquote-custom fade-in" style={{animationDelay: '0.6s'}}>
            <ul className="list-disc pl-5 space-y-2">
              <li>「秋雨山」只是姓名颠倒的结果 <del className="text-gray-500">，也有可能是秋故意的（小声）</del></li>
              <li>在收到陌生且新鲜的 DM 时，秋会有些不知所措</li>
              <li>喜欢用秋天相关的插画作为秋的头像</li>
            </ul>
          </blockquote>
          <p className="fade-in" style={{animationDelay: '0.8s'}}>
            关于秋的日常生活，可以左转 <a href="https://t.me/Sea_of_Sunflower" className="font-medium">@Sea_of_Sunflower</a> 看看w 
          </p>
          <p className="fade-in" style={{animationDelay: '1s'}}>
            同时，也可以在其他的平台上找到秋~ <br/> 例如 <a href="https://x.com/Ameyama_aki" className="font-medium">X</a> 和 <a href="https://bsky.app/profile/aki.cat">Bluesky</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;