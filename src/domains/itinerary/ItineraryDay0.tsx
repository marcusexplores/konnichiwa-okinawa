'use client';

import { PageSection } from '@/src/common/components/page';
import { Tipbox } from '@/src/common/components/tipbox';
import { ItineraryDayBanner } from './components/ItineraryDayBanner';
import BackgroundImage from '@/public/images/day-wind-landscape.jpg';

export const ItineraryDay0 = () => {
  return (
    <div>
      <PageSection className="px-0">
        <ItineraryDayBanner
          image={BackgroundImage}
          day="01"
          title="Shuri Castle Park"
          subtitle="首里城公園"
          descriptions={[
            'シンガポールの街を背に',
            '高鳴る胸は雲を抜け',
            '日本の空が出迎えて',
            '未知の冒険いま始まる',
          ]}
        />
      </PageSection>

      <PageSection>
        <div className="flex flex-col">
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col gap-y-4">
          <div>Lorem ipsum</div>
          <div className="mt-4">
            <Tipbox />
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col">
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
        </div>
      </PageSection>
    </div>
  );
};
