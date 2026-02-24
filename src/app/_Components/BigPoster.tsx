import { getUpComingMovies } from "@/lib/api";
import { BigPosterCarousel } from "../_Components/BigPosterCarousel";

export const BigPoster = async () => {
  const dataComing = await getUpComingMovies();

  const movies = Array.isArray(dataComing?.results)
    ? dataComing.results.slice(0, 3)
    : [];

  return <BigPosterCarousel movies={movies} />;
};
