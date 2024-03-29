import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import useMovieQueryStore from "../store/MovieStore";
import { useEffect } from "react";

const MovieGrid = () => {
  const { data: topRatedMovies, error, isLoading } = useMovies();
  console.log("movies", topRatedMovies);

  // const language = useMovieQueryStore(s => s.movieQuery.language);
  const setLanguage = useMovieQueryStore(s => s.setLanguage);
  // const page = useMovieQueryStore(s => s.movieQuery.page);
  const setPage = useMovieQueryStore(s => s.setPage);

  useEffect(() => {
    setPage(1);
    setLanguage("en-US");
  }, [setLanguage, setPage]);


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
        <Box pt={5}>
          <Box px="27px" display="flex" justifyContent="space-between">
            <Heading as="h2">Featured Movie</Heading>
            <Box
              display="flex"
              gap={1}
              alignItems="center"
              justifyContent="center"
            >
              <Text color="red.300">See more </Text>
              <Icon as={ChevronRightIcon} color="red.300" boxSize={5} />
            </Box>
          </Box>

          <VStack>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
              spacing={6}
              padding="10px"
            >
              {topRatedMovies?.results.slice(0, 10).map((movie) => (
                <MovieCardContainer key={movie.id}>
                  <MovieCard movie={movie} />
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
      </SimpleGrid> */}
    </>
  );
};

export default MovieGrid;
