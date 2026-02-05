"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/Components/ui/carousel";
import { Discription } from "./discription";

export default function BigPoster() {
  const posters = ["/wicked.jpg", "/moana.jpg", "/glad.png"];
  const bigPosters = ["/wickedBig.jpg", "/moanaBig.jpg", "/gladBig.png"];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <div className="w-full h-61.5 lg:hidden sm:hidden">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {posters.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
                  className="w-full h-61.5"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden sm:flex sm:w-full sm:h-110 lg:hidden">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {posters.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
                  className="w-full h-110"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden lg:flex lg:w-full lg:h-150 xl:h-198">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {bigPosters.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
                  className="w-full h-150 xl:h-195"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
