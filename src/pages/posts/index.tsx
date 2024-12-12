import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import React from 'react';
import matter from 'gray-matter';
import Metadata from "@/pages/components/Metadata";

interface Post {
  slug: string;
  title: string;
  date: string;
}

const Posts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
      <>
        <Metadata title="Posts List" description="A posts list page about Aki."/>
        <div className="background">
          <div className="slug-card">
            <h1 className="mb-8">Posts</h1>
            <ul className="space-y-4">
              {posts.map((post, index) => (
                  <li key={post.slug} className="fade-in post-card" style={{animationDelay: `${0.2 + index * 0.2}s`}}>
                    <Link href={`/posts/${post.slug}`} className="a-no-underline">
                      <div
                          className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md">
                        <h2 className="text-left text-xl font-bold text-gray-700 dark:text-gray-300 hover:no-underline">{post.title}</h2>
                        <p className="text-left text-sm text-gray-500 hover:no-underline">{post.date}</p>
                      </div>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </>
  );
};

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/posts/markdown');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const {data} = matter(fileContents);

    return {
      slug: filename.replace(/\.md?$/, ''),
      title: data.title || 'Untitled',
      date: data.date || 'No date',
    };
  });

  // 按时间从新到旧排序
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      posts,
    },
  };
};

export default Posts;