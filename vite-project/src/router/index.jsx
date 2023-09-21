import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetails from '../pages/Product Details/index'
const Router = () => {
  const mainRoutes = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    {
      path: "/product-details",
      element: <ProductDetails />,
    },
  ];

  const route = useRoutes(mainRoutes);
  return <>{route}</>;
};

export default Router;
