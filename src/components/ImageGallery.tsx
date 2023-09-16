import { Box, Button, Text, Flex, Image } from "@chakra-ui/react";
import nun from "../assets/nun.jpg"
import lists from "../assets/lists.png"

const ImageGallery = () => {
  return (
    <Box >
      <Flex gap={1} position="relative">
        <Image src={nun} alt="Image 1" width="200px" height="150px" />
        <Image src={nun} alt="Image 2" width="200px" height="150px" />
        <Image src={nun} alt="Image 3" width="200px" height="150px" />
      

      <Button 
        width="full"
        position="absolute"
        // borderColor="red"
        borderWidth="2px" 
        bottom="0"
        // bg="red.100" 
        backgroundColor="rgba(0, 0, 0, 0.1)"
        gap={2}
        _hover={{
          bg: 'white'
        }}>
        <Box
          // bg="red"
          // borderRadius="50%"
          // p={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="45px"
          height="45px"
          
        >
          <Box color="black">
            <Image src={lists} />
          </Box>
        </Box>
        <Text color="whilte">The Best Movies and Shows in September</Text>
      </Button>
      </Flex>
    </Box>
  );
};

export default ImageGallery;




