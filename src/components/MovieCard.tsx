import { Box, Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import LikeIcon from "./LikeIcon";
import MovieRatings from "./MovieRatings";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  // console.log(movie);
  return (
    <Card data-testid="movie-card" shadow="none">
      <Link to={"/movies/" + movie.id}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          data-testid="movie-poster"
          />
      </Link>
      <HStack
        position="absolute"
        top={5}
        p={4}
        width="100%"
        // justifyContent="space-between"
        justifyContent="flex-end"
        align="center"
      >
        {/* <Tag bg="gray">TV SERIES</Tag> */}
        <LikeIcon />
      </HStack>
      <CardBody>
        <Box>
          <Text
            as="span"
            color="gray"
            fontSize={15}
          >
            USA,  
          </Text>
          <Text
            as="span"
            color="gray"
            fontSize={15}
            data-testid="movie-release-date"
          >
            {formatDate(movie.release_date)}
          </Text>
        </Box>
        <Link to={"/movies/" + movie.id}>
          <Heading
            paddingTop={3}
            as="h3"
            fontSize={20}
            data-testid="movie-title"
          >
            {movie.title}
          </Heading>
        </Link>

        <MovieRatings movie={movie} />

        <HStack paddingTop={2}>
          <Text color="gray">Action, Adventure, Horror</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

function formatDate(datestring: string) {
  const utcDateString = datestring + 'T12:00:00Z'
  return new Date(utcDateString).getFullYear();
}
