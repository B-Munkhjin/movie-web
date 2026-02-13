import { getUpComingMovies } from "@/lib/api";
import { BigPosterCarousel } from "./BigPosterCarousel";

export const BigPoster = async () => {
  const dataComing = await getUpComingMovies();
  return <BigPosterCarousel movies={dataComing.results.slice(0, 3)} />;
};
