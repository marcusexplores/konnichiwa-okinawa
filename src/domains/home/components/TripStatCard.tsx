interface TripStatCardProps {
  title: string
  description: string
}

export const TripStatCard = ({ title, description }: TripStatCardProps) => {
  return (
    <div className="md:min-w-50 flex flex-col p-5 lg:p-15 items-center bg-surface border border-gray-100 rounded-2xl shadow-sm">
      <div className="text-xl md:text-2xl font-bold text-on-surface">{title}</div>
      <div className="text-sm text-on-muted">{description}</div>
    </div>
  )
}