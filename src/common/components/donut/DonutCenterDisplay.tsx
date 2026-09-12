import { cn } from '@/src/common/utilities/classname';

// interface DonutCenterDisplayProps {
//   value: string;
//   className?: string;
// }

// export const DonutCenterDisplay = ({
//   value,
//   className,
// }: DonutCenterDisplayProps) => {
//   return (
//     <text
//       x="50%"
//       y="50%"
//       textAnchor="middle"
//       dominantBaseline="middle"
//       className={cn('fill-brand-primary text-3xl', className)}
//     >
//       {value}
//     </text>
//   );
// };

interface DonutCenterDisplayProps {
  value: string;
  subValue?: string;
  className?: string;
  subValueClassName?: string;
}
export const DonutCenterDisplay = ({
  value,
  subValue,
  className,
  subValueClassName,
}: DonutCenterDisplayProps) => {
  return (
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      className="select-none"
    >
      <tspan
        x="50%"
        dy={subValue ? '-0.35em' : '0'}
        className={cn('fill-brand-primary text-2xl font-bold', className)}
      >
        {value}
      </tspan>
      {subValue && (
        <tspan
          x="50%"
          dy="1.3em"
          className={cn(
            'fill-gray-500 text-sm font-medium dark:fill-gray-400',
            subValueClassName,
          )}
        >
          {subValue}
        </tspan>
      )}
    </text>
  );
};
