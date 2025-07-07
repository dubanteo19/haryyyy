import { ImageContainer } from "@/components/common/ImageContainer";
import type { Image } from "@/type/image";
import type { FC } from "react";
const ImageItem: FC<Image> = ({ id, url, size, name }) => {
  return (
    <div className="flex flex-col border p-2 rounded-2xl">
      <ImageContainer className="w-[200px]" src={url} />
      <div className="">
        <p>Id: {id}</p>
        <p>Ten: {name}</p>
        <p>Kich thuoc: {size}</p>
      </div>
    </div>
  );
};
export const ManageImage = () => {
  const images: Image[] = [
    {
      id: 1,
      name: "abc",
      size: 10000,
      url: "https://cdn.jsdelivr.net/gh/dubanteo19/cdn@1.0.0/images/685e02a0-e3f8-484f-a551-9542016e64.png",
    },
    {
      id: 2,
      name: "abc",
      size: 10000,
      url: "https://cdn.jsdelivr.net/gh/dubanteo19/cdn@1.0.0/images/685e02a0-e3f8-484f-a551-9542016e64.png",
    },
  ];
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold">Quản lý hình ảnh</h2>
      <div className="flex flex-wrap gap-2">
        {images &&
          images.map((image) => <ImageItem key={image.id} {...image} />)}
      </div>
    </div>
  );
};
