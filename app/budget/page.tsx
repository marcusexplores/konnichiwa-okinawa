import { routes } from '@/src/common/utilities/routes';
import { configureMetadata } from '@/src/common/utilities/site';
import { Budget } from '@/src/domains/budget';

export const metadata = configureMetadata({
  url: routes.budget.root,
  title: 'Budget',
  description: 'Detailed breakdown of travel expenses for trip to Japan',
  socialMediaDescription:
    'Detailed breakdown of travel expenses for trip to Japan',
});

export default function BudgetPage() {
  return <Budget />;
}
