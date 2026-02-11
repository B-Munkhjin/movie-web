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

export default function BigPoster() {
  // const posters = ["/wicked.jpg"];
  const bigPosters = ["/wickedBig.jpg"];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // React.useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1);
  //   });
  // }, [api]);

  return (
    <div>
      <div className="w-full lg:hidden sm:hidden">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {bigPosters.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
                  className="w-full "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden sm:flex  lg:hidden">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {bigPosters.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
                  className="w-full "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden lg:flex ">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {bigPosters.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
                  className="w-full "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
