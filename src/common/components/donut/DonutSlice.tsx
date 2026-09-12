import { PieSectorShapeProps } from 'recharts';
import { DonutCenterDisplay } from './DonutCenterDisplay';
import { DonutSliceArc } from './DonutSliceArc';
import { DonutSliceCallout } from './DonutSliceCallout';
import { DonutSliceSector } from './DonutSliceSector';
import { DonutSliceConfig } from './types';

const SLICE_COLORS = [
  'text-blue-500',
  'text-emerald-500',
  'text-amber-500',
  'text-rose-500',
  'text-purple-500',
  'text-cyan-500',
];

interface DonutSliceClassNames {
  centerText?: string;
}

interface DonutSliceProps extends PieSectorShapeProps {
  classNames?: DonutSliceClassNames;
}

export const DonutSlice = ({
  index = 0,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  payload,
  percent,
  display,
  isActive,
  classNames,
}: DonutSliceProps) => {
  const sectorFill = SLICE_COLORS[index % SLICE_COLORS.length];

  const { centerText } = classNames || {};
  const { label } = payload as DonutSliceConfig;

  if (isActive) {
    return (
      <g className={sectorFill}>
        <DonutCenterDisplay value={String(display)} className={centerText} />
        <DonutSliceSector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          className="fill-current brightness-110"
        />
        <DonutSliceArc
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          className="fill-current brightness-110"
        />
        <DonutSliceCallout
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          midAngle={midAngle}
          percent={percent}
          label={label}
          className="fill-current brightness-110"
        />
      </g>
    );
  }

  return (
    <g className={sectorFill}>
      <DonutSliceSector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        className="fill-current"
      />
    </g>
  );
};
