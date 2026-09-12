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
        'outline-none **:focus:outline-none [&_.recharts-surface]:outline-none [&_.recharts-wrapper]:outline-none',
        classNames?.root,
      )}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            shape={DonutSlice}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
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
      <DonutLegend
        labels={data.map((item) => item.label)}
        className="lg:hidden"
      />
    </div>
  );
};

interface DonutClassNames {
  root?: string;
}
