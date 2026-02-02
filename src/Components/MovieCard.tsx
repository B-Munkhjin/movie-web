export const MovieCard = () => {
  return (
    <div className="w-[157.5px] h-[309.1px] rounded-lg bg-[#F4F4F5] ">
      <img
        src="https://en.wikipedia.org/wiki/Marty_Supreme"
        className="w-[157.5px] h-[233.1px]"
      />
      <div className="w-[157.5px] h-19 p-2">
        <div className="flex w-[141.1p] h-4 gap-4">
          <img src="./star.png" />
          <div className="text-xs flex flex-start">
            <h2 className="text-[#09090B] ">6.9</h2>
            <span className="text-[#71717A]">/10</span>
          </div>
        </div>
        <div className="w-[141.1p] h-10">
          <h2>Marty Supreme</h2>
        </div>
      </div>
    </div>
  );
};
