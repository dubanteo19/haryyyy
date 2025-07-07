import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const apiKey = localStorage.getItem("apiKey");
  return apiKey ? <Outlet /> : <Navigate to="/login" />;
}
