import { Box, Icon, useToast } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import Movie from "../entities/Movie";
import useUserStore from "../store/UserStore";

interface Props {
  movie: Movie;
}

const LikeIcon = ({ movie }: Props) => {
  const toast = useToast();
  const { addFavoriteMovie, removeFavoriteMovie, user } = useUserStore();
  // const [isLiked, setIsliked] = useState(false)

  const isLiked = user.favorites.some((favMovie) => favMovie.id === movie.id);

  const handleLikeClick = () => {
    if (isLiked) {
      removeFavoriteMovie(movie.id);
      toast({
        title: `${movie.title} removed from favorites`,
        status: "error",
        position: "top-right",
        duration: 3000, // Display time in milliseconds
        isClosable: true,
      });
      // toast.error(`${movie.title} removed from favorites`, {
      //   position: "bottom-right",
      // });

      // console.log("remove", movie.id);
    } else {
      addFavoriteMovie(movie);
      toast({
        title: `${movie.title} added to favorites`,
        status: "success",
        position: "top-right",
        duration: 3000, // Display time in milliseconds
        isClosable: true,
      });
      // toast.success(`${movie.title} added to favorites`, {
      //   position: "bottom-right",
      // });
      // console.log("add", movie.id);
    }
  };

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
        cursor="pointer"
        width="35px"
        height="35px"
        onClick={handleLikeClick}
      >
        <Icon
          as={FaHeart}
          color={isLiked ? "red.500" : "gray.300"}
          boxSize={5}
        />
      </Box>
    </>
  );
};

export default LikeIcon;
