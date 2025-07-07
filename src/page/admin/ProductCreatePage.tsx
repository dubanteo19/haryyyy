import { ProductForm } from "@/components/admin/products/ProductForm";
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
  const [form, setForm] = useState(initialForm);
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
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <ProductForm
        loading={loading}
        formState={[form, setForm]}
        handleSubmit={handleSubmit}
      />
      <div className="w-[500px]">
        {form.image && form.link && form.title && (
          <ProductCard
            image={form.image}
            link={form.link}
            title={form.title}
            id={0}
          />
        )}
      </div>
    </div>
  );
};
