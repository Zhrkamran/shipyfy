import { useEffect, useState } from "react";
import { getProduct } from "../../services/Api";
import { useParams } from "react-router";
import Container from "../../components/coreComponents/container/Container";
import Button from "../../components/coreComponents/button/Button";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { PiMedalLight } from "react-icons/pi";
import { useShoppingContext } from "../../context/ShoppingContext";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { numberWithCommas, calculateFinalPrice } from "../../utils/number.js";

function Product() {
  const { increaseProductQty, getProductQty, decreaseProductQty } =
    useShoppingContext();

  const { id } = useParams();
  const quantity = getProductQty(id);
  const iconMap = {
    warranty: <PiMedalLight size={22} />,
    free_shipping: <LiaShippingFastSolid size={22} />,
    return_policy: <TbTruckReturn size={22} />,
  };
  const [product, setproduct] = useState({});
  const [services, setServices] = useState({});

  useEffect(() => {
    async function getProductData() {
      const data = await getProduct(id);
      setproduct(data);
      setServices(data.services);
    }
    getProductData();
  }, []);
  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:gap-8 pt-4">
        <div className="flex flex-col lg:gap-3">
          <img src={product.image} />
        </div>
        <div className="flex grow flex-col lg:flex-row lg:gap-8">
          <div className="flex w-full grow flex-col">
            <h1 className="text-body-16 font-medium text-text-black">
              {product.title}
            </h1>
            <div className="mt-1 font-medium font-medium  lg:text-body-14 text-gray-500">
              {product.model}
            </div>
          </div>
          <div className="w-[316px] flex-col gap-2 lg:flex">
            <div className="min-h-[352px] w-[316px] flex-col justify-between gap-6 rounded border border-gray-300 bg-gray-100 px-3 py-5 shadow-sm lg:flex">
              <div className="flex-col gap-3 flex">
                {services &&
                  Object.entries(services).map(([key, value]) => (
                    <div
                      className="relative flex items-center gap-1.5 text-center text-gray-500"
                      key={key}
                    >
                      <span className="h-5 w-5 lg:h-6 lg:w-6">
                        {iconMap[key] || "ℹ️"}
                      </span>
                      {value.title}
                    </div>
                  ))}
              </div>

              <div className="flex  flex-col items-center gap-1 lg:gap-1.5 justify-center">
                <div className="flex items-center lg:gap-1">
                  <span className="px-2 text-center line-through text-gray-400 text-xl">
                    {numberWithCommas(product.price)}
                  </span>
                  <span className="w-[33px] rounded-md bg-red-700 text-center  font-medium text-white lg:w-10 inline-block ms-1">
                    {product.discount}٪
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-medium text-gray-900">
                    {calculateFinalPrice(product.price, product.discount)}

                    <span className="text-xs ms-0.5">تومان</span>
                  </span>
                </div>
              </div>
              {quantity === 0 ? (
                <div>
                  <Button
                    onClick={() => increaseProductQty(id)}
                    size="lg"
                    className="w-full cursor-pointer"
                  >
                    افزودن به سبد
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    className="cursor-pointer"
                    onClick={() => increaseProductQty(id)}
                  >
                    <GoPlus />
                  </Button>
                  <span className="px-3">{quantity}</span>{" "}
                  {/* Now using stored `quantity` */}
                  <Button
                    className="cursor-pointer"
                    onClick={() => decreaseProductQty(id)}
                  >
                    <FaMinus />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 inline-flex flex-col items-end gap-2  rounded border border-gray-300 bg-surface-solid-0 px-2 py-3 text-justify lg:gap-3">
        {product.description}
      </div>
    </Container>
  );
}

export default Product;
