import { ChevronRight } from "lucide-react";

type GetGenre = {
  genre: string;
};
export const Genre = (props: GetGenre) => {
  const { genre } = props;
  return (
    <div>
      <button className="w-full h-5 flex px-0.5 py-2.5 rounded-full gap-2 text-[#09090B] dark:text-[#FAFAFA] border border-[#E4E4E7]">
        <h1 className="text-xs font-semibold ">{genre}</h1>
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
};
