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
          centerPrimaryText={getTotalSumDisplay()}
          centerSecondaryText="per person"
          classNames={{
            root: 'h-180 w-full',
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
