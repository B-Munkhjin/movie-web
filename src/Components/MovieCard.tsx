import { Imdb } from "./imdb";

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
          <Imdb review={6.9} className="flex text-xs" color="text-[#09090B]" />
        </div>
        <div className="w-[141.1p] h-10">
          <h2>Marty Supreme</h2>
        </div>
      </div>
    </div>
  );
};
