import { ChevronRight } from "lucide-react";
import { getGenre } from "@/lib/api";
import { Genre as GenreType } from "@/lib/types";

type GenreProps = {
  genre: GenreType;
};
export const Genre = ({ genre }: GenreProps) => {
  return (
    <div>
      <button className="w-fit h-5 flex py-0.5 pl-2.5 items-center pr-1 rounded-full gap-2 text-[#09090B] dark:text-[#FAFAFA] border border-[#E4E4E7]">
        <h1 className="text-xs font-semibold ">{genre.name}</h1>
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
};
