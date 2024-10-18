import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../../assets/logo-clarke-energia-B3vZElX6.svg";
import { appRoutes } from "../../config/appRoutes";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box
      as="header"
      bgGradient="linear(to-r, #005931, #2E2E2E)"
      borderBottom={"1px solid white"}
      h="15vh"
      display={"flex"}
      alignItems="center"
      px={{ base: 10, lg: 20 }}
      justifyContent={"flex-start"}
      position={"fixed"}
      top="0"
      w="100%"
      zIndex={10}
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        gap={8}
        minW={"100%"}
      >
        <Image src={logo} alt="Clarke Energia Logo" h="70px" />
        <Flex
          as="nav"
          gap={8}
          align="center"
          flexDir={{ base: "column", lg: "row" }}
          display={{ base: "none", lg: "flex" }}
        >
          <Link
            href={appRoutes.mercadoLivreDeEnergia}
            color="white"
            fontSize="lg"
          >
            Mercado livre de energia
          </Link>
          <Link href={appRoutes.sobreNos} color="white" fontSize="lg">
            Sobre nós
          </Link>
          <Link href={appRoutes.clarkeBlog} color="white" fontSize="lg">
            Blog
          </Link>
        </Flex>
        <IconButton
          aria-label="Menu"
          icon={!showMenu ? <MdMenu /> : <MdClose />}
          background={"#E6F9DC"}
          size="sm"
          onClick={() => setShowMenu(!showMenu)}
          borderRadius="full"
          _hover={{ bg: "#E6F9DC", color: "#222222" }}
          color="#222222"
          borderColor="#E6F9DC"
          display={{ base: "flex", lg: "none" }}
          fontSize={20}
        />
        <Drawer
          isOpen={showMenu}
          placement="right"
          onClose={() => setShowMenu(false)}
        >
          <DrawerOverlay />
          <DrawerContent
            bgGradient="linear(to-r, #005931, #2E2E2E)"
            color="#FAFAFA"
          >
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex flexDirection="column" gap={4}>
                <Link href={appRoutes.mercadoLivreDeEnergia}>
                  Mercado livre de energia
                </Link>
                <Link href={appRoutes.sobreNos}>Sobre nós</Link>
                <Link href={appRoutes.clarkeBlog}>Blog</Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;
