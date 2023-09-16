import { Box, Image } from "@chakra-ui/react";
import logout from "../../assets/logout.png";

const LogoutIcon = () => {
  return (
    <Box>
      <Image src={logout} alt="My Icon" w={6} h={6} />
    </Box>
  );
};
export default LogoutIcon;
