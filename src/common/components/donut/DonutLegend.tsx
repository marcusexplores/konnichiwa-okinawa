import { cn } from '@/src/common/utilities/classname';
import { LABEL_COLORS } from './constants';

interface DonutLegendProps {
  labels: string[];
  className?: string;
}

export const DonutLegend = ({ labels, className }: DonutLegendProps) => {
  return (
    <div
      className={cn('flex w-full flex-wrap justify-center gap-x-2', className)}
    >
      {labels.map((label, index) => {
        const color = LABEL_COLORS[index % LABEL_COLORS.length];

        return (
          <div key={label} className="flex items-center justify-center gap-1">
            <span className={cn('h-3 w-3 bg-current', color)} />
            <div>{label}</div>
          </div>
        );
      })}
    </div>
  );
};
