import { routes } from '@/src/common/utilities/routes';
import { configureMetadata } from '@/src/common/utilities/site';
import { ItineraryDay0 } from '@/src/domains/itinerary';

export const metadata = configureMetadata({
  url: `${routes.itinerary.path}/day-0-departure`,
  title: 'Day 0',
  description: 'Itinerary',
  socialMediaDescription: 'Itinerary',
  type: 'article',
});

export default function ItineraryDay0Page() {
  return <ItineraryDay0 />;
}
