import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaTv } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useLocation } from "react-router-dom";
import griplines from "../assets/griplines.png";
import Movie from "../entities/Movie";
import MovieCarousel from "./MovieCarousel";
import SearchInput from "./SearchInput";

interface Props {
  movies: Movie[] | undefined;
}
const NavBar = ({ movies }: Props) => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <>
      <Box position="relative">
        {isHomeRoute && (
          <Box position="absolute" top="0" left="0" right="0">
            <MovieCarousel movies={movies} />
          </Box>
        )}

        <Box
          top="0"
          left="0"
          right="0"
          bg="black"
          color="white"
          zIndex="999"
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0)"
          px={10}
        >
          <Box as="nav" padding={4}>
            <HStack
              flex="1"
              pb={4}
              justify="center"
              display={{ base: "flex", lg: "none" }}
            >
              <SearchInput />
            </HStack>
            <HStack>
              <Link to="/">
                <HStack>
                  <Box
                    bg="red"
                    borderRadius="50%"
                    p={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="60px"
                    height="60px"
                  >
                    <Box
                      bg="red.600"
                      borderColor=""
                      borderRadius="50%"
                      p={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="40px"
                      height="40px"
                    >
                      <Icon as={FaTv} color="gray.300" boxSize={5} />
                    </Box>
                  </Box>
                  <Text
                    paddingLeft={4}
                    fontSize={20}
                    whiteSpace="nowrap"
                    fontWeight={900}
                    display={{ base: "none", md: "flex"}}
                  >
                    MovieBox
                  </Text>
                </HStack>
              </Link>
              <Spacer display={{ base: "1", lg: "none" }} />
              <HStack
                flex="1"
                justify="center"
                display={{ base: "none", lg: "flex" }}
              >
                <SearchInput />
              </HStack>
              <HStack>
                <Button
                  fontSize={"md"}
                  variant={"link"}
                  _hover={{
                    textDecoration: "underline",
                    colorScheme: "red",
                  }}
                >
                  Log in
                </Button>
                <Box
                  bg="red"
                  borderRadius="50%"
                  p={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="35px"
                  height="35px"
                >
                  <Image src={griplines} />
                  {/* <IconButton
                    // onClick={onCloseMain}
                    icon={<HamburgerIcon w={7} h={7} />}
                    variant={"ghost"}
                    aria-label={"Toggle Navigation"}
                  /> */}
                </Box>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>

      {/* <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
    >
      {
        movies?.map((movie) => (
          <Box
            key={movie.id}
            position="relative"
            width="100vw"
            height="70vh"
            backgroundImage={`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Box
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
              backgroundColor="rgba(0, 0, 0, 0.5)" 
            >
            
              <Box as="nav" padding="2px"
                width="93vw"
              >
                <HStack
                  flex="1"
                  pb={4}
                  justify="center"
                  display={{ base: "flex", lg: "none" }}
                >
                  <SearchInput />
                </HStack>

                <HStack>
                  <Link to="/">
                    <HStack>
                      <Box
                        bg="red"
                        borderRadius="50%"
                        p={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="60px"
                        height="60px"
                      >
                        <Box
                          bg="red.600"
                          borderColor=""
                          borderRadius="50%"
                          p={2}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          width="40px"
                          height="40px"
                        >
                          <Icon as={FaTv} color="gray.300" boxSize={5} />
                        </Box>
                      </Box>
                      <Text
                        paddingLeft={4}
                        fontSize={20}
                        whiteSpace="nowrap"
                        fontWeight={900}
                      >
                        MovieBox
                      </Text>
                    </HStack>
                  </Link>
                  <Spacer display={{ base: "1", lg: "none" }} />
                  <HStack
                    flex="1"
                    justify="center"
                    display={{ base: "none", lg: "flex" }}
                  >
                    <SearchInput />
                  </HStack>
                  <HStack>
                    <Button
                      fontSize={"md"}
                      variant={"link"}
                      _hover={{
                        textDecoration: "underline",
                        colorScheme: "red",
                      }}
                    >
                      Log in
                    </Button>
                    <Box
                      bg="red"
                      borderRadius="50%"
                      p={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="35px"
                      height="35px"
                    >
                      <IconButton
                     
                        icon={<HamburgerIcon w={7} h={7} />}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                      />
                    </Box>
                  </HStack>
                </HStack>
              </Box>

            
            </Box>

          </Box>
          
        ))
      }
    </Carousel> */}

      {/* <Box
        position="relative"
        width="100vw"
        height="100vh"
        backgroundSize="cover"
        backgroundPosition="center"
      >
 
        <Box
          width="100%"
          position="absolute"
          top="0"
          left="0"
          backgroundColor="rgba(0, 0, 0, 0.5)" 
          p="20px"
        >
          <Box as="nav" padding="2px">
            <HStack
              flex="1"
              pb={4}
              justify="center"
              display={{ base: "flex", lg: "none" }}
            >
              <SearchInput />
            </HStack>

            <HStack>
              <Link to="/">
                <HStack>
                  <Box
                    bg="red"
                    borderRadius="50%"
                    p={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="60px"
                    height="60px"
                  >
                    <Box
                      bg="red.600"
                      borderColor=""
                      borderRadius="50%"
                      p={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="40px"
                      height="40px"
                    >
                      <Icon as={FaTv} color="gray.300" boxSize={5} />
                    </Box>
                  </Box>
                  <Text
                    paddingLeft={4}
                    fontSize={20}
                    whiteSpace="nowrap"
                    fontWeight={900}
                  >
                    MovieBox
                  </Text>
                </HStack>
              </Link>
              <Spacer display={{ base: "1", lg: "none" }} />
              <HStack
                flex="1"
                justify="center"
                display={{ base: "none", lg: "flex" }}
              >
                <SearchInput />
              </HStack>
              <HStack>
                <Button
                  fontSize={"md"}
                  variant={"link"}
                  _hover={{
                    textDecoration: "underline",
                    colorScheme: "red",
                  }}
                >
                  Log in
                </Button>
                <Box
                  bg="red"
                  borderRadius="50%"
                  p={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="35px"
                  height="35px"
                >
                  <IconButton
                    icon={<HamburgerIcon w={7} h={7} />}
                    variant={"ghost"}
                    aria-label={"Toggle Navigation"}
                  />
                </Box>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box> */}
    </>
  );
};

export default NavBar;
