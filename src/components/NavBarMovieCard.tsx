import { Box, Button, HStack, Heading, Icon, Text } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import MovieRatings from "./MovieRatings";

interface Props {
  movie: Movie;
}

export const NavBarMovieCard = ({ movie }: Props) => {
  // console.log(movie);
  return (
    <Box pl={50} textAlign="left">
      <Link to={"/movies/" + movie.id}>
        <Heading as="h3" fontSize={40} data-testid="movie-title">
          {movie.title}
        </Heading>
      </Link>
      <Box width="70%" paddingTop={4}>
        <MovieRatings movie={movie} />
      </Box>
      <HStack paddingTop={4}>
        {/* <LimitedText>{movie.overview}</LimitedText> */}
        <Text textOverflow="ellipsis" noOfLines={4}>
          {movie.overview}
        </Text>
      </HStack>
      <Box pt={4}>
        <Button bg="red" gap={2}>
          <Icon as={FaPlayCircle} color="gray.300" boxSize={5} />
          <Text>WATCH TRAILER</Text>
        </Button>
      </Box>
    </Box>
  );
};