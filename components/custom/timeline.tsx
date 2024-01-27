export const TimeLineBorder = () => (
  <div className="border-2 border-rose-900 dark:border-white mx-auto h-full"></div>
);

export const TimeLine = ({
  date,
  months,
}: {
  date: string;
  months: string | undefined;
}) => (
  <div className="hidden md:flex flex-col md:min-w-32">
    <div className="text-xs mx-auto mb-2 rounded-md bg-gray-200 dark:bg-rose-800 p-2 flex flex-col text-center">
      <span>{date}</span>
      {months && <span>{months}</span>}
    </div>
    <TimeLineBorder />
  </div>
);
