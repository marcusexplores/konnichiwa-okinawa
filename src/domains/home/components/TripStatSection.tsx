import { TripStatCard } from "./TripStatCard"

export const TripStatSection = () => {
  return (
    <section className="h-dvh flex justify-center items-center">
      <div className="grid grid-cols-2 justify-center content-center gap-4">
        <TripStatCard title="12 Days" description="16 Nov - 27 Nov" />
        <TripStatCard title="2 Prefectures" description="Osaka -> Okinawa " />
        <TripStatCard title="3 Tours" description="Klook" />
        <TripStatCard title="8 Sports" description="Many Adventures" />
      </div>
    </section>
  )
}