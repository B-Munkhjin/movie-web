import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

export default function BigPoster() {
  const posters = ["/wicked.jpg", "/moana.jpg", "/glad.png"];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="relative">
        <CarouselContent>
          {posters.map((src, index) => (
            <CarouselItem key={index} className="basis-full">
              <img
                src={src}
                alt={`Poster ${index + 1}`}
                className="w-93.75 h-61.5  rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
