import { useState } from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { cn } from '@/src/common/utilities/classname';
import { DonutCenterDisplay } from './DonutCenterDisplay';
import { DonutLegend } from './DonutLegend';
import { DonutSlice } from './DonutSlice';
import { DonutSliceConfig } from './types';

interface DonutProps {
  data: DonutSliceConfig[];
  centerDefaultPrimaryText: string;
  centerDefaultSecondaryText?: string;
  classNames?: DonutClassNames;
}

// Reference: https://recharts.github.io/en-US/examples/CustomActiveShapePieChart/
export const Donut = ({
  data,
  centerDefaultPrimaryText,
  centerDefaultSecondaryText,
  classNames,
}: DonutProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  return (
    <div
      className={cn(
        'flex flex-col outline-none **:focus:outline-none [&_.recharts-surface]:outline-none [&_.recharts-wrapper]:outline-none',
        'md:flex-row md:items-center',
        classNames?.root,
      )}
    >
      <div
        className={cn(
          'min-h-0 w-full flex-1',
          'md:h-full md:w-4/5 md:flex-none',
          'lg:w-3/4',
          'xl:w-full',
        )}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              shape={DonutSlice}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="90%"
              dataKey="value"
              isAnimationActive={true}
              onTouchStart={(_, index) => setActiveIndex(index)}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(undefined)}
            />
            <Tooltip content={() => null} />

            {activeIndex === undefined && (
              <DonutCenterDisplay
                value={centerDefaultPrimaryText}
                subValue={centerDefaultSecondaryText}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
      <DonutLegend
        labels={data.map((item) => item.label)}
        className="md:w-1/5 lg:w-1/4 xl:hidden"
      />
    </div>
  );
};

interface DonutClassNames {
  root?: string;
}
