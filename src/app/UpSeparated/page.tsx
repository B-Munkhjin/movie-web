import { UpComing } from "../_components/UpComing";
import { getUpComingMoviesByPage, getUpComingMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination";
import { MovieCard } from "@/Components/MovieCard";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SeperatedUpcoming({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const data = await getUpComingMoviesByPage(Number(page) ?? 1);
  return (
    <div className="flex flex-col bg-white dark:bg-[#09090B]">
      <div className=" w-full h-1 relative text-[#09090B] sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30 ">
        <h4 className=" text-2xl font-semibold xl:text-[26px] dark:text-white">
          Upcoming
        </h4>
      </div>
      <div className=" relative sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30  grid px-5 grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {(Array.isArray(data?.results) ? data.results : [])
          .slice(0, 10)
          .map((movie: any) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              img={movie.poster_path}
            />
          ))}
      </div>
      <Pagination className="px-15 pt-">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${Number(page) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`?page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
