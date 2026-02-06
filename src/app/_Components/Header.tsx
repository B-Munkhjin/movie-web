"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";

import { useTheme } from "../theme-provider";
import { Sun, Moon, ChevronDown, Search, Film } from "lucide-react";

export default function Header() {
  const { setTheme } = useTheme();
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
        <button className="lg:hidden size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center dark:border-zinc-700">
          <Search className="size-3 text-[#18181B] dark:text-gray-200" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
