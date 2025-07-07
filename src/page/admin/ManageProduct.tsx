import { ProductTable } from "@/components/admin/products/ProductTable";
import { Button } from "@/components/ui/button";
import { ADMIN_ROUTES } from "@/constants/constants";
import { Link } from "react-router-dom";

export const ManageProduct = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold">Quản lý sản phẩm</h2>
      <div className="my-4">
        <Link to={ADMIN_ROUTES.CREATE_PRODUCT}>
          <Button className="text-black">Thêm sản phẩm mới</Button>
        </Link>
      </div>
      <ProductTable />
    </div>
  );
};
