import { ImageGallery } from "@/components/admin/images/ImageGallery";
import ImageUploader from "@/components/admin/images/ImageUploader";
import { ProductForm } from "@/components/admin/products/ProductForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProductCard } from "@/components/ui/ProductCard";
import { useGoogleSheetMutation } from "@/hooks/useGoogleSheetMutation";
import type { Product } from "@/type/product";
import { useState } from "react";
import { toast } from "sonner";
export type ProductSaveType = Product;
const initialForm: ProductSaveType = {
  id: 0,
  title: "",
  image: "",
  link: "",
};
export const ProductCreatePage = () => {
  const [form, setForm] = useState<ProductSaveType>(initialForm);
  const { mutate, loading } = useGoogleSheetMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form };
    try {
      const res = await mutate({ payload, type: "products", method: "POST" });
      if (res) {
        toast.success("Tạo sản phẩm mới thành công");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageClick = (url: string) => {
    setForm((prev) => ({ ...prev, image: url }));
  };
  const [openUploader, setopenUploader] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-3 px-5">
        <div className="col-span-2">
          <ProductForm
            loading={loading}
            formState={[form, setForm]}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="w-full bg-gray-100 rounded-2xloverflow-hidden">
          <h2 className="text-center text-xl font-bold">Xem trước</h2>
          {form && (
            <ProductCard
              image={form.image}
              link={form.link}
              title={form.title}
              id={0}
            />
          )}
        </div>
      </div>
      <Button onClick={()=>setopenUploader(true)} className="text-gray-700 mt-2">Quản lý hình ảnh</Button>
      <Dialog open={openUploader} onOpenChange={setopenUploader}>
        <DialogContent>
          <ImageUploader />
        </DialogContent>
      </Dialog>
      <ImageGallery detail={false} callback={handleImageClick} />
    </div>
  );
};
