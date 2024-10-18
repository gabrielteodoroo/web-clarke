import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
