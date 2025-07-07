import AdminLayout from "@/layout/AdminLayout";
import { ManageProduct } from "@/page/admin/ManageProduct";
import { type RouteObject } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { DashboardPage } from "@/page/admin/DashboardPage";
import { ManageImage } from "@/page/admin/ManageImage";
import { ManageVideo } from "@/page/admin/ManageVideo";
import { ADMIN_ROUTES } from "@/constants/constants";

export const adminRoutes: RouteObject = {
  path: "/haryle",
  element: <PrivateRoute />,
  children: [
    {
      element: <AdminLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: ADMIN_ROUTES.DASHBOARD, element: <DashboardPage /> },
        { path: ADMIN_ROUTES.MANAGE_PRODUCT, element: <ManageProduct /> },
        { path: ADMIN_ROUTES.MANAGE_IMAGE, element: <ManageImage /> },
        { path: ADMIN_ROUTES.MANAGE_VIDEO, element: <ManageVideo /> },
      ],
    },
  ],
};
