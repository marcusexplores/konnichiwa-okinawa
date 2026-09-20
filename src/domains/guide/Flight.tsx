'use client';

import { PageSection } from '@/src/common/components/page';
import { FlightInformation } from './components/FlightInformation';

export const Flight = () => {
  return (
    <div>
      <PageSection>
        <FlightInformation />
      </PageSection>
    </div>
  );
};
