import React from 'react'
import { FaHeart } from "react-icons/fa"
import { Icon } from '@chakra-ui/react'

const LikeIcon = () => {
  return (
    <>
      <div color="gray" border-radius="50%">
        <Icon as={FaHeart} color="gray.300" boxSize={6}/>
      </div>
    </>
  )
}

export default LikeIcon