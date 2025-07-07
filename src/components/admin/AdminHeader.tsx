import { Bell } from "lucide-react";
import { ImageContainer } from "../common/ImageContainer";
import { AVATAR } from "@/constants/constants";

export const AdminHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white py-2  px-4 rounded-4xl">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-2">
          <h3 className="text-gray">Hi</h3>
          <h3 className="text-primary whitespace-nowrap flex-grow font-bold">Hary Le</h3>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell />
        </div>
        <div className="flex-center gap-10"></div>
        <ImageContainer className="rounded-full size-12" src={AVATAR} />
      </div>
    </div>
  );
};
