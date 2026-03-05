import { getPopularMoviesByPage } from "@/lib/api";
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

export default async function SeperatedPopular({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const data = await getPopularMoviesByPage(currentPage);
  const totalPages = data?.total_pages ?? 0;
  const groupStart = Math.floor((currentPage - 1) / 3) * 3 + 1;

  return (
    <div className="flex flex-col bg-white dark:bg-[#09090B]">
      <div className="w-full text-[#09090B] sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30">
        <h4 className="text-2xl font-semibold xl:text-[26px] dark:text-white">
          Popular
        </h4>
      </div>

      <div className="relative sm:px-5 md:px-2 lg:px-23 xl:px-20 2xl:px-30 grid px-5 grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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

      <Pagination className="mt-8 mb-8">
        <PaginationContent>
          {groupStart > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`?page=${groupStart - 1}`} />
            </PaginationItem>
          )}

          {groupStart <= totalPages && (
            <PaginationItem>
              <PaginationLink
                href={`?page=${groupStart}`}
                isActive={currentPage === groupStart}
              >
                {groupStart}
              </PaginationLink>
            </PaginationItem>
          )}
          {groupStart + 1 <= totalPages && (
            <PaginationItem>
              <PaginationLink
                href={`?page=${groupStart + 1}`}
                isActive={currentPage === groupStart + 1}
              >
                {groupStart + 1}
              </PaginationLink>
            </PaginationItem>
          )}
          {groupStart + 2 <= totalPages && (
            <PaginationItem>
              <PaginationLink
                href={`?page=${groupStart + 2}`}
                isActive={currentPage === groupStart + 2}
              >
                {groupStart + 2}
              </PaginationLink>
            </PaginationItem>
          )}

          {groupStart + 3 <= totalPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {groupStart + 3 <= totalPages && (
            <PaginationItem>
              <PaginationNext href={`?page=${groupStart + 3}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
