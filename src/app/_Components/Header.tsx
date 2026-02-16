"use client";

import { ChevronDown, Search, Film } from "lucide-react";
import { ModeToggle } from "./toggleMode";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/Components/ui/input-group";

export default function Header() {
  return (
    <div className="w-full h-15 flex justify-between items-center px-5 lg:px-19 lg:py-[11.5px] sm:px-5 mb-8">
      <div className="w-25 h-5 flex gap-2 items-center">
        <Film className="size-5 text-indigo-700 lg:size-6" />
        <Link
          href="/"
          className="italic text-base text-indigo-700 font-bold xl:text-lg"
        >
          Movie Z
        </Link>
      </div>

      <div className="hidden lg:flex md:visible">
        <div className="flex gap-3 h-fit">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-24.25 flex px-4 py-2 gap-2 items-center rounded-md border border-[#E4E4E7] justify-center xl:w-30">
                <div className="size-4 flex justify-center items-center lg:size-5 text-[#18181B] dark:text-white">
                  <ChevronDown />
                </div>
                <span className="font-medium text-sm xl:text-base text-[#18181B] dark:text-white">
                  Genre
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel className=" flex flex-col ">
                  <h1 className="text-2xl font-semibold text-[#09090B] dark:text-[#FAFAFA]">
                    Genres
                  </h1>
                  <p className=" text-base border-b-2 border-[#E4E4E7] h-12">
                    See lists of movies by genre
                  </p>
                  {/* <p className="border-b-2 border-[#E4E4E7] relative top-4 bottom-4"></p> */}
                </DropdownMenuLabel>
                <DropdownMenuItem className="relative top-4"></DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroup className="w-fit h-9 xl:h-10 border border-[#E4E4E7] rounded-md flex gap-2.5 items-center px-3 lg:w-130">
            <InputGroupInput
              // value={searchValue}
              // onChange={onChangeSearchValue}
              placeholder="Search.."
            />
            <InputGroupAddon>
              <Search className="text-sm text-[#71717A] lg:text-base dark:text-white" />
            </InputGroupAddon>
          </InputGroup>
          {/* <div className={`absolute `}> */}
          {/* {loading && <p>...loading</p>} */}
          {/* {!loading && movies.map((movie) => <h1 key={movie.id}></h1>)} */}
          {/* </div> */}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="lg:hidden size-9 border border-[#E4E4E7] rounded-md flex justify-center items-center dark:border-zinc-700">
          <Search className="size-3 text-[#18181B] dark:text-gray-200" />
        </button>

        <ModeToggle />
      </div>
    </div>
  );
}
