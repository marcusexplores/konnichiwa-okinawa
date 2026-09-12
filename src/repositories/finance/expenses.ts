import summary from '@/src/data/finance/summary.json';
import { formatMoneySgd } from './format';

export interface Expenses {
  category: string;
  amount: number;
  display: string;
}

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
