import { PieSectorShapeProps } from 'recharts';
import { cn } from '@/src/common/utilities/classname';

type DonutSliceCalloutProps = Pick<
  PieSectorShapeProps,
  'cx' | 'cy' | 'outerRadius' | 'midAngle'
> & {
  label: string;
  value: string;
  classNames?: DonutSliceCalloutClassNames;
};

export const DonutSliceCallout = ({
  cx,
  cy,
  outerRadius,
  midAngle,
  label,
  value,
  classNames,
}: DonutSliceCalloutProps) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g className={classNames?.root}>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        className={cn('stroke-current', classNames?.indicatorLine)}
        fill="none"
      />
      <circle
        cx={ex}
        cy={ey}
        r={2}
        className={cn('fill-current', classNames?.indicatorTip)}
        stroke="none"
      />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        className={cn('fill-current', classNames?.label)}
      >
        {label}
      </text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        className={cn('fill-on-muted', classNames?.value)}
      >
        {value}
      </text>
    </g>
  );
};

interface DonutSliceCalloutClassNames {
  root?: string;
  indicatorLine?: string;
  indicatorTip?: string;
  label?: string;
  value?: string;
}
