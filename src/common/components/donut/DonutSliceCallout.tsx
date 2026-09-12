import { PieSectorShapeProps } from 'recharts';

type DonutSliceCalloutProps = Pick<
  PieSectorShapeProps,
  'cx' | 'cy' | 'outerRadius' | 'midAngle' | 'percent'
> & {
  label: string;
  className?: string;
};

export const DonutSliceCallout = ({
  cx,
  cy,
  outerRadius,
  midAngle,
  percent,
  label,
  className,
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
    <>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        // stroke={fill}
        className={'stroke-current'}
        fill="none"
      />
      <circle
        cx={ex}
        cy={ey}
        r={2}
        // fill={fill}
        className={className}
        stroke="none"
      />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        // fill="#333"
        className={className}
      >
        {label}
      </text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        // fill="#999"
        className="fill-on-muted"
      >
        {`${((percent ?? 1) * 100).toFixed(2)}%`}
      </text>
    </>
  );
};
