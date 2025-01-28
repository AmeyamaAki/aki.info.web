import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 允许 .mdx 文件扩展名
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // 更新 images 配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rikka.im',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'izumino.cat',
        pathname: '/**',
      },
    ],
  },
}

const withMDX = createMDX({
  // 根据需要添加 Markdown 插件
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

// 合并 MDX 和 Next.js 配置
export default withMDX(nextConfig)