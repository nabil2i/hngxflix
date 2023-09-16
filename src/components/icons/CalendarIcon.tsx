import { Box, Icon, Image } from "@chakra-ui/react";

const CalendarIcon = () => {
  return (
    <Box>
      <Icon
        as={Image}
        src="../../assets/calendar.png"
        alt="My Icon"
        w={6}
        h={6}
      />
    </Box>
  );
};
export default CalendarIcon;
