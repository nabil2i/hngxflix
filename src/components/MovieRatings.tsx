import { Box, HStack, Image, Text } from "@chakra-ui/react";
import imdb from "../assets/imdb.png";
import rotten from "../assets/rotten-tomato.png";
import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
}

const MovieRatings = ({ movie }: Props) => {
  return (
    <HStack paddingTop={2} justifyContent="space-between">
      <Box display="flex" gap={3} alignItems="center" justifyContent="center">
        <Box width="40px">
          <Image src={imdb} />
        </Box>
        <Text whiteSpace="nowrap">{(movie.vote_average * 10).toFixed(1)} / 100</Text>
      </Box>
      <Box display="flex" gap={3} alignItems="center" justifyContent="center">
        <Box width="25px">
          <Image src={rotten} />
        </Box>
        <Text whiteSpace="nowrap">{ratings()}%</Text>
      </Box>
    </HStack>
  );
};

function ratings() {
  const min = 60;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default MovieRatings;
