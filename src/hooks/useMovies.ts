import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import movieService from "../services/movieService";
import useMovieQueryStore from "../store/MovieStore";
import { CACHE_KEY_MOVIES } from "./constants";
import { FetchResponse } from "../services/api-client";
import Movie from "../entities/Movie";


const useMovies = () => {
  const movieQuery = useMovieQueryStore(s => s.movieQuery);

  return useQuery<FetchResponse<Movie>>({
    queryKey: [CACHE_KEY_MOVIES, movieQuery],
    queryFn: () => movieService.getAll({
      params: {
        // some params
      }
    }),
    staleTime: ms('24h'), // 24h
    keepPreviousData: true,
  });
}

export default useMovies
