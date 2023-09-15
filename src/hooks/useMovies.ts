import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import Movie from "../entities/Movie";
import { FetchResponse } from "../services/api-client";
import movieService from "../services/movieService";
import useMovieQueryStore from "../store/MovieStore";
import { CACHE_KEY_MOVIES } from "./constants";


const useMovies = () => {
  const movieQuery = useMovieQueryStore(s => s.movieQuery);

  // // Fetch movie data without details first
  // const { data: movieDataWithoutDetails, error, isLoading } = useQuery<FetchResponse<Movie>>({
  //   queryKey: [CACHE_KEY_MOVIES, movieQuery],
  //   queryFn: () => movieService.getAll({
  //     params: {
  //       // some params
  //     }
  //   }),
  //   staleTime: ms('24h'), // 24h
  //   keepPreviousData: true,
  // });
  
  // // If there's an error or data is still loading, return it immediately
  // if (isLoading || error) {
  //   return { data: movieDataWithoutDetails, error, isLoading };
  // }

  // // Fetch movie details concurrently using the useMovie hook
  // const movieIds = movieDataWithoutDetails?.results.map(movie => movie.id) || [];
  // const movieDetailPromises = movieIds.map(id => useMovie(id));

  // // Use Promise.all to wait for all movie details to be fetched
  // const movieDetails = await Promise.all(movieDetailPromises);

  // // Combine the movie data with their respective details
  // const moviesWithData = movieDataWithoutDetails.results.map((movie, index) => ({
  //   ...movie,
  //   details: movieDetails[index]?.data || null, // Add the details property
  // }));

  // // Return the final result
  // return {
  //   data: {
  //     ...movieDataWithoutDetails,
  //     results: moviesWithData,
  //   },
  //   error,
  //   isLoading: false,
  // };

  
  return useQuery<FetchResponse<Movie>>({
    queryKey: [CACHE_KEY_MOVIES, movieQuery],
    queryFn: () => movieService.getAll({
      params: {
        // some params
        // language: movieQuery.language,
        // page: movieQuery.page,
        language: "en-US",
        page: 1,
      }
    }),
    staleTime: ms('24h'), // 24h
    keepPreviousData: true,
  });
}

export default useMovies
