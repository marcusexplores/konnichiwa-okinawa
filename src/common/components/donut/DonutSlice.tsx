import { PieSectorShapeProps } from 'recharts';
import { DonutCenterDisplay } from './DonutCenterDisplay';
import { DonutSliceArc } from './DonutSliceArc';
import { DonutSliceCallout } from './DonutSliceCallout';
import { DonutSliceSector } from './DonutSliceSector';
import { DonutSliceConfig } from './types';
import { LABEL_COLORS } from './constants';

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
}: DonutSliceProps) => {
  const sectorFill = LABEL_COLORS[index % LABEL_COLORS.length];

  const { label } = payload as DonutSliceConfig;

  const percentage = `${((percent ?? 1) * 100).toFixed(2)}%`;

  if (isActive) {
    return (
      <g className={sectorFill}>
        <DonutCenterDisplay
          label={label}
          value={String(display)}
          subValue={percentage}
          classNames={{
            label: 'fill-current',
          }}
        />
        <DonutSliceSector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          className="brightness-110"
        />
        <DonutSliceArc
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          className="brightness-110"
        />
        <DonutSliceCallout
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          midAngle={midAngle}
          label={label}
          value={percentage}
          classNames={{
            root: 'hidden lg:block',
            indicatorLine: 'brightness-110',
            indicatorTip: 'brightness-110',
          }}
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
      />
    </g>
  );
};

interface DonutSliceClassNames {
  centerText?: string;
}
