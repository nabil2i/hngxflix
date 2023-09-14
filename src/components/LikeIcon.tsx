import React from 'react'
import { FaHeart } from "react-icons/fa"
import { Box, Icon } from '@chakra-ui/react'

const LikeIcon = () => {
  return (
    <>
      <Box
        bg="gray"
        borderRadius="50%"
        border="2px"
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="35px"
        height="35px"
      >
        <Icon
          as={FaHeart}
          color="gray.300"
          boxSize={5}
        />
      </Box>
    </>
  )
}

export default LikeIcon