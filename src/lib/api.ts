import { Response, Details } from "./types";

const token = process.env.token;
const urlPop =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getPopularMovies = async (page: number): Promise<Response> => {
  const response = await fetch(urlPop, options);
  const data = await response.json();

  return data;
};

const urlUpComing =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const getUpComingMovies = async (): Promise<Response> => {
  const responseComing = await fetch(urlUpComing, options);
  const dataComing = await responseComing.json();
  return dataComing;
};

const urlTopRated =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const getTopRated = async (): Promise<Response> => {
  const responseTopRated = await fetch(urlTopRated, options);
  const dataTopRated = await responseTopRated.json();
  return dataTopRated;
};

export const getMovieById = async (movieId: string) => {
  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-USa`,
    options,
  );
  const movie = await movieDetails.json();
  return movie;
};
