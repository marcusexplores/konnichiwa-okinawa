import summary from '@/src/data/finance/summary.json';
import { Expenses } from './types';
import { formatMoneySgd } from './format';

export const getExpenses = (): Expenses[] => {
  return Object.entries(summary).map(([category, amount]) => ({
    category,
    amount,
    display: formatMoneySgd(amount),
  }));
};

export const getTotalSumDisplay = (): string => {
  const total = Object.values(summary).reduce((acc, amount) => acc + amount, 0);
  return formatMoneySgd(total);
};
