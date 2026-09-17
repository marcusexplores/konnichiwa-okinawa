'use client';

import {
  PageHeader,
  PageSection,
  PageTitle,
} from '@/src/common/components/page';
import { GuideActionContainer, GuideResourceContainer } from './components';

export const Guide = () => {
  return (
    <div>
      <PageHeader>
        <PageTitle value="Guide" />
      </PageHeader>
      <PageSection>
        <GuideActionContainer />
      </PageSection>
      <PageSection>
        <GuideResourceContainer />
      </PageSection>
    </div>
  );
};
