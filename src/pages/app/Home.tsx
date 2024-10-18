import { Box, Flex } from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";
import { FindSuppliers } from "../../components/Suppliers/FindSuppliers";
import { HeroSection } from "../../components/HeroSection/HeroSection";

export const Home = () => {
  const [showSuppliers, setShowSuppliers] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = () => {
    if (myRef.current) myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showSuppliers) scrollToDiv();
  }, [showSuppliers]);

  return (
    <Box h="100%">
      <Flex
        bgGradient="linear(to-r, #005931, #2E2E2E)"
        py={4}
        px={{ base: 30, md: 99 }}
        h="85vh"
        marginTop={"15vh"}
      >
        <HeroSection setShowSuppliers={setShowSuppliers} />
      </Flex>
      {showSuppliers && (
        <div ref={myRef}>
          <FindSuppliers />
        </div>
      )}
    </Box>
  );
};
