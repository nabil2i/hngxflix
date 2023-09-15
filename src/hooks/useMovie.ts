
import { useQuery } from "@tanstack/react-query";
import Movie from "../entities/Movie";
import APIClient from "../services/api-client";
import { CACHE_KEY_MOVIES } from "./constants";

const apiClient = new APIClient<Movie>('/movie/');

const useMovie = (id: number | string) =>
  useQuery({
    queryKey: [CACHE_KEY_MOVIES, id],
    queryFn: () => apiClient.get(id),
  })

export default useMovie
