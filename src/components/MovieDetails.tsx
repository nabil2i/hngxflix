import { Box, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import MovieInfo from "./MovieInfo";
import MovieTrailer from "./MovieTrailer";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovie(id!);
  console.log("the movie", movie);

  if (isLoading)
    return (
      <VStack paddingTop={{ base: "150px", lg: "80px" }}>
        <Spinner />
      </VStack>
    );

  if (error || !movie) throw error;

  return (
    <Box
    // paddingTop={{ base: "150px", lg: "80px" }}
    >
      {!error && (
        <SimpleGrid px={5}>
          <Box>
            <MovieTrailer movieId={movie.id} />
          </Box>

          <Box pt={5}>
            <MovieInfo movie={movie} />
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default MovieDetails;
