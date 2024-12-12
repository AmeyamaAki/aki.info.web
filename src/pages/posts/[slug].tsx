import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Noto_Serif_SC } from 'next/font/google';
import Metadata from '@/pages/components/Metadata';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

const inter = Noto_Serif_SC({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '400', '700'],
});

interface PostProps {
  source: MDXRemoteSerializeResult;
  data: {
    title: string;
    date: string;
    description: string;
  };
}

const Post: React.FC<PostProps> = ({ source, data }) => {
  return (
      <>
        <Metadata
            title={data.title}
            description={data.description}
        />
        <div className="background">
          <div className="slug-card">
            <div className="left-10">
              <h1 className="mb-4">{data.title}</h1>
              <p className="mb-6">{data.date}</p>
              <div className={`markdown-body ${inter.className}`}>
                <hr className="mb-4" />
                <MDXRemote {...source} />
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/posts/markdown');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md?$/, '') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/posts/markdown');
  const filePath = path.join(postsDirectory, `${params?.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkParse],
    },
  });
  return {
    props: {
      source: mdxSource,
      data: {
        ...data,
        date: data.date.toLocaleString(),
        description: data.description || '占位占位占位占位',
      },
    },
  };
};

export default Post;