import { routes } from '@/src/common/utilities/routes';
import { configureMetadata } from '@/src/common/utilities/site';
import { Flight } from '@/src/domains/guide';

export const metadata = configureMetadata({
  url: routes.guide.flight,
  title: 'Flight',
  description: 'Flight',
  socialMediaDescription: 'Flight details.',
});

export default function FlightPage() {
  return <Flight />;
}
