import { useState } from 'react';
import {
  Pie,
  PieChart,
  PieSectorShapeProps,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';
import { cn } from '@/src/common/utilities/classname';

interface DonutProps {
  className?: string;
}

export const Donut = ({ className }: DonutProps) => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <div className={cn(className)}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            shape={Slice}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            dataKey="value"
            isAnimationActive={true}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
          <Tooltip content={() => null} />

          {!isActive && (
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-800 text-xl font-bold dark:fill-gray-200"
            >
              ABC
            </text>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// #region Sample data
const data = [
  { name: 'Flight', value: 2043.68 },
  { name: 'Accommodation', value: 1451.87 },
  { name: 'Insurance', value: 100 },
  { name: 'Communication', value: 100 },
  { name: 'Transportation', value: 200 },
  { name: 'Food', value: 100 },
  { name: 'Entertainment', value: 200 },
  { name: 'Others', value: 100 },
];

// #endregion
const Slice = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
  isActive,
}: PieSectorShapeProps) => {
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

  const { name } = payload;

  if (isActive) {
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          ${value}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={(outerRadius ?? 0) + 6}
          outerRadius={(outerRadius ?? 0) + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >
          {name}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`${((percent ?? 1) * 100).toFixed(2)}%`}
        </text>
      </g>
    );
  }
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  );
};
