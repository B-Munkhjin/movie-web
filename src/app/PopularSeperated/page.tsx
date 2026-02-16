"use client";
import { useState, useEffect } from "react";
import { Popular } from "../_components/Popular";
import { getPopularMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination";
import { Movie, Response } from "@/lib/types";

export default function SeperatedPopular() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [response, setResponse] = useState<Response | null>(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies(page);
      const { results } = data;

      setMovies(results);
      setResponse(data);
    };
    fetchMovies();
  }, [page]);
  const changePageNumber = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <div className="flex flex-col gap-20 dark:bg-[#09090B]">
      <Popular className="hidden" />
      <Pagination className="px-15">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>

          {response &&
            Array.from({ length: response.total_pages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <PaginationItem
                  key={pageNumber}
                  onClick={() => changePageNumber(pageNumber)}
                >
                  <PaginationLink href="#" isActive={pageNumber === page}>
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
