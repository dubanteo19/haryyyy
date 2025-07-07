import { useRoutes } from "react-router-dom";
import { userRoutes } from "./userRoutes";
import { adminRoutes } from "./adminRoutes";

export const AppRoutes = () => {
  const routes = useRoutes([userRoutes, adminRoutes]);
  return routes;
};
