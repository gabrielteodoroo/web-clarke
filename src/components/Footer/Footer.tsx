import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo-clarke-energia-B3vZElX6.svg";

export const Footer = () => {
  return (
    <Box backgroundColor={"#2E2E2E"} py="4">
      <Flex px={6} align={"center"} justify={"space-between"}>
        <Image src={logo} alt="Clarke Energia Logo" h="50px" />
        <Text color="#FFFFFF" textAlign={"center"}>
          Av. Paulista, 1374 - Bela Vista, São Paulo - SP, 01310-100
        </Text>
      </Flex>
    </Box>
  );
};
