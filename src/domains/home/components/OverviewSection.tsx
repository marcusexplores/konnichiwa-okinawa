import { Video } from '@/src/common/components/Video';
import { TripStatCard } from './TripStatCard';

export const OverviewSection = () => {
  return (
    <section className="mx-auto h-svh max-w-4xl px-4 py-10 md:px-8 md:py-16">
      <div className="flex h-full flex-col items-center justify-center gap-12 md:gap-16">
        <div className="grid w-full grid-cols-2 content-center justify-center gap-4">
          <TripStatCard title="12 Days" description="16 Nov - 27 Nov" />
          <TripStatCard title="2 Prefectures" description="Osaka -> Okinawa " />
          <TripStatCard title="3 Tours" description="Klook" />
          <TripStatCard title="8 Sports" description="Many Adventures" />
        </div>
        <Video src="map.mp4" />
      </div>
    </section>
  );
};
