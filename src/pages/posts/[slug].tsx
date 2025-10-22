import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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
                <MDXRemote {...source} components={{ img: MDXImage }} />
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

// Client-side image component for MDX that uses next/image for optimization.
// It measures image natural size in the browser if width/height aren't provided
// and then renders <Image> with the detected dimensions. This avoids tiny
// rendering while still supporting remote and local images.
const MDXImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { src, alt, width, height, style, ...rest } = props;
  const srcStr = typeof src === 'string' ? src : '';
  const parsedW = width ? Number(width) : undefined;
  const parsedH = height ? Number(height) : undefined;

  const [dims, setDims] = React.useState<{ w?: number; h?: number }>({});

  React.useEffect(() => {
    if (parsedW && parsedH) {
      setDims({ w: parsedW, h: parsedH });
      return;
    }
    if (!srcStr) return;
    let mounted = true;
    const img = new window.Image();
    // try to load cross-origin images too
    img.crossOrigin = 'anonymous';
    img.src = srcStr;
    img.onload = () => {
      if (!mounted) return;
      const w = img.naturalWidth || undefined;
      const h = img.naturalHeight || undefined;
      if (w && h) {
        // Optionally cap maximum width to avoid overly large images
        const MAX_W = 1200;
        if (w > MAX_W) {
          const outW = MAX_W;
          const outH = Math.round((MAX_W / w) * h);
          setDims({ w: outW, h: outH });
        } else {
          setDims({ w, h });
        }
      }
    };
    img.onerror = () => {
      // leave dims empty, fall back to fill mode
    };
    return () => {
      mounted = false;
    };
  }, [srcStr, parsedW, parsedH]);

  // Use Tailwind classes for layout; keep dynamic maxWidth via inline style.
  const wrapperClasses = 'relative w-full min-h-[200px]';
  const captionClasses = 'block text-center text-base text-gray-500 mt-2 italic';

  // Always render a span as the root to avoid emitting block-level elements
  // inside a paragraph (<p>) which causes hydration mismatches. Use inner
  // spans/blocks for layout and caption presentation.
  const rootClasses = `block mx-auto ${dims.w ? '' : 'w-full'}`;

  return (
    <span className={rootClasses} style={dims.w ? { maxWidth: `${dims.w}px` } : undefined} {...(rest as any)}>
      {dims.w && dims.h ? (
        <Image src={srcStr} alt={alt || ''} width={dims.w} height={dims.h} />
      ) : (
        <span className={wrapperClasses}>
          <Image src={srcStr} alt={alt || ''} fill style={{ objectFit: 'contain' }} />
        </span>
      )}

      {alt ? (
        <span className={captionClasses} role="note">
          {alt}
        </span>
      ) : null}
    </span>
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