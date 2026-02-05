import { Imdb } from "./imdb";

export const MovieCard = () => {
  return (
    <div className="w-[157.5px] h-[309.1px] rounded-lg bg-[#F4F4F5] sm:w-44 sm:h-82 md:w-50 md:h-89 lg:w-49 lg:h-87 xl:h-98.5 xl:w-[210]">
      <img
        src="/soloLeveling.jpg"
        className="w-full h-[233.1px] rounded-t-lg lg:h-66 sm:h-63 md:h-69 xl:h-78"
      />
      <div className="w-[157.5px] h-19 p-2">
        <div className="flex w-[141.1p] h-4 gap-1 items-center ">
          <img src="./star.png" className="lg:size-3.5" />
          <Imdb
            review={6.9}
            className="flex text-xs sm:text-sm lg:text-sm xl:text-base"
            color="text-[#09090B]"
          />
        </div>
        <div className="w-[141.1p] h-10">
          <h2 className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
            Solo Leveling
          </h2>
        </div>
      </div>
    </div>
  );
};
