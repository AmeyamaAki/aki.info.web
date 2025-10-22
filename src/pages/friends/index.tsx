import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import React from 'react';
import Metadata from "@/pages/components/Metadata";

type FriendLink = {
  name: string;
  description: string;
  url: string;
  avatar: string;
};

type LinksProps = {
  friends: FriendLink[];
};

const Links: React.FC<LinksProps> = ({ friends }) => {
  return (
    <>
      <Metadata title="Friends" description="A links list page about Aki's friends."/>
      <div className="background">
        <div className="slug-card">
          <h1 className="mb-8">Friends</h1>
          <ul className="space-y-4">
            {friends.map((friend, index) => (
              <li key={friend.url} className="fade-in post-card" style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
              <a href={friend.url} target="_blank" className="a-no-underline">
                <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md flex items-center gap-4">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
                  <Image 
                    src={friend.avatar} 
                    alt={friend.name} 
                    fill
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                    className="rounded-full object-cover" 
                  />
                </div>
                  <div>
                    <h2 className="text-left text-xl font-bold text-gray-700 dark:text-gray-300">{friend.name}</h2>
                    <p className="text-left text-sm text-gray-500 m-0">{friend.description}</p>
                  </div>
                </div>
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'src', 'pages', 'friends', 'links.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: {
      friends: data.Friends,
    },
  };
};

export default Links;