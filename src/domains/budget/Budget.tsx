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
            root: 'h-100 w-full sm:h-125 xl:h-180',
          }}
        />
      </PageSection>
      <PageSection className="h-300 bg-emerald-400 lg:h-100">
        <p>normal</p>
        <p className="hidden sm:block">sm</p>
        <p className="hidden md:block">md</p>
        <p className="hidden lg:block">lg</p>
        <p className="hidden xl:block">xl</p>
        <p className="hidden 2xl:block">2xl</p>
      </PageSection>
      {/* <PageSection> */}
      <PageSection className="bg-amber-200">
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </PageSection>
      {/* <PageSection> */}
      <PageSection className="bg-blue-800">
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </PageSection>
    </div>
  );
};

const expenses = getExpenses().map((expense) => ({
  label: expense.category,
  value: expense.amount,
  display: expense.display,
}));
