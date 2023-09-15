import { Grid, GridItem } from "@chakra-ui/react";
import MovieGrid from "../components/MovieGrid";

const HomePage = () => {
  return (
    <>
      <Grid pt="500px"
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
    </>
  );
};

export default HomePage;
