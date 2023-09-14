import { SimpleGrid } from "@chakra-ui/react";
import MovieCardContainer from "./MovieCardContainer";
import { MovieCard } from "./MovieCard";

const MovieGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      <MovieCardContainer>
        <MovieCard/>
      </MovieCardContainer>
      
    </SimpleGrid>
  );
};

export default MovieGrid;
