import { cn } from '@/src/common/utilities/classname';

export interface DonutCenterDisplayProps {
  value: string;
  subValue?: string;
  label?: string;
  classNames?: DonutCenterDisplayClassNames;
}

export const DonutCenterDisplay = ({
  value,
  subValue,
  label,
  classNames,
}: DonutCenterDisplayProps) => {
  const hasLabel = Boolean(label);
  const hasValue = Boolean(value);
  const hasSubValue = Boolean(subValue);

  return (
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      className="select-none"
    >
      {hasLabel && (
        <tspan
          x="50%"
          dy="-3em"
          className={cn('text-sm font-medium sm:text-lg', classNames?.label)}
        >
          {label}
        </tspan>
      )}
      {hasValue && (
        <tspan
          x="50%"
          y="50%"
          className={cn(
            'fill-brand-primary text-4xl font-bold sm:text-6xl',
            classNames?.value,
          )}
        >
          {value}
        </tspan>
      )}
      {hasSubValue && (
        <tspan
          x="50%"
          dy="2.5em"
          className={cn(
            'fill-gray-500 text-sm font-medium sm:text-lg',
            classNames?.subValue,
          )}
        >
          {subValue}
        </tspan>
      )}
    </text>
  );
};

interface DonutCenterDisplayClassNames {
  value?: string;
  subValue?: string;
  label?: string;
}
