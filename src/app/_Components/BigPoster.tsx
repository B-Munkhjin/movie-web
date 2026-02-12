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
    <div className="w-full ">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {bigPosters.map((src, index) => (
            <CarouselItem key={index}>
              <img src={src} alt={`Poster ${index + 1}`} className="w-full " />
              <Discription className="hidden sm:flex sm:relative flex-col gap-5 p-5 lg:text-[#FFFFFF] lg:left-35 lg:justify-evenly lg:bottom-110" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
