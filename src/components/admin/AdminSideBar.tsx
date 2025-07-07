import { cn } from "@/lib/utils";
import {
    adminSideBarData,
    type SideBarLinkItemProps,
} from "@/page/data/adminSidebarData";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ImageContainer } from "../common/ImageContainer";
interface AdminSideBarProps {
  className?: string;
  expand: boolean;
  toggleExpand: () => void;
}
const SideBarLinkItem: React.FC<
  SideBarLinkItemProps & { expand: boolean; active: boolean }
> = ({ icon, name, href, expand, active = false, disabled = false }) => {
  return (
    <div>
      <Link
        to={disabled ? "" : href}
        className={cn(
          "px-4 py-[8px] relative flex space-x-2 box-content",
          active && "text-primary shadow-[inset_4px_0_0_0_#ffab66]",
        )}
      >
        <div className={active ? "text-primary" : "text-black"}>{icon}</div>
        {expand && (
          <span
            className={cn(
              "hover:text-black",
              active ? "text-black" : "text-gray",
            )}
          >
            {disabled ? `${name} (bảo trì)` : name}
          </span>
        )}
      </Link>
    </div>
  );
};
export const AdminSideBar: React.FC<AdminSideBarProps> = ({
  expand,
  toggleExpand,
}) => {
  const { pathname } = useLocation();
  return (
    <div
      onMouseEnter={() => {
        if (!expand) toggleExpand();
      }}
      className={cn(
        `fixed bg-gray-50  flex flex-col transition-all 
        h-full left-0 top-0,  `,
        expand ? "w-62  " : "w-14 ",
      )}
    >
      <section
        className="pl-4  py-4 pr-2 text-black border-b-2 border-b-gray-500 overflow-hidden
        flex justify-between gap-x-10 items-center sticky top-0 left-0 bg-white"
      >
        <div className="flex-center  space-x-2 flex items-center">
          <ImageContainer src={"/favicon.png"} className="size-8" />
          {expand && <h3 className=" font-bold">HaryLe</h3>}
        </div>
        <div
          onClick={toggleExpand}
          className="bg-primary text-white p-1 rounded-sm cursor-pointer"
        >
          <ArrowLeft />
        </div>
      </section>
      <div
        className=" mt-4 text-black flex flex-col h-full w-full space-y-2 
        overflow-hidden hover:overflow-y-scroll"
      >
        {adminSideBarData.map((item) => (
          <div key={item.group}>
            {expand && <p className="font-bold px-4">{item.group}</p>}
            <div className="mt-4 flex flex-col space-y-2">
              {item.linkItems.map((link) => {
                return (
                  <SideBarLinkItem
                    expand={expand}
                    active={pathname.startsWith(link.href)}
                    {...link}
                    key={link.name}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
