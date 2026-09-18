export const Breakpoint = () => {
  return (
    <div className="text-center">
      <div className="bg-teal-500">xs</div>
      <div className="hidden bg-cyan-500 sm:block">sm</div>
      <div className="hidden bg-sky-500 md:block">md</div>
      <div className="hidden bg-blue-500 lg:block">lg</div>
      <div className="hidden bg-indigo-500 xl:block">xl</div>
      <div className="hidden bg-violet-500 2xl:block">2xl</div>
    </div>
  );
};
