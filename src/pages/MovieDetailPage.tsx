import { Box, Grid, GridItem, Show, Spinner, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import MovieTrailer from "../components/MovieTrailer";
import useMovie from "../hooks/useMovie";

const MovieDetailPage = () => {
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
    <Box paddingTop={{ base: "150px", lg: "80px" }}>
      {!error && (
        <Grid
          templateAreas={{
            base: `"main"`,
            lg: "sidebar main",
          }}
          templateColumns={{
            base: `"1fr"`,
            long: "250px 1fr",
          }}
        >
          <Show above="lg">
            <GridItem area="sidebar"></GridItem>
          </Show>

          <GridItem area="main">
            <Box>
              <MovieTrailer movieId={movie.id} />
            </Box>

            <Box pt={5}>
              <MovieInfo movie={movie} />
            </Box>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
};

export default MovieDetailPage;
