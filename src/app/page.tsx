// src/app/page.tsx
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full transition-colors duration-500 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-xl p-8 transition-colors duration-500 flex flex-col items-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%] my-4">
        <div className="mb-4">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">秋 雨山</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">占位符占位符占位符占位符占位符</p>
        </div>
        
        <div className="w-full">
          <blockquote className="blockquote-custom">
            <p className="leading-relaxed">
              银杏树下躺着一位孩子，她的名字...是叫「雨山秋」来着？<br /><del>是雨山秋，不是秋雨山 ＼⁠(ﾟ⁠ｰﾟ⁠＼⁠) </del>
            </p>
          </blockquote>
          <p className="leading-relaxed mb-5">
            关于她，目前并没有更多信息可以公开...
          </p>
          <blockquote className="blockquote-custom">
            <p className="leading-relaxed">
              但是你/妳也可以在其他地方找到她的踪迹，例如 <a href="https://t.me/SouikenHere">@SouikenHere</a>
            </p>
          </blockquote>
          <blockquote className="blockquote-custom">
            <p className="leading-relaxed">
              <a href="https://t.me/Sea_of_Sunflower">@Sea_of_Sunflower</a> 是雨山秋的日常频道，感兴趣的话可以来看看~
            </p>
          </blockquote>
          <blockquote className="blockquote-custom">
            <p className="leading-relaxed">
              秋也会在其他的平台上出现，例如 <a href="https://x.com/Ameyama_aki">X</a>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;