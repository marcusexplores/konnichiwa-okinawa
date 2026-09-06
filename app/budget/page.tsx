import { configureMetadata } from '@/src/common/utilities/site';
import { Budget } from '@/src/domains/budget';

export const metadata = configureMetadata({
  url: 'budget',
  title: 'Budget',
  description: 'Budget',
  socialMediaDescription: 'Budget',
  type: 'website',
});

export default function BudgetPage() {
  return <Budget />;
}
