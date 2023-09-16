import { Box, Flex } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movie from "../entities/Movie";
import { NavBarMovieCard } from "./NavBarMovieCard";

interface Props {
  movies: Movie[] | undefined;
}
const MovieCarousel = ({ movies }: Props) => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      
    >
      {movies?.map((movie) => (
        <Box key={movie.id}
          position="relative"
          width="100vw"
          height="100vh"
          overflow="hidden"
        >
          <Box
            backgroundImage={`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}
            backgroundSize="cover"
            backgroundPosition="center"
            // backgroundColor="rgba(0, 0, 0, 0.5)" 
            // width="100vw"
            // height="70vh"
            width="100%"
            height="100%"
            position="absolute"
          >
            {/* Background image only, no content */}
          </Box>

          <Box
            position="absolute"
            width="100%"
            height="100%"
            background="rgba(0, 0, 0, 0.5)" // Adjust the opacity as needed
          />
          <Flex
            position="absolute"
            width="30%"
            height="100%"
            alignItems="center"
            justifyContent="flex-start" 
            paddingRight="20px"
          >
            <NavBarMovieCard movie={movie}/>
          </Flex>
        </Box>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
