import { Imdb } from "./imdb";

type MovieCardProps = {
  title: string;
  rating: number;
  img: string;
};
export const MovieCard = ({ title, rating, img }: MovieCardProps) => {
  const urlImg = `https://image.tmdb.org/t/p/w500/${img}`;

  return (
    <div className="w-[157.5px]  rounded-lg bg-[#F4F4F5] sm:w-44 xl:w-[210] dark:bg-[#27272A] pb-3">
      <img
        src={urlImg}
        className="w-full rounded-t-lg lg:h-66 sm:h-63 md:h-69 xl:h-78"
      />
      <div className="w-full p-2 ">
        <div className="flex w-[141.1p] h-4 gap-1 items-center ">
          <img src="/star.png" className="lg:size-3.5 dark:hidden" />
          <img src="/darkStar.png" className="lg:size-3.5 dark:visible" />
          <Imdb
            review={rating}
            className="flex text-xs sm:text-sm lg:text-sm xl:text-base "
            color="text-[#09090B] dark:text-[#FAFAFA]"
          />
        </div>
        <div className="w-[141.1p] h-fit ">
          <h2 className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
