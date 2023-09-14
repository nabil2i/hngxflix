import { Box, Card, CardBody, HStack, Heading, Image, Tag } from '@chakra-ui/react'
import movieimage from '../../hidden/nun.jpg'
import LikeIcon from './LikeIcon'

export const MovieCard = () => {
  return (
    <Card data-testid="movie-card">
      <Image src={movieimage} data-testid="movie-poster"/>
      <HStack position="absolute" top={5} p={4} justifyContent="space-between" alignItems="flex-start">
        <Tag >TV SERIES</Tag>
        <Box marginLeft="auto">
          <LikeIcon />
        </Box>
      </HStack>
      <CardBody>
        <Heading as="h4" data-testid="movie-release-date">USA, 2016 - Current</Heading>
        <Heading as="h3" data-testid="movie-title">Nun</Heading>
      </CardBody>
    </Card>
  )
}
