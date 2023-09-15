import { useQuery } from '@tanstack/react-query';
import Trailer from '../entities/Trailer';
import APIClient from '../services/api-client';

const useTrailers = (movieId: number) => {
  const apiClient = new APIClient<Trailer>(
    `/movie/${movieId}/videos`
  );

  return useQuery({
    queryKey: ['trailers', movieId],
    queryFn: apiClient.getAllVideos,
  });
};

export default useTrailers;

// https://api.themoviedb.org/3/movie/${movieId}/videos
