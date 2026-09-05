interface TripStatCardProps {
  title: string;
  description: string;
}

export const TripStatCard = ({ title, description }: TripStatCardProps) => {
  return (
    <div className="bg-surface flex flex-col items-center gap-2 rounded-2xl border border-gray-100 p-5 shadow-sm md:min-w-50 md:gap-4 lg:p-15">
      <div className="text-on-surface text-lg font-bold md:text-3xl lg:text-4xl">
        {title}
      </div>
      <div className="text-on-muted text-sm md:text-xl">{description}</div>
    </div>
  );
};
