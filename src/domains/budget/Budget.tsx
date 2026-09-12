'use client';

import { Donut } from '@/src/common/components/donut';
import { getExpenses, getTotalSumDisplay } from '@/src/repositories/finance';

export const Budget = () => {
  return (
    <div>
      <div>Title section</div>
      <div className="p-4">
        <Donut
          data={expenses}
          centerDefaultPrimaryText={getTotalSumDisplay()}
          centerDefaultSecondaryText="per person"
          classNames={{
            root: 'h-100 w-full sm:h-125 md:h-180',
          }}
        />
      </div>
    </div>
  );
};

const expenses = getExpenses().map((expense) => ({
  label: expense.category,
  value: expense.amount,
  display: expense.display,
}));
