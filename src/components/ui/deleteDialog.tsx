import type { FC } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";

interface DeleteDialogProps {
  onClickConfirm: () => void;
  target?: string;
}
export const DeleteDialog: FC<DeleteDialogProps> = ({
  onClickConfirm,
  target,
}) => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Bạn chắc chưa?</AlertDialogTitle>
        <AlertDialogDescription>
          Bạn đang xóa {target}, một khi đã xóa thì không thể khôi phục lại được
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
        <AlertDialogAction onClick={onClickConfirm}>Xóa</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
