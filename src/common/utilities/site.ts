import type { Metadata } from 'next';
import { env } from './env';

interface MetadataConfiguration {
  url: string;
  title?: string | { default: string; template: string };
  description: string;
  socialMediaDescription?: string;
  type?: 'website' | 'article';
}

export const configureMetadata = ({
  url,
  title = {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description,
  socialMediaDescription = description,
  type = 'website',
}: MetadataConfiguration): Metadata => {
  const resolvedTitle = typeof title === 'string' ? title : title.default;

  return {
    title,
    description,
    openGraph: {
      siteName: site.name,
      locale: 'en_SG',
      type,
      url,
      title: resolvedTitle,
      description: socialMediaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: socialMediaDescription,
    },
  };
};

const site = {
  url: `https://marcusexplores.github.io/${env.publicBasePath}`,
  name: 'こんにちは沖縄',
};
