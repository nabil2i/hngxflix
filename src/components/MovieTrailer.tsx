import { Box } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  movieId: number;
}

const MovieTrailer = ({ movieId }: Props) => {
  const { data: videos, error, isLoading } = useTrailers(movieId);
  console.log("videos pages", videos);

  if (isLoading) return null;

  if (error) throw error;

  const first = videos?.results[0];
  // console.log("first", first);
  return first ? (
    <Box borderRadius="lg" overflow="hidden">
      <iframe
        title="Movie Trailer"
        width="100%"
        height="360"
        src={`https://www.youtube.com/embed/${first.key}`}
        allowFullScreen
      ></iframe>
    </Box>
  ) : null;
};

export default MovieTrailer;
