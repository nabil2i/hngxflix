import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useMovies from "../hooks/useMovies";

const Layout = () => {
  const { data } = useMovies();
  
  return (
    <>
      <Box>
        <NavBar movies={data?.results.slice(0, 5)}/>
        
        <Box padding={6}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
