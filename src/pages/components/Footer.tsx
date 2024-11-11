"use client";

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const commitSha = process.env.NEXT_PUBLIC_GIT_COMMIT_SHA || 'unknown';
  const githubUrl = 'https://github.com/AmeyamaAki/aki.info.web/commit/' + commitSha

  return (
    <footer 
      className="fixed bottom-0 left-0 w-full transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          h-12 flex items-center justify-center px-2
          transition-all duration-300 ease-in-out
          ${isHovered ? 'bg-white dark:bg-gray-800' : 'bg-transparent'}
        `}
      >
        {isHovered && (
          <div className="text-center text-gray-700 dark:text-gray-300 flex items-center justify-between w-full">
            <div className='footer-text'>© {new Date().getFullYear()} Ameyama Aki. All rights reserved.</div>
            <a href={githubUrl} className='text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded whitespace-nowrapd'>
              <span>
                Build ({commitSha.substring(0, 7)})
              </span>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;