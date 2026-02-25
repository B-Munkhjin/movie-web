import { Response } from "./types";
import { options } from "./api";

export const getUpComingMovies = async (page: number): Promise<Response> => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
  const response = await fetch(url, options);
  return response.json();
};
