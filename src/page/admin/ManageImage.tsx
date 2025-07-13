import { ImageGallery } from "@/components/admin/images/ImageGallery";
import ImageUploader from "@/components/admin/images/ImageUploader";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useGoogleSheetMutation } from "@/hooks/useGoogleSheetMutation";
import { useState } from "react";
import { toast } from "sonner";
export const ManageImage = () => {
  const { mutate: deleteImage } = useGoogleSheetMutation();
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4">
      <ImageUploader />
      <ImageGallery
        onClickDelete={handleClickDeleteImage}
      />
      <AlertDialog
        open={selectedImageId != ""}
        onOpenChange={() => setselectedImageId("")}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bạn chắc chưa?</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn đang xóa hình ảnh {selectedImageId} Một khi đã xóa thì không
              thể khôi phục lại được
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDeleteImage}>
              Xóa
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
