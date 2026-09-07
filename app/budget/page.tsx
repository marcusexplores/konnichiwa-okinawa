import { configureMetadata } from '@/src/common/utilities/site';
import { Budget } from '@/src/domains/budget';

export const metadata = configureMetadata({
  url: '/budget',
  title: 'Budget',
  description: 'Detailed breakdown of travel expenses for trip to Japan',
  socialMediaDescription:
    'Detailed breakdown of travel expenses for trip to Japan',
  type: 'website',
});

export default function BudgetPage() {
  return <Budget />;
}
