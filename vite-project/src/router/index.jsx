import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetails from '../pages/Product Details/index'
import FilterProducts from "../pages/FilterProducts";
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
    {
      path: "/filter-products",
      element: <FilterProducts />,
    },
  ];

  const route = useRoutes(mainRoutes);
  return <>{route}</>;
};

export default Router;
