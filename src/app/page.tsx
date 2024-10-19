import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full transition-colors duration-500 flex items-center justify-center p-4 overflow-y-auto dark:bg-black">
      <div className="bg-white dark:bg-gray-800 dark:text-white shadow-xl rounded-xl p-8 sm:p-10 transition-all duration-500 flex flex-col items-center w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] 2xl:max-w-[45%] my-8 fade-in">
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={144}
            height={144}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">秋 雨山</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">占位符占位符占位符占位符占位符</p>
        </div>
        
        <div className="w-full space-y-6">
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
            同时，也可以在其他的平台上找到秋~ <br/> 例如 <a href="https://x.com/Ameyama_aki" className="font-medium">X</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;