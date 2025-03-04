import { useState } from "react";
import Input from "../../components/coreComponents/input/Input";
import Textarea from "../../components/coreComponents/textarea/TextArea";

import AdminLayouts from "./layouts/AdminLayouts";
import Button from "../../components/coreComponents/button/Button";
import Select from "../../components/coreComponents/select/Select";
import { ColorOptions, SizeOptions } from "./const";
import { createProduct } from "../../services/Api";
import Spinner from "../../components/coreComponents/spinner/Spinner";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [newProduct, setnewProduct] = useState({
    title: "",
    image: "",
    model: "",
    price: "",
    color: "",
    size: "",
    description: "",
  });
  const handlChange = (e) => {
    const { value, name } = e.target;
    setnewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = async () => {
    setIsLoading(true);
    await createProduct({ ...newProduct });
    setIsLoading(false);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <AdminLayouts />
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 p-0  mb-2">
              <Input
                label="عنوان محصول"
                className="border border-gray-300 rounded-xl p-3"
                name="title"
                onChange={handlChange}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 p-0  mb-2">
              <Input
                label="تصویر محصول"
                className="border border-gray-300 rounded-xl p-3"
                name="image"
                onChange={handlChange}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 p-0  mb-2">
              <Input
                label="مدل محصول"
                className="border border-gray-300 rounded-xl p-3"
                name="model"
                onChange={handlChange}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 p-0  mb-2">
              <Input
                label="قیمت محصول"
                className="border border-gray-300 rounded-xl p-3"
                name="price"
                onChange={handlChange}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 p-0  mb-2">
              <Select
                label="رنگ محصول"
                className="border border-gray-300 rounded-xl p-3"
                name="color"
                options={ColorOptions}
                onChange={(selected) => {
                  console.log(selected);
                  setnewProduct((current) => ({
                    ...current,
                    color: selected.value,
                  }));
                }}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 p-0  mb-2">
              <Select
                label="سایز محصول"
                className="border border-gray-300 rounded-xl p-3"
                name="size"
                options={SizeOptions}
                onChange={(selected) => {
                  console.log(selected);
                  setnewProduct((current) => ({
                    ...current,
                    size: selected.value,
                  }));
                }}
              />
            </div>
            <div className="col-span-12  p-0  mb-2">
              <Textarea
                label="توضیحات محصول"
                className="border border-gray-300 rounded-xl p-3"
                name="description"
                onChange={handlChange}
              />
            </div>
            <div className="col-span-12  p-0  mb-2 text-center">
              <Button
                onClick={handleCreateProduct}
                type="submit"
                size="lg"
                className="min-w-80"
              >
                {isLoading ? <Spinner /> : "ارسال"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
