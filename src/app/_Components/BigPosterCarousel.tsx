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
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Imdb } from "@/Components/imdb";

type Movie = {
  id: number | string;
  backdrop_path: string;
  title: string;
  overview?: string;
  vote_average?: number;
};

type BigPosterCarouselProps = {
  movies: Movie[];
};

export const BigPosterCarousel = ({ movies }: BigPosterCarouselProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="relative w-fit"
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="relative">
            <Card className="w-full h-full">
              <CardContent className="p-0">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-screen h-61.5 lg:h-160 object-cover"
                />
              </CardContent>
            </Card>

            <div className="absolute inset-0 flex flex-col justify-center p-6 lg:p-12 rounded-xl text-white left-7">
              <p className="text-sm lg:text-base">Now playing:</p>
              <h2 className="text-2xl lg:text-4xl font-bold">{movie.title}</h2>
              {movie.vote_average && (
                <div className="flex items-center gap-2 mt-1">
                  <img src="/star.png" className="size-5" />
                  <Imdb
                    review={movie.vote_average}
                    color="text-lg"
                    className="flex items-center"
                  />
                </div>
              )}
              {movie.overview && (
                <p className="mt-2 text-sm lg:text-lg max-w-md">
                  {movie.overview}
                </p>
              )}
              <div className="mt-3 lg:mt-5">
                <Button
                  variant="default"
                  className="dark:bg-white dark:text-black bg-white text-black hover:bg-gray-200 dark:hover:bg-gray-300"
                >
                  Watch Now
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
  );
};
