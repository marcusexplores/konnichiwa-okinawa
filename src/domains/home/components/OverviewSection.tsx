import { Video } from "@/src/common/components/Video";
import { TripStatCard } from "./TripStatCard";

export const OverviewSection = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-10">
      <div className="h-dvh flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="grid grid-cols-2 justify-center content-center gap-4">
            <TripStatCard title="12 Days" description="16 Nov - 27 Nov" />
            <TripStatCard title="2 Prefectures" description="Osaka -> Okinawa " />
            <TripStatCard title="3 Tours" description="Klook" />
            <TripStatCard title="8 Sports" description="Many Adventures" />
          </div>
          <Video src="map.mp4" />
        </div>
      </div>
    </section>
  )
}