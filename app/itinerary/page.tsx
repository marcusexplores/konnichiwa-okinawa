import { configureMetadata } from '@/src/common/utilities/site';
import { ItineraryOverview } from '@/src/domains/itinerary';

export const metadata = configureMetadata({
  url: 'itinerary',
  title: 'Itinerary',
  description: 'Itinerary',
  socialMediaDescription: 'Itinerary',
  type: 'website',
});

export default function ItineraryPage() {
  return <ItineraryOverview />;
}
