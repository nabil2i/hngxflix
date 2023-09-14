import { Box, Heading, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();
  // console.log(data);

  if (isLoading)
    return (
      <VStack marginTop={2}>
        <Spinner />
      </VStack>
    );

  return (
    <>
      {error && (
        <VStack marginTop={2}>
          <Text> We encountered a problem. Please retry later.</Text>
        </VStack>
      )}

      {!error && (
        <Box>
          <Heading as="h2">Movies</Heading>
          <VStack>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
              spacing={6}
              padding="10px"
            >
            {data?.results.map((movie) => (
              <MovieCardContainer key={movie.id}>
                <MovieCard movie={movie}/>
              </MovieCardContainer>
            ))}
            </SimpleGrid>
          </VStack>
        </Box>
      )}
      {/* <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
        <MovieCardContainer>
          <MovieCard />
        </MovieCardContainer>
      </SimpleGrid> */}
    </>
  );
};

export default MovieGrid;
