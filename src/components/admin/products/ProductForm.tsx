import { Button } from "@/components/ui/button";
import type { ProductSaveType } from "@/page/admin/ProductCreatePage";
import { type Dispatch, type FC } from "react";

interface ProductFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  formState: [ProductSaveType, Dispatch<React.SetStateAction<ProductSaveType>>];
  type?: "create" | "edit";
}
export const ProductForm: FC<ProductFormProps> = ({
  handleSubmit,
  loading,
  formState,
  type = "create",
}) => {
  const [form, setForm] = formState;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex justify-between w-full ">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-4 bg-white rounded shadow space-y-4 grow flex-1 w-full"
      >
        <h2 className="text-lg font-semibold">
          {type == "create" ? "Thêm" : "Cập nhập"} sản phẩm
        </h2>
        <div>
          <label className="block text-sm font-medium mb-1">
            Tiêu đề sản phẩm
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Link</label>
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Đang lưu..." : "Lưu"}
        </Button>
      </form>
    </div>
  );
};
