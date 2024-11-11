import Head from 'next/head';

interface MetadataProps {
  title: string;
  description: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogLocale?: string;
  twitterDescription?: string;
  twitterCreator?: string;
  twitterImage?: string;
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  author = 'Ameyama Aki',
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogLocale = 'zh_CN',
  twitterDescription,
  twitterCreator = '@ameyama_aki',
  twitterImage = 'https://aki.cat/website.png',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocale} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:image" content={twitterImage} />
    </Head>
  );
};

export default Metadata;