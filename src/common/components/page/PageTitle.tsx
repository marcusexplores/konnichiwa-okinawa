interface PageTitleProps {
  value: string;
}

export const PageTitle = ({ value }: PageTitleProps) => {
  return (
    <div className="flex w-full justify-center">
      <h1>{value}</h1>
    </div>
  );
};
