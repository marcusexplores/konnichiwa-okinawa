import { routes } from '@/src/common/utilities/routes';
import { configureMetadata } from '@/src/common/utilities/site';
import { Checklist } from '@/src/domains/guide';

export const metadata = configureMetadata({
  url: routes.guide.checklist,
  title: 'Checklist',
  description: 'Checklist',
  socialMediaDescription: 'Essential checklist for Japan travel.',
});

export default function ChecklistPage() {
  return <Checklist />;
}
