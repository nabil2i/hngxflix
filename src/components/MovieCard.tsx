import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import imdb from "../assets/imdb.png";
import rotten from "../assets/rotten-tomato.png";
import Movie from "../entities/Movie";
import LikeIcon from "./LikeIcon";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Card data-testid="movie-card" shadow="none">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        data-testid="movie-poster"
      />
      <HStack
        position="absolute"
        top={5}
        p={4}
        width="100%"
        justifyContent="space-between"
        align="center"
      >
        <Tag bg="gray">TV SERIES</Tag>
        <LikeIcon />
      </HStack>
      <CardBody>
        <Heading
          as="h4"
          color="gray"
          fontSize={15}
          data-testid="movie-release-date"
        >
          USA, 2016 - Current
        </Heading>
        <Heading paddingTop={3} as="h3" fontSize={30} data-testid="movie-title">
          {movie.title}
        </Heading>
        <HStack paddingTop={2} justifyContent="space-between">
          <Box
            display="flex"
            gap={3}
            alignItems="center"
            justifyContent="center"
          >
            <Box width="40px">
              <Image src={imdb} />
            </Box>
            <Text>86.0 / 100</Text>
          </Box>
          <Box
            display="flex"
            gap={3}
            alignItems="center"
            justifyContent="center"
          >
            <Box width="25px">
              <Image src={rotten} />
            </Box>
            <Text>97%</Text>
          </Box>
        </HStack>
        <HStack paddingTop={2}>
          <Text color="gray">Action, Adventure, Horror</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};
