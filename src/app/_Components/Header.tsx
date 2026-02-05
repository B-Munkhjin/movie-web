import { Film } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Moon } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-15 flex justify-between items-center px-5 lg:px-19 lg:py-[11.5px] sm:px-5 mb-2">
      <div className="w-25 h-5 flex gap-2 items-center">
        <Film className="size-5 text-indigo-700 lg:size-6" />
        <h1 className="italic text-base text-indigo-700 font-bold xl:text-lg">
          Movie Z
        </h1>
      </div>

      <div className="hidden lg:flex md:visible">
        <div className="flex gap-3 h-9 xl:h-10">
          <button className="w-24.25 flex px-4 py-2 gap-2 items-center rounded-md border border-[#E4E4E7] justify-center xl:w-30">
            <div className="size-4 flex justify-center items-center lg:size-5 text-[#18181B] ">
              <ChevronDown />
            </div>
            <span className="font-medium text-sm xl:text-base">Genre</span>
          </button>

          <div className="w-94.75 border border-[#E4E4E7] rounded-md flex gap-2.5 items-center px-3 lg:w-130">
            <Search className="size-3 text-[#71717A] lg:size-4" />
            <span className="text-sm text-[#71717A] lg:text-base">
              Search..
            </span>
            {/* placeholder ni search.. bn */}
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="lg:hidden size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center">
          <Search className="size-3 text-[#18181B]" />
        </button>

        <button className="size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center lg:size-10 xl:size-11">
          <Moon className="size-3 text-[#18181B] lg:size-4 xl:size-5" />
        </button>
      </div>
    </div>
  );
}
