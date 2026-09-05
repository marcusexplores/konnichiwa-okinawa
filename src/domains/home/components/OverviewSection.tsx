import { Video } from '@/src/common/components/Video';
import { TripStatCard } from './TripStatCard';

export const OverviewSection = () => {
  return (
    <section className="mx-auto max-w-4xl space-y-10">
      <div className="flex h-dvh items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="grid grid-cols-2 content-center justify-center gap-4">
            <TripStatCard title="12 Days" description="16 Nov - 27 Nov" />
            <TripStatCard
              title="2 Prefectures"
              description="Osaka -> Okinawa "
            />
            <TripStatCard title="3 Tours" description="Klook" />
            <TripStatCard title="8 Sports" description="Many Adventures" />
          </div>
          <Video src="map.mp4" />
        </div>
      </div>
    </section>
  );
};
