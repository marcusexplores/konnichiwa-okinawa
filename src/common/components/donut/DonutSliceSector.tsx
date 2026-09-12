import { Sector, SectorProps } from 'recharts';

type DonutSliceSectorProps = Pick<
  SectorProps,
  'cx' | 'cy' | 'innerRadius' | 'outerRadius' | 'startAngle' | 'endAngle'
> & {
  className?: string;
};

export const DonutSliceSector = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  className,
}: DonutSliceSectorProps) => {
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      className={className}
    />
  );
};
