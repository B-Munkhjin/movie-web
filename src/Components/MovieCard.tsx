import { Imdb } from "./imdb";

type MovieCardProps = {
  title: string;
  rating: number;
  img: string;
};
export const MovieCard = ({ title, rating, img }: MovieCardProps) => {
  const urlImg = `https://image.tmdb.org/t/p/w500/${img}`;

  return (
    <div className="w-[157.5px] h-[309.1px] rounded-lg bg-[#F4F4F5] sm:w-44 sm:h-82 md:w-50 md:h-89 lg:w-49 lg:h-87 xl:h-98.5 xl:w-[210] dark:bg-[#27272A]">
      <img
        src={urlImg}
        className="w-full h-[233.1px] rounded-t-lg lg:h-66 sm:h-63 md:h-69 xl:h-78"
      />
      <div className="w-full h-19 p-2 ">
        <div className="flex w-[141.1p] h-4 gap-1 items-center ">
          <img src="/star.png" className="lg:size-3.5 dark:hidden" />
          <img src="/darkStar.png" className="lg:size-3.5 dark:visible" />
          <Imdb
            review={rating}
            className="flex text-xs sm:text-sm lg:text-sm xl:text-base "
            color="text-[#09090B] dark:text-[#FAFAFA]"
          />
        </div>
        <div className="w-[141.1p] h-10 ">
          <h2 className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
