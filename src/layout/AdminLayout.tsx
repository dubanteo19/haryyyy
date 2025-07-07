import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSideBar } from "@/components/admin/AdminSideBar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [expand, setExpand] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
      setExpand(false);
    }
  }, []);

  const toggleEpand = () => {
    if (!isMobile) setExpand((pre) => !pre);
  };

  return (
    <div className="flex  h-screen ">
      <AdminSideBar expand={expand} toggleExpand={toggleEpand} />
      <div
        className={cn(
          "flex flex-col px-6 md:px-10 w-full ml-8 md:ml-10",
          expand && "md:ml-60",
        )}
      >
        <AdminHeader />
        <div className="h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}
