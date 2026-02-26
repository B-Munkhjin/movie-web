"use client";

import { ChevronDown, Search, Film } from "lucide-react";
import { ModeToggle } from "./toggleMode";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/Components/ui/input-group";
import { Genre } from "./genreCom";
import { GenreType, HeaderProps } from "@/lib/types";

export const Header = ({ genres }: HeaderProps) => {
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
      <div className="hidden lg:flex">
        <div className="flex gap-3 h-fit">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-28 flex px-4 py-2 gap-2 items-center rounded-md border border-[#E4E4E7] justify-center">
                <ChevronDown className="size-4" />
                <span className="font-medium text-sm">Genre</span>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-144.25 h-fit absolute right-[-520] rounded-lg border p-5 ">
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                  <h1 className="text-xl font-semibold">Genres</h1>
                  <p className="text-sm relative top-1">
                    See lists of movies by genre
                  </p>
                  <div className="w-full h-px relative top-4 bg-gray-400"></div>
                  <div className="relative top-6">
                    <div className="flex flex-wrap gap-2 gap-x-2 gap-y-4 pb-4 pt-2">
                      {genres.map((genre) => (
                        <Link key={genre.id} href={`?genre=${genre.id}`}>
                          <Genre genre={genre} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroup className="h-9 border rounded-md flex items-center px-3 w-96">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search className="text-sm text-[#71717A]" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="lg:hidden size-9 border rounded-md flex justify-center items-center">
          <Search className="size-4" />
        </button>

        <ModeToggle />
      </div>
    </div>
  );
};
