import { Box, Icon, Image } from "@chakra-ui/react";

const CameraIcon = () => {
  return (
    <Box>
      <Icon
        as={Image}
        src="../../assets/camera.png"
        alt="My Icon"
        w={6}
        h={6}
      />
    </Box>
  );
};
export default CameraIcon;
