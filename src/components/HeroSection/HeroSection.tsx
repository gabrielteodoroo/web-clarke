import { Button, Flex, Image, Text } from "@chakra-ui/react";
import raio from "../../assets/raio.svg";
import phone from "../../assets/celular.svg";

interface HeroSectionProps {
  setShowSuppliers: (value: boolean) => void;
}

export const HeroSection = ({ setShowSuppliers }: HeroSectionProps) => {
  return (
    <Flex
      w="100%"
      flexDir={{ base: "column", lg: "row" }}
      alignItems={"center"}
      justify={{ base: "center", lg: "space-between" }}
    >
      <Flex flexDir={"column"}>
        <Text
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={700}
          color={"#FAFAFA"}
          lineHeight={"3rem"}
          maxW={"500px"}
          textAlign={{ base: "center", lg: "left" }}
        >
          Encontre o fornecedor de energia{" "}
          <Text display={"inline-flex"} color={"#00BF6A"}>
            perfeito
          </Text>{" "}
          para sua empresa
        </Text>
        <Button
          type="button"
          backgroundColor={"#00BF6A"}
          w="250px"
          h="45px"
          borderRadius={"50px"}
          color={"#FAFAFA"}
          display={{ base: "none", lg: "flex" }}
          _hover={{ backgroundColor: "#00A75C" }}
          onClick={() => setShowSuppliers(true)}
          marginTop={10}
        >
          Informe seu consumo e escolha
        </Button>
      </Flex>
      <Flex align="flex-start" justify="center" position="relative">
        <Image src={raio} alt="Raio" objectFit="contain" />
        <Flex
          align="center"
          justify="center"
          position="absolute"
          zIndex={2}
          top="4%"
        >
          <Image src={phone} alt="Celular" objectFit="contain" />
        </Flex>
      </Flex>
      <Button
        type="button"
        backgroundColor={"#00BF6A"}
        w="250px"
        minH="45px"
        borderRadius={"50px"}
        color={"#FAFAFA"}
        display={{ base: "flex", lg: "none" }}
        onClick={() => setShowSuppliers(true)}
        marginTop={10}
      >
        Informe seu consumo e escolha
      </Button>
    </Flex>
  );
};
