import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Router = () => {
  const mainRoutes = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
   
  ];

  const route = useRoutes(mainRoutes);
  return <>{route}</>;
};

export default Router;
