import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
      borderRadius="30px"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav"></Flex>
    </Flex>
  );
};

export default Sidebar;
