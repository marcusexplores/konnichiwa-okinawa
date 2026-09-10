'use client';

import { Donut } from '@/src/common/components/donut';

export const Budget = () => {
  return (
    <div>
      <div>Title section</div>
      <div className="p-4">
        <Donut className="h-180 w-full" />
      </div>
    </div>
  );
};
