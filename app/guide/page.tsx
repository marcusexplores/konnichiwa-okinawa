import { configureMetadata } from '@/src/common/utilities/site';
import { Guide } from '@/src/domains/guide';

export const metadata = configureMetadata({
  url: '/guide',
  title: 'Guide',
  description: 'Detailed guide',
  socialMediaDescription: 'Detailed guide',
});

export default function GuidePage() {
  return <Guide />;
}
