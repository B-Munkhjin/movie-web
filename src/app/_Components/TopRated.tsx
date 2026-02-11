import { MovieCard } from "@/Components/MovieCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTopRated } from "@/lib/api";

type SepTop = {
  className: string;
};
export const TopRated = async (props: SepTop) => {
  const dataTopRated = await getTopRated();
  const { className } = props;
  return (
    <div className="flex flex-col px-5 relative top-8 gap-8 w-full ">
      <div className="flex justify-between w-full h-9 text-[#09090B] sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30">
        <h4 className=" text-2xl font-semibold xl:text-[26px] dark:text-white">
          Top Rated
        </h4>
        <div className={className}>
          <Link
            href="/TopRatedSeperated"
            className="flex justify-center items-center gap-2 dark:text-white"
          >
            <p className="text-base md:text-[17px] xl:text-xl">See more</p>
            <ArrowRight className="size-4 dark:text-white" />
          </Link>
        </div>
      </div>
      <div className="grid  mx-auto grid-cols-2 place-content-between gap-5  sm:grid-cols-3 sm:gap-11 lg:gap-8 md:grid-cols-3 lg:grid-cols-4 md:gap-8 xl:gap-x-14 xl:grid-cols-5 2xl:gap-x-18">
        {dataTopRated.results.slice(0, 10).map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MovieCard
              title={movie.title}
              rating={movie.vote_average}
              img={movie.poster_path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
