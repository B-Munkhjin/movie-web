import { MovieCard } from "@/Components/MovieCard";
import { ArrowRight } from "lucide-react";
export const UpComing = () => {
  return (
    <div className="flex flex-col px-5 relative top-8 gap-8 w-full ">
      <div className="flex justify-between w-full h-9 text-[#09090B]">
        <h4 className=" text-2xl font-semibold">Upcoming</h4>
        <button className="flex justify-center items-center gap-2 bg-[#FFFFFF] rounded-md">
          <p className="text-sm">See more</p>
          <ArrowRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-flow-col grid-rows-5 justify-between">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
