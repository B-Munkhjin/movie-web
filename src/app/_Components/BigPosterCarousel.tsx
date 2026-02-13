"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/Components/ui/card";

type Movie = {
  backdrop_path: string;
  id: string | number;
  title: string;
};

type BigPosterCarouselProps = {
  movies: Movie[];
};

export const BigPosterCarousel = ({ movies }: BigPosterCarouselProps) => {
  const urlImg =
    "https://image.tmdb.org/t/p/movie/original/popular?language=en-US&page=1";
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="">
              <Card>
                <CardContent className="">
                  <img
                    src={`${urlImg}${movie.backdrop_path}`}
                    // alt={movie.title}
                    className="w-full h-125 object-cover rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="relative" />
      <CarouselNext className="relative" />
    </Carousel>
  );
};
