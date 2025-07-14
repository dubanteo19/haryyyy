import { LoaderPinwheelIcon } from "lucide-react";

export const FullLoader = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-200/60 z-100">
      <LoaderPinwheelIcon className="animate-spin" />
    </div>
  );
};
