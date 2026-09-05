interface TripStatCardProps {
  title: string;
  description: string;
}

export const TripStatCard = ({ title, description }: TripStatCardProps) => {
  return (
    <div className="bg-surface flex flex-col items-center rounded-2xl border border-gray-100 p-5 shadow-sm md:min-w-50 lg:p-15">
      <div className="text-on-surface text-xl font-bold md:text-2xl">
        {title}
      </div>
      <div className="text-on-muted text-sm">{description}</div>
    </div>
  );
};
