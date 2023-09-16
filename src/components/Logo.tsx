import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <HStack>
          <Box
            bg="red"
            borderRadius="50%"
            p={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="50px"
            height="50px"
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
            display={{ base: "none", md: "flex" }}
          >
            MovieBox
          </Text>
        </HStack>
      </Link>
    </>
  );
};

export default Logo;
