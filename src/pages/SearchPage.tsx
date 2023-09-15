import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MovieCard } from "../components/MovieCard";
import MovieCardContainer from "../components/MovieCardContainer";
import useSearchMovies from "../hooks/useSearchMovies";
import useMovieQueryStore from "../store/MovieStore";

const SearchPage = () => {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  const { data, error, isLoading } = useSearchMovies();
  // console.log("searched movies", searchedMovies);

  if (isLoading)
    return (
      <VStack paddingTop={20}>
        <Spinner />
      </VStack>
    );

  {
    error && (
      <VStack paddingTop={20}>
        <Text> We encountered a problem. Please retry later.</Text>
      </VStack>
    );
  }

  return (
    <Grid
      paddingTop={20}
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
        long: "1fr",
      }}
    >
      <GridItem area="main">
        {!error && (
          <Box pt={5}>
            <Box px="27px" display="flex" justifyContent="space-between">
              <Heading as="h2" fontSize={30}>Results for "{searchText}"</Heading>
          </Box>
            
            <VStack>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={6}
                padding="10px"
              >
                {data?.results.slice(0, 10).map((movie) => (
                  <MovieCardContainer key={movie.id}>
                    <MovieCard movie={movie} />
                  </MovieCardContainer>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>
        )}
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
