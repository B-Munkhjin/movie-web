import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Imdb } from "@/Components/imdb";
import { Play } from "lucide-react";

export const oneByOne = () => {
  return (
    <div>
      <div>
        <div className="w-full h-13 flex items-center justify-between px-5 lg:flex-col relative top-8">
          <div className="w-[75%] flex flex-col text-[#09090B] lg:text-[#FFFFFF] lg:w-full">
            <div className="text-2xl font-semibold dark:text-white">Wicked</div>
            <div className="text-sm lg:text-base 2xl:text-xl dark:text-white">
              2024.11.26 · PG · 2h 40m
            </div>
          </div>
          <div className="w-[25%] flex justify-center items-center gap-1 lg:w-full lg:justify-start flex-col">
            <img src={"/star.png"} className="size-5.5" />
            <Imdb
              review={6.9}
              className="flex text-lg lg:text-[#FFFFFF]"
              color="lg:text-[#FFFFFF]"
            />
            <p className="text-[#71717A] text-xs">37k</p>
          </div>
        </div>
      </div>
      <div className="relative top-4 ">
        <img src="./wickedBig.jpg" className="w-full h-52.75" />
        <div className="flex justify-between w-43.5 h-10 relative top-39.75 left-3">
          <div className="bg-[#FFFFFF] rounded-full flex justify-center items-center">
            <Play className="size-4 text-[#000000]" />
          </div>
          <p className="text-base text-[#FFFFFF]">Play trailer </p>
          <p className="text-sm text-[#FFFFFF]">2:35</p>
        </div>
      </div>
      <div className="relative top-8">
        <div className="flex justify-between p-5 w-full h-91">
          <div>
            <img src="./wicked.jpg" className="w-25 h-37" />
          </div>
          <div>
            <div className="flex justify-between"></div>
            <p></p>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div className="flex justify-between w-full h-9 text-[#09090B] sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30">
          <h4 className=" text-2xl font-semibold xl:text-[26px] dark:text-white">
            Popular
          </h4>
          <div className="visible">
            <Link
              href="/PopularSeperated"
              className="flex justify-center items-center gap-2 "
            >
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
