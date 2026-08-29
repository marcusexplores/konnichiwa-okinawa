import { TripStatCard } from "./TripStatCard"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const TripStatSection = () => {
  return (
    <section className="h-dvh flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="grid grid-cols-2 justify-center content-center gap-4">
          <TripStatCard title="12 Days" description="16 Nov - 27 Nov" />
          <TripStatCard title="2 Prefectures" description="Osaka -> Okinawa " />
          <TripStatCard title="3 Tours" description="Klook" />
          <TripStatCard title="8 Sports" description="Many Adventures" />
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: '100%', height: 'auto' }}
        >
          <source src={`${basePath}/videos/map.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}