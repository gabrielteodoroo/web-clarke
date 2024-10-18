import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import { Home } from "./pages/app/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
