import { Film } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Moon } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-15 flex justify-between items-center px-5 lg:px-19 lg:py-[11.5px] sm:px-5">
      <div className="w-23 h-5 flex gap-2">
        <Film className="size-5 text-indigo-700" />
        <h1 className="italic text-base text-indigo-700 font-bold">Movie Z</h1>
      </div>

      <div className="hidden lg:flex md:visible">
        <div className="flex gap-3 h-9">
          <button className="w-24.25 flex px-4 py-2 gap-2 items-center rounded-md border border-[#E4E4E7] justify-center ">
            <div className="size-4 flex justify-center items-center">
              <ChevronDown className="w-4 h-4 text-[#18181B]" />
            </div>
            <span className="font-medium text-sm ">Genre</span>
          </button>

          <div className="w-94.75 border border-[#E4E4E7] rounded-md flex gap-2.5 items-center px-3">
            <Search className="size-3 text-[#71717A]" />
            <span className="text-sm text-[#71717A] ">Search..</span>
            {/* placeholder ni search.. bn */}
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="lg:hidden size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center">
          <Search className="size-3 text-[#18181B]" />
        </button>

        <button className="size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center">
          <Moon className="size-3 text-[#18181B]" />
        </button>
      </div>
    </div>
  );
}
