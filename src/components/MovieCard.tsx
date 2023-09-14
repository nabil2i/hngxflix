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
import movieimage from "../../hidden/nun.jpg";
import imdb from "../assets/imdb.png";
import rotten from "../assets/rotten-tomato.png";
import LikeIcon from "./LikeIcon";

export const MovieCard = () => {
  return (
    <Card data-testid="movie-card" shadow="none">
      <Image src={movieimage} data-testid="movie-poster" />
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
          Nun
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
