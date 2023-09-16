import { Box, Icon, Image } from "@chakra-ui/react";

const TvIcon = () => {
  return (
    <Box>
      <Icon
        as={Image}
        src="../../assets/movies.png"
        alt="My Icon"
        w={6}
        h={6}
      />
    </Box>
  );
};
export default TvIcon;
