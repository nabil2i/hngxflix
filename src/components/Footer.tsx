import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      // bg="gray.900"
      // color="white"
      paddingY={4}
    >
      {/* First Row: Social Icons */}
      <Flex gap={4}>
        <Link href="#" target="_blank">
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="#" target="_blank">
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
        <Link href="#" target="_blank">
          <Icon as={FaTwitter} boxSize={6} />
        </Link>
        <Link href="#" target="_blank">
          <Icon as={FaYoutube} boxSize={6} />
        </Link>
      </Flex>

      {/* Second Row: Text Links */}
      <Flex mt={4} gap={4}>
        <Link href="#">Conditions of Use</Link>
        <Link href="#">Privacy & Policy</Link>
        <Link href="#">Press Room</Link>
      </Flex>

      {/* Third Row: Copyright */}
      <Text mt={4} fontSize="sm">
        &copy; {new Date().getFullYear()} MovieBox
      </Text>
    </Flex>
  );
};

export default Footer;
