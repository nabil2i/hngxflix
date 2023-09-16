import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  // const { data } = useMovies();

  return (
    <>
      <Box>
        {/* <NavBar movies={data?.results.slice(0, 5)}/> */}

        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
