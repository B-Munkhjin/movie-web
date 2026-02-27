"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Button } from "@/Components/ui/button";
import { Imdb } from "@/Components/imdb";
import { Play } from "lucide-react";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const BigPosterCarousel = ({ movies }: { movies: Movie[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  if (!movies.length) return null;

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="flex flex-col sm:block relative"
          >
            <div className="relative w-full h-[45vh] sm:h-[60vh] lg:h-[80vh]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="object-cover sm:hidden  w-full h-[45vh] "
              />
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover hidden sm:visible"
              />
              <div className="hidden sm:flex absolute inset-0  from-black via-black/20 to-transparent items-center pb-12 pl-16">
                <div className="max-w-2xl text-white space-y-3">
                  <p className="text-sm uppercase tracking-widest opacity-80">
                    Now playing
                  </p>
                  <h2 className="text-4xl lg:text-6xl font-bold">
                    {movie.title}
                  </h2>
                  <div className="flex items-center gap-3">
                    <img src="/star.png" className="size-6" alt="rating" />
                    <Imdb
                      review={movie.vote_average ?? 0}
                      className="text-xl font-bold flex"
                      color="lg:text-[#FFFFFF] "
                    />
                  </div>
                  <p className="text-lg line-clamp-2 opacity-90">
                    {movie.overview}
                  </p>
                  <Button className="bg-white text-black hover:bg-gray-200 px-8 h-12">
                    <Play className="mr-2 size-5 fill-black" /> Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden flex-col gap-4 p-6 bg-white dark:bg-[#09090B]">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-tighter">
                    Now Playing
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {movie.title}
                  </h2>
                </div>
                <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 px-2 py-1 rounded">
                  <img src="/star.png" className="size-4" alt="star" />
                  <Imdb
                    review={movie.vote_average ?? 0}
                    className="text-sm font-bold flex"
                    color="lg:text-[#FFFFFF]"
                  />
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                {movie.overview}
              </p>

              <Button className="w-full flex gap-2 bg-[#18181B] text-white dark:bg-[#F4F4F5] dark:text-[#18181B] h-12">
                <Play className="size-4 fill-current" />
                <span className="font-semibold text-base">Watch Trailer</span>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="left-6 scale-125" />
        <CarouselNext className="right-6 scale-125" />
      </div>
    </Carousel>
  );
};
