import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useGoogleSheetData } from "@/hooks/useGoogleSheet";
import { useGoogleSheetMutation } from "@/hooks/useGoogleSheetMutation";
import type { ProductSaveType } from "@/page/admin/ProductCreatePage";
import type { Product } from "@/type/product";
import { DeleteIcon, EditIcon, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ProductForm } from "./ProductForm";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ProductCard } from "@/components/ui/ProductCard";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { DeleteDialog } from "@/components/ui/deleteDialog";
import { ImageGallery } from "../images/ImageGallery";
import { type Image } from "@/type/image";
const initialForm: ProductSaveType = {
  title: "",
  image: "",
  link: "",
  id: 0,
};
export const ProductTable = () => {
  const { data, loading } = useGoogleSheetData<Product>("products");
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  const [form, setForm] = useState<ProductSaveType>(initialForm);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { mutate, loading: isMutating } = useGoogleSheetMutation();
  const handleConfirmDelete = async () => {
    try {
      await mutate({
        method: "DELETE",
        id: String(selectedId),
        type: "products",
        payload: { id: selectedId },
      });
      toast.success("Xóa sản phẩm thành công");
      setProducts(
        (prev) =>
          prev?.filter((product) => product.id !== Number(selectedId)) || [],
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id: number) => {
    setSelectedId(String(id));
  };
  const handleEditProduct = (product: Product) => {
    setEditProduct(product);
    setForm({ ...product });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editProduct?.id) {
        await mutate({
          method: "PUT",
          type: "products",
          id: String(editProduct?.id),
          payload: { ...form },
        });
        const updatedproduct = { ...form };
        toast.success("Cập nhập sản phẩm thành công");
        setProducts((prev) =>
          prev ? prev.map((p) => (p.id === form.id ? updatedproduct : p)) : [],
        );
        setEditProduct(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { data: images } = useGoogleSheetData<Image>("images");
  if (loading || isMutating) return <Loader className="mx-auto animate-spin" />;
  return (
    <div className="px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Image</th>
              <th className="p-3">Link</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="p-3 text-sm text-gray-700">{product.id}</td>
                  <td className="p-3 text-sm text-gray-900 font-medium">
                    {product.title}
                  </td>
                  <td className="p-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{product.link}</td>
                  <td className="p-3 text-sm text-gray-700 flex space-x-2">
                    <Button onClick={() => handleEditProduct(product)}>
                      <EditIcon />
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(product.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            {products && products.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Dialog
        open={editProduct != null}
        onOpenChange={() => setEditProduct(null)}
      >
        <AlertDialog
          open={selectedId != null}
          onOpenChange={() => setSelectedId(null)}
        >
          <DeleteDialog
            target={"Sản phẩm"}
            onClickConfirm={handleConfirmDelete}
          />
        </AlertDialog>
        <DialogContent className="min-w-[1000px] ">
          <DialogTitle>
            <DialogHeader>Hộp thoại</DialogHeader>
          </DialogTitle>
          <p>ID: {editProduct?.id}</p>
          <div className="flex">
            <ProductForm
              type="edit"
              handleSubmit={handleSubmit}
              loading={loading}
              formState={[form, setForm]}
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
          {editProduct && (
            <ImageGallery
              data={images}
              callback={(url) => setForm((prev) => ({ ...prev, image: url }))}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
