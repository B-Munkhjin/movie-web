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
  const urlImg2 = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  const formatRunTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const minute = minutes % 60;
    return `${hours}h ${minute}m`;
  };
  return (
    <div className="flex flex-col justify-center md:p-5 lg:px-20 xl:px-25 2xl:px-40 ">
      <div className="flex gap-4 flex-col relative top-8">
        <div className="w-full h-full flex items-center justify-between px-5 lg:px-0 ">
          <div className="w-[75%] flex flex-col text-[#09090B] ">
            <div className="text-2xl font-semibold dark:text-white md:font-extrabold lg:text-4xl">
              {movie.title}
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl dark:text-white">
              {movie.release_date} &middot; {movie.adult ? "R" : "PG"} &middot;{" "}
              {formatRunTime(movie.runtime)}
              {/* 2024.11.26 · PG · 2h 40m */}
            </div>
          </div>
          <div className="flex  items-center gap-1 flex-col">
            <h5 className="hidden md:flex pr-13 text-[#09090B] font-medium text-xs">
              Rating
            </h5>
            <div className="flex visible items-center gap-1 md:pr-3">
              <img
                src={"/star.png"}
                className="size-5.5 md:size-6.5 lg:size-7"
              />
              <div className="flex-col">
                <Imdb
                  review={movie.vote_average}
                  className="flex text-lg md:font-semibold"
                  color=""
                />
                <p className="text-[#71717A] text-xs">{movie.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-4 ">
          <div className="flex gap-8 lg:gap-12 xl:justify-between ">
            <img
              src={urlImg}
              className="hidden md:flex md:h-95 lg:h-107 xl:h-145 2xl:h-155 "
            />
            <div className="flex justify-center relative">
              <img
                src={urlImg2}
                className="w-full md:h-95 lg:h-107 xl:h-145 2xl:h-155"
              />
              <div className="flex justify-between items-center w-43.5 h-10 absolute bottom-7 left-7">
                <div className="bg-[#FFFFFF] size-10 rounded-full flex justify-center items-center">
                  <Play className="size-4 text-[#000000]" />
                </div>
                <p className="text-base text-[#FFFFFF]">Play trailer </p>
                <p className="text-sm text-[#FFFFFF]">2:35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative top-17">
        <div className="flex justify-between px-5 py-5 md:px-0 w-full ">
          <div className="w-34 md:hidden">
            <img src={urlImg} className=" flex w-29 h-45 sm:w-90 sm:h-60 " />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between w-50.25 gap-3 md:w-full"></div>
            <p className="text-base text-[#09090B] w-50.25 md:w-full dark:text-white">
              {movie.overview}
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[#09090B] h-51 px-5 md:px-0 gap-5 dark:text-white">
          <div className="flex gap-13.25 border-b-2 border-[#E4E4E7] h-10">
            <h4 className="w-16 h-7 text-base font-bold">Director</h4>
            <p className="text-base ">director ner</p>
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
      <div className="relative top-10 px-5 lg:px-0">
        <div className="flex justify-between w-full h-9 text-[#09090B] ">
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
