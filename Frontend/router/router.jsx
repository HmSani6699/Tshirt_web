import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Layout/Main";
import ProductDetails from "../src/component/ProductDetails/ProductDetails";
import Home from "../src/Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
