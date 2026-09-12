import { Sector, SectorProps } from 'recharts';
import { cn } from '../../utilities/classname';

type DonutSliceArcProps = Pick<
  SectorProps,
  'cx' | 'cy' | 'outerRadius' | 'startAngle' | 'endAngle'
> & {
  className?: string;
};

export const DonutSliceArc = ({
  cx,
  cy,
  outerRadius,
  startAngle,
  endAngle,
  className,
}: DonutSliceArcProps) => {
  return (
    <Sector
      cx={cx}
      cy={cy}
      startAngle={startAngle}
      endAngle={endAngle}
      innerRadius={(outerRadius ?? 0) + 6}
      outerRadius={(outerRadius ?? 0) + 10}
      className={cn('fill-current', className)}
    />
  );
};
