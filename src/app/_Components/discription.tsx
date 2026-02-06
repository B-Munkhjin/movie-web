import { Imdb } from "@/Components/imdb";
import { Button } from "@/Components/ui/button";
import { Play } from "lucide-react";

// type DiscriptionProps = {
//   className: string;
// };

export const Discription = () => {
  return (
    <div className="w-full h-66 flex flex-col gap-5 p-5 lg:absolute xl:w-121 xl:h-80 lg:text-[#FFFFFF] lg:top-60 lg:left-35 lg:p-0 lg:justify-evenly 2xl:h-90">
      <div className="w-full h-13 flex items-center lg:flex-col">
        <div className="w-[75%] flex flex-col text-[#09090B] lg:text-[#FFFFFF] lg:w-full">
          <div className="text-sm lg:text-base 2xl:text-xl">Now Playing:</div>
          <div className="text-2xl font-semibold ">Wicked</div>
        </div>
        <div className="w-[25%] flex justify-center items-center gap-1 lg:w-full lg:justify-start ">
          <img src={"/star.png"} className="size-5.5" />
          <Imdb
            review={6.9}
            className="flex text-lg lg:text-[#FFFFFF]"
            color="lg:text-[#FFFFFF]"
          />
        </div>
      </div>
      <div className="text-sm text-[#09090B] lg:text-[#FAFAFA] lg:w-86 xl:text-base 2xl:text-lg relative lg:top-3">
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.
      </div>

      <Button className="px-4 py-2 w-36 h-10 flex gap-2 bg-[#18181B] lg:bg-[#F4F4F5] lg:hover:bg-[#d0cfcf] lg:w-41 lg:h-11">
        <Play className="size-4 text-[#FAFAFA] lg:text-[#18181B]" />
        <h3 className="text-sm font-medium text-[#FAFAFA] lg:text-[#18181B] lg:text-base">
          Watch Trailer
        </h3>
      </Button>
    </div>
  );
};
