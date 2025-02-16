import { useEffect, useState } from "react";

import { getProduct } from "../../../services/Api";
import { Link } from "react-router";
import Button from "../../coreComponents/button/Button";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { useShoppingContext } from "../../../context/ShoppingContext";

function CartItem({ id, qty }) {
  const { increaseProductQty, decreaseProductQty } = useShoppingContext();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProductData() {
      const data = await getProduct(id);
      setProduct(data);
    }
    getProductData();
  }, []);

  return (
    <div className="border-b border-gray-300 py-2 last:border-b-0">
      <div className="flex items-center ">
        <Link to={`/product/${id}`}>
          <img
            src={product.image}
            className="h-fit my-auto  w-22 aspect-square lg:w-30 shrink-0 me-2"
          />
        </Link>

        <div className="w-100">
          <h3 className="font-bold line-clamp-2  lg:text-body-14 min-h-10">
            <Link to={`/product/${id}`}>{product.title}</Link>
          </h3>
          <p className="font-medium  lg:text-body-14 text-gray-500">
            {" "}
            {product.model}
          </p>
        </div>
        <div className=""></div>
      </div>
      <div className="flex justify-between align-middle">
        <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-300 bg-surface-solid-0 h-8 w-22 px-2 lg:h-11 lg:w-30 lg:px-3 py-[3px] text-caption-12 lg:py-[7px] lg:text-body-14">
          <Button
            onClick={() => increaseProductQty(id)}
            className="bg-white text-red-700 hover:bg-white hover:text-red-700 cursor-pointer"
          >
            <GoPlus size={25} />
          </Button>
          <span className="px-2">{qty}</span>
          {qty == 1 ? (
            <Button className="bg-white text-red-700 hover:bg-white hover:text-red-700 cursor-pointer">
              <RiDeleteBinLine size={25} />
            </Button>
          ) : (
            <Button
              onClick={() => decreaseProductQty(id)}
              className="bg-white text-red-700 hover:bg-white hover:text-red-700 cursor-pointer"
            >
              <FaMinus size={22} />
            </Button>
          )}
        </div>
        <div className="flex items-center">
          <div className="me-3">
            <div className="px-2 text-center ">538,000</div>
            <div className="text-lg font-medium text-gray-900">
              {product.price}
              <span className="text-xs ms-0.5">تومان</span>
            </div>
          </div>
          <div>
            <span className="w-[33px] rounded-md bg-red-700 text-center  font-medium text-white lg:w-10 inline-block ms-1">
              {product.discount}٪
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
