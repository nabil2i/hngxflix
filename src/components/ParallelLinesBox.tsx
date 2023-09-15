import { Box } from "@chakra-ui/react";

const ParallelLinesBox = () => {
  return (
    <Box
      w="200px" // Set the width of the box
      h="200px" // Set the height of the box
      bg="white" // Set the background color of the box
      position="relative"
    >
      {/* First parallel line */}
      <Box
        position="absolute"
        top="50%" // Position vertically at the middle
        left="0" // Position at the left edge
        w="100%" // Line width 100% of the box width
        h="2px" // Line height (thickness)
        bg="blue" // Line color
        transform="translateY(-50%)" // Adjust for vertical centering
        content="" // Required for pseudo-element
      ></Box>

      {/* Second parallel line */}
      <Box
        position="absolute"
        top="50%" // Position vertically at the middle
        right="0" // Position at the right edge
        w="100%" // Line width 100% of the box width
        h="2px" // Line height (thickness)
        bg="blue" // Line color
        transform="translateY(-50%)" // Adjust for vertical centering
        content="" // Required for pseudo-element
      ></Box>
    </Box>
  );
};

export default ParallelLinesBox;
