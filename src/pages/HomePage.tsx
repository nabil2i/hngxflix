import { Box, Grid, GridItem } from "@chakra-ui/react";
import MovieGrid from "../components/MovieGrid";
import NavBar from "../components/NavBar";
import useMovies from "../hooks/useMovies";
import Footer from "../components/Footer";

const HomePage = () => {
  const { data } = useMovies();
  return (

    <>
    <Box>
        <NavBar movies={data?.results.slice(0, 5)}/>
        
        <Box padding={6}>
          <Grid
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
            <MovieGrid />
          </GridItem>
        </Grid>
        </Box>
        <Footer />
      </Box>

      
    </>
  );
};

export default HomePage;

