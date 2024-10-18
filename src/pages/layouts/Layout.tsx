import { Box } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
