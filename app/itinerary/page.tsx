import { routes } from '@/src/common/utilities/routes';
import { configureMetadata } from '@/src/common/utilities/site';
import { ItineraryOverview } from '@/src/domains/itinerary';

export const metadata = configureMetadata({
  url: routes.itinerary.path,
  title: routes.itinerary.name,
  description: 'Itinerary',
  socialMediaDescription: 'Itinerary',
});

export default function ItineraryPage() {
  return <ItineraryOverview />;
}
