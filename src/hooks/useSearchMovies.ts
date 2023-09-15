import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import Movie from "../entities/Movie";
import APIClient, { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../store/MovieStore";
import { CACHE_KEY_MOVIES } from "./constants";

const apiClient = new APIClient<Movie>('/search/movie')

const useSearchMovies = () => {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);

  return useQuery<FetchResponse<Movie>>({
    queryKey: [CACHE_KEY_MOVIES, searchText],
    queryFn: () => apiClient.getAll({
      params: {
        // some params
        query: searchText,
      }
    }),
    staleTime: ms('24h'), // 24h
    keepPreviousData: true,
  });
}

export default useSearchMovies
