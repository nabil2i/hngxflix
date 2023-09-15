import {
  Badge,
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import tickets from "../assets/tickets.png";
import lists from "../assets/lists.png";
import Movie from "../entities/Movie";
import BulletPoint from "./BulletPoint";

interface Props {
  movie: Movie;
}

const MovieInfo = ({ movie }: Props) => {
  // console.log(movie);

  return (
    <>
      <HStack justifyContent={{ lg: "space-between" }}>
        <HStack gap={2} fontWeight={700}>
          <Text whiteSpace="nowrap" data-testid="movie-title">
            {movie.title}
          </Text>
          <BulletPoint />
          <Text whiteSpace="nowrap" data-testid="movie-release-date">
            {formatDate(movie.release_date)}
          </Text>
          <BulletPoint />
          <Text whiteSpace="nowrap">PG-13</Text>
          <BulletPoint />
          <Text whiteSpace="nowrap" data-testid="movie-runtime">
            {formatTime(movie.runtime)}
          </Text>
          {movie.genres.map((genre) => (
            <Badge
              key={genre.id}
              borderRadius="full"
              px="6px"
              bg="white"
              color="red"
            >
              {genre.name}
            </Badge>
          ))}
        </HStack>

        <HStack alignItems="center" justifyContent="flex-end">
          <FaStar color="yellow" />
          <Text>
            {movie.vote_average.toFixed(1)} | {formatNumber(movie.vote_count)}
          </Text>
        </HStack>
      </HStack>
      {/* {index !== movie.genres.length - 1 && <BulletPoint />} */}
      {/* <Grid
        templateAreas={{
          base: `"section1" "section2"`,
          lg: "section1 section2",
        }}
        templateColumns={{
          base: `"1fr" "1fr"`,
          long: "2fr 1fr",
        }}
      >
        <GridItem area="section1">
          <HStack>
            <Text data-testid="movie-overview">{movie.overview}</Text>
          </HStack>
        </GridItem>

        <GridItem area="section2">
          <Flex flexDirection="column" gap={4} alignItems={{ base: "flex-start", lg: "flex-end"}}>
            <Button bg="red">See Showtimes</Button>
            <Button bg="red">More watch options</Button>
          </Flex>
        </GridItem>
    </Grid> */}

      {/* <HStack mt={4}></HStack> */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2} mt={4}>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <HStack>
            <Text data-testid="movie-overview">{movie.overview}</Text>
          </HStack>
          <HStack mt={4}>
            <Text>Director: </Text> <Text color="red.300">Joe</Text>
          </HStack>
          <HStack mt={4}>
            <Text>Writters: </Text> <Text color="red.300">Hello</Text>
          </HStack>
          <HStack mt={4}>
            <Text>Stars: </Text> <Text color="red.300">Tome</Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Flex
            flexDirection="column"
            gap={5}
            alignItems={{ base: "flex-start", md: "flex-end" }}
          >
            {/* <Button width="full" bg="red">
              
              See Showtimes
            </Button> */}

            <Button width="full" bg="red" gap={2}>
              <Box
                // bg="red"
                // borderRadius="50%"
                // p={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="35px"
                height="35px"
              >
                <Image color="white" src={tickets} />
              </Box>
              <Text>See Showtimes</Text>
            </Button>
            <Button width="full" borderColor="red"
              borderWidth="2px" bg="red.100" gap={2}
              _hover={{
                bg: 'white'
              }}>
              <Box
                // bg="red"
                // borderRadius="50%"
                // p={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="35px"
                height="35px"
              >
                <Box color="black">
                  <Image src={lists} />
                </Box>
              </Box>
              <Text color="black">More watch options</Text>
            </Button>

          </Flex>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

function formatDate(datestring: string) {
  return new Date(datestring).getFullYear();
}

function formatTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}

function formatNumber(number: number) {
  if (number >= 1000) {
    // Divide by 1000 and round to one decimal place
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber + "k";
  } else {
    return number.toString(); // Return the original number if it's less than 1000
  }
}

export default MovieInfo;
