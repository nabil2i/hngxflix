import { Box, Button, HStack, Image } from "@chakra-ui/react";
import griplines from "../assets/griplines.png";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const MainMenu = () => {
  return (
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
          display={{ base: "none", lg: "none" }}
        >
          <SearchInput />
        </HStack>
        <HStack display="flex" justifyContent="space-between">
          <Logo />
          {/* <Spacer display={{ base: "1", lg: "none" }} /> */}
          <HStack
            flex="1"
            justify="center"
            display={{ base: "flex", lg: "flex" }}
          >
            <SearchInput />
          </HStack>
          <HStack>
            <Button
              display={{ base: "none", lg: "flex" }}
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
  );
};

export default MainMenu;
