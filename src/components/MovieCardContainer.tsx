import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <>
      <Box
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
        overflow="hidden"
        maxWidth="350px"
        p={5}
      >
        {children}
      </Box>
    </>
  );
};

export default MovieCardContainer;
