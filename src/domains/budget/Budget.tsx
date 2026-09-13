'use client';

import { Donut } from '@/src/common/components/donut';
import {
  PageHeader,
  PageSection,
  PageTitle,
} from '@/src/common/components/page';
import { getExpenses, getTotalSumDisplay } from '@/src/repositories/finance';

export const Budget = () => {
  return (
    <div>
      <PageHeader>
        <PageTitle value="Budget" />
      </PageHeader>
      <PageSection>
        <Donut
          data={expenses}
          centerDefaultPrimaryText={getTotalSumDisplay()}
          centerDefaultSecondaryText="per person"
          classNames={{
            root: 'h-100 w-full sm:h-125 lg:h-180',
          }}
        />
      </PageSection>
    </div>
  );
};

const expenses = getExpenses().map((expense) => ({
  label: expense.category,
  value: expense.amount,
  display: expense.display,
}));
