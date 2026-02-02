import { Film } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Moon } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full h-14.75 flex justify-between items-center px-5 md:px-20 md:py-[11.5px]">
      <div className="w-23 h-5 flex gap-2 ">
        <Film className="s-5 text-indigo-700" />
        <h1 className="w-16 h-5 italic text-base text-indigo-700 font-bold">
          Movie Z
        </h1>
      </div>
      {/* <div className="md:flex md:w-122 md:h-9  md:flex-row md:gap-3 ">
        <button className="w-24.25 flex px-4 py-2 gap-2 items-center rounded-md border border-[#E4E4E7] justify-center ">
          <div className="size-4 flex justify-center items-center">
            <ChevronDown className="w-2 h-1 text-[#18181B]" />
          </div>
          <h1 className="font-medium text-sm">Genre</h1>
        </button>
        <div className="w-94.75 border border-[#E4E4E7] rounded-md flex flex-row gap-2.5 items-center justify-center">
          <div className="size-4">
            <Search className="size-3 text-[#71717A]" />
            <h1 className="text-sm text-[#71717A] ">Search..</h1>
          </div>
        </div>
      </div> */}
      <div className="w-21 h-9 gap-3 flex">
        <button className="size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center">
          <Search className="size-3 text-[#18181B]" />
        </button>
        <button className="size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center">
          <Moon className="size-3 text-[#18181B]" />
        </button>
      </div>
    </div>
  );
};
