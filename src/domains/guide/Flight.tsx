'use client';

import { PageSection } from '@/src/common/components/page';
import { FlightInformation } from './components/FlightInformation';

export const Flight = () => {
  return (
    <div>
      <PageSection className="max-w-lg 2xl:max-w-md">
        <FlightInformation />
      </PageSection>
    </div>
  );
};
