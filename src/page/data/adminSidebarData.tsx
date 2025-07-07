import { ADMIN_ROUTES } from "@/constants/constants";
import {
    ImageIcon,
    LayoutDashboardIcon,
    Newspaper,
    TagIcon,
    Warehouse,
} from "lucide-react";

export interface SideBarLinkItemProps {
  icon: React.ReactNode;
  name: string;
  href: string;
  adminOnly?: boolean;
  disabled?: boolean;
}
interface AdminSideBarData {
  group: string;
  linkItems: SideBarLinkItemProps[];
}
export const adminSideBarData: AdminSideBarData[] = [
  {
    group: "CHUNG",
    linkItems: [
      {
        icon: <LayoutDashboardIcon />,
        name: "Bảng điều khiển",
        href: ADMIN_ROUTES.DASHBOARD,
      },
      {
        icon: <Warehouse />,
        name: "Sản phẩm",
        href: ADMIN_ROUTES.MANAGE_PRODUCT,
      },
      {
        icon: <ImageIcon />,
        name: "Hình ảnh",
        href: ADMIN_ROUTES.MANAGE_IMAGE,
      },
      {
        icon: <TagIcon />,
        name: "Video",
        href: ADMIN_ROUTES.MANAGE_VIDEO,
      },
    ],
  },
  {
    group: "Trang",
    linkItems: [
      {
        icon: <Newspaper />,
        name: "Contact",
        disabled: true,
        href: ADMIN_ROUTES.MANAGE_CONTACT,
      },
    ],
  },
];
