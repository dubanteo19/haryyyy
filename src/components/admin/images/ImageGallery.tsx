import { ImageContainer } from "@/components/common/ImageContainer";
import { Button } from "@/components/ui/button";
import { useGoogleSheetData } from "@/hooks/useGoogleSheet";
import { cn, formatDate, formatSize } from "@/lib/utils";
import type { Image } from "@/type/image";
import { CheckIcon, Loader, TrashIcon } from "lucide-react";
import { useState, type FC } from "react";

export const ImageItem: FC<
  Image & {
    onclick: (url: string) => void;
    selected: boolean;
    detail?: boolean;
  }
> = ({ id, url, size, name, uploadedAt, onclick, selected, detail = true }) => {
  return (
    <div
      className="flex flex-col w-[200px] border rounded-2xl overflow-hidden cursor-pointer relative"
      onClick={() => onclick(url)}
    >
      {selected && (
        <div className=" absolute top-1 right-0 bg-green-500 text-white flex justify-center items-center size-8 rounded-full">
          <CheckIcon />
        </div>
      )}
      <ImageContainer src={url} />
      {detail && (
        <div
          className={cn(
            "text-sm  ",
            selected ? "bg-primary/50" : "bg-gray-100",
          )}
        >
          <p>Id: {id}</p>
          <p>Tên: {name}</p>
          <p>Ngày tải lên: {formatDate(uploadedAt)}</p>
          <p>Kích thước: {formatSize(size)}</p>
        </div>
      )}
    </div>
  );
};
export const ImageGallery: FC<{
  callback?: (url: string) => void;
  onClickDelete?: (id: string) => void;
  detail?: boolean;
}> = ({ callback, detail = true, onClickDelete }) => {
  const { data, refetch, loading } = useGoogleSheetData<Image>("images");
  const [selectedImage, setselectedImage] = useState<string>("");
  const handleClickImage = (url: string) => {
    const newSelection = url == selectedImage ? "" : url;
    setselectedImage(newSelection);
    callback?.(newSelection);
  };
  return (
    <div className="mt-4 border rounded p-2 ">
      <h2 className="text-center font-bold text-xl">Thư viện hình ảnh</h2>
      <Button onClick={() => refetch()}>
        {loading ? <p><Loader className="animate-spin"/></p> : "Tải lại"}
      </Button>
      {data.length > 0 ? (
        <div>
          <p>({data.length}) Hình ảnh</p>
          <div className="flex flex-wrap gap-2  ">
            {data.map((image) => (
              <div className="group">
                <ImageItem
                  detail={detail}
                  selected={image.url == selectedImage}
                  onclick={handleClickImage}
                  key={image.id}
                  {...image}
                />
                {detail && onClickDelete && (
                  <div
                    onClick={() => onClickDelete(image.id)}
                    className="flex   justify-center opacity-0 group-hover:opacity-100 
                  transition-all cursor-pointer"
                  >
                    <div className="rounded text-white bg-red-500 p-2">
                      <TrashIcon />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader className="animate-spin" />
      )}
    </div>
  );
};
