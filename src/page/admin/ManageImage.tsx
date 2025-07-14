import { ImageGallery } from "@/components/admin/images/ImageGallery";
import ImageUploader from "@/components/admin/images/ImageUploader";
import {
    AlertDialog
} from "@/components/ui/alert-dialog";
import { DeleteDialog } from "@/components/ui/deleteDialog";
import { FullLoader } from "@/components/ui/full-loader";
import { Skeleton } from "@/components/ui/skeleton";
import { useGoogleSheetData } from "@/hooks/useGoogleSheet";
import { useGoogleSheetMutation } from "@/hooks/useGoogleSheetMutation";
import type { Image } from "@/type/image";
import { useState } from "react";
import { toast } from "sonner";
export const ManageImage = () => {
  const { mutate: deleteImage, loading: isDeleting } = useGoogleSheetMutation();
  const { data, refetch, loading } = useGoogleSheetData<Image>("images");
  const [selectedImageId, setselectedImageId] = useState<string>("");
  const handleClickDeleteImage = (id: string) => {
    setselectedImageId(id);
  };
  const handleConfirmDeleteImage = async () => {
    if (!selectedImageId) return;
    try {
      await deleteImage({
        type: "images",
        id: selectedImageId,
        method: "DELETE",
        payload: { id: selectedImageId },
      });
      toast.success("Xóa hình ảnh thành công");
      setselectedImageId("");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4">
      {isDeleting && <FullLoader />}
      <ImageUploader callback={() => refetch()} />
      {!loading ? (
        <ImageGallery data={data} onClickDelete={handleClickDeleteImage} />
      ) : (
        <Skeleton className="h-[400px] w-full mt-5" />
      )}
      <AlertDialog
        open={selectedImageId != ""}
        onOpenChange={() => setselectedImageId("")}
      >
        <DeleteDialog
          target={selectedImageId}
          onClickConfirm={handleConfirmDeleteImage}
        />
      </AlertDialog>
    </div>
  );
};
