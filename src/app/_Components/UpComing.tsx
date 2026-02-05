import { MovieCard } from "@/Components/MovieCard";
import { ArrowRight } from "lucide-react";
export const UpComing = () => {
  return (
    <div className="flex flex-col px-5 relative top-8 gap-8 w-full ">
      <div className="flex justify-between w-full h-9 text-[#09090B] sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30">
        <h4 className=" text-2xl font-semibold xl:text-[26px]">Upcoming</h4>
        <button className="flex justify-center items-center gap-2 bg-[#FFFFFF] rounded-md">
          <p className="text-base md:text-[17px] xl:text-xl">See more</p>
          <ArrowRight className="size-4" />
        </button>
      </div>
      <div className="grid  mx-auto grid-cols-2 place-content-between gap-5 sm:grid-cols-3 sm:gap-11 lg:gap-8 md:grid-cols-3 lg:grid-cols-4 md:gap-8 xl:gap-x-14 xl:grid-cols-5 2xl:gap-x-18">
        {Array.from({ length: 10 }).map((_, i) => (
          <MovieCard key={i} />
        ))}
      </div>
    </div>
  );
};
