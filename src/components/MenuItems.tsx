import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import {
  FaCalendar,
  FaFilm,
  FaHome,
  FaSignOutAlt,
  FaVideo,
} from "react-icons/fa";

const MenuItems = () => {
  return (
    <Flex direction="column" gap={6} pt="8">
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        p={3}
        cursor="pointer"
        _hover={{
          bg: "red.200",
          color: "red",
          borderRightWidth: "4px",
          borderRightColor: "red",
        }}
      >
        <Box display="flex" alignItems="center" px="10" gap={2}>
          <Icon as={FaHome} color="gray.300" boxSize={5} />
          <Text>Home</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        p={3}
        cursor="pointer"
        _hover={{
          bg: "red.200",
          color: "red",
          borderRightWidth: "4px",
          borderRightColor: "red",
        }}
      >
        <Box display="flex" alignItems="center" px="10" gap={2}>
          <Icon as={FaVideo} color="gray.300" boxSize={5} />
          <Text>Movies</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        p={3}
        cursor="pointer"
        _hover={{
          bg: "red.200",
          color: "red",
          borderRightWidth: "4px",
          borderRightColor: "red",
        }}
      >
        <Box display="flex" alignItems="center" px="10" gap={2}>
          <Icon as={FaFilm} color="gray.300" boxSize={5} />
          <Text>TV Series</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        p={3}
        cursor="pointer"
        _hover={{
          bg: "red.200",
          color: "red",
          borderRightWidth: "4px",
          borderRightColor: "red",
        }}
      >
        <Box display="flex" alignItems="center" px="10" gap={2}>
          <Icon as={FaCalendar} color="gray.300" boxSize={5} />
          <Text>Upcoming</Text>
        </Box>
      </Box>

      <Box px="10">
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          borderRadius="20px"
          bg="gray.300"
          px="10px"
          pt="20px"
          pb="10px"
        >
          <Text color="black" fontWeight={600}>
            Play movie quizes and earn free tickets
          </Text>
          <Text color="gray" fontWeight={600} fontSize={12}>
            50k people are playing now
          </Text>
          <Button bg="red.100" borderRadius={20}>
            <Text color="red.300">Start playing</Text>
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        gap={2}
        p={3}
        cursor="pointer"
        _hover={{
          cursor: "pointer",
          bg: "red.200",
          color: "red",
          borderRightWidth: "4px",
          borderRightColor: "red",
        }}
      >
        <Box display="flex" alignItems="center" px="10" gap={2}>
          <Icon as={FaSignOutAlt} color="gray.300" boxSize={5} />
          <Text>Logout</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default MenuItems;
