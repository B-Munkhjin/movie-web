import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Imdb } from "@/Components/imdb";
import { Play } from "lucide-react";
import { getMovieById } from "@/lib/api";

type DetailsPageProps = {
  movieId: string;
};
export const MovieDetails = async ({ movieId }: DetailsPageProps) => {
  const movie = await getMovieById(movieId);
  console.log(movie);
  const urlImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div>
      <div className="flex gap-4 flex-col relative top-8">
        <div className="w-full h-13 flex items-center justify-between px-5 lg:flex-col ">
          <div className="w-[75%] flex flex-col text-[#09090B] lg:text-[#FFFFFF] lg:w-full">
            <div className="text-2xl font-semibold dark:text-white">
              {movie.title}
            </div>
            <div className="text-sm lg:text-base 2xl:text-xl dark:text-white">
              2024.11.26 · PG · 2h 40m
            </div>
          </div>
          <div className="w-[25%] flex justify-center items-center gap-1 lg:w-full lg:justify-start ">
            <img src={"/star.png"} className="size-5.5" />
            <div className="flex-col">
              <Imdb
                review={movie.vote_average}
                className="flex text-lg lg:text-[#FFFFFF]"
                color="lg:text-[#FFFFFF]"
              />
              <p className="text-[#71717A] text-xs">{movie.vote_count}</p>
            </div>
          </div>
        </div>
        <div className="relative top-4 ">
          <img src={urlImg} className="w-full h-52.75" />
          <div className="flex justify-between items-center w-43.5 h-10 absolute bottom-5 left-3">
            <div className="bg-[#FFFFFF] size-10 rounded-full flex justify-center items-center">
              <Play className="size-4 text-[#000000]" />
            </div>
            <p className="text-base text-[#FFFFFF]">Play trailer </p>
            <p className="text-sm text-[#FFFFFF]">2:35</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative top-17">
        <div className="flex justify-between p-5 w-full h-91">
          <div className="w-34">
            <img src={urlImg} className="w-25 h-37" />
          </div>
          <div className="flex justify-between flex-col gap-5">
            <div className="flex justify-between w-50.25 h-21 gap-3"></div>
            <p className="text-base text-[#09090B] w-50.25">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[#09090B] h-51 px-5 gap-5">
          <div className="flex gap-13.25 border-b-2 border-[#E4E4E7] h-10">
            <h4 className="w-16 h-7 text-base font-bold">Director</h4>
            <p className="text-base ">{movie.Director}</p>
          </div>
          <div className="flex gap-13.25 border-b-2 border-[#E4E4E7] h-10 items-center">
            <h4 className="w-16 h-7 text-base font-bold">Writers</h4>
            <p className="text-base ">dddddddd</p>
          </div>
          <div className="flex gap-13.25 border-b-2 border-[#E4E4E7] h-10">
            <h4 className="w-16 h-7 text-base font-bold">Stars</h4>
            <p className="text-base ">dddddddd</p>
          </div>
        </div>
      </div>
      <div className="relative top-10 px-5">
        <div className="flex justify-between w-full h-9 text-[#09090B] sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30">
          <h4 className=" text-2xl font-semibold xl:text-[26px] dark:text-white">
            More like this
          </h4>
          <div className="visible">
            <Link href="" className="flex justify-center items-center gap-2 ">
              <p className="text-base md:text-[17px] xl:text-xl dark:text-white">
                See more
              </p>
              <ArrowRight className="size-4 dark:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
