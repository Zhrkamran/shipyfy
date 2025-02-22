import { useEffect, useState } from "react";
import Container from "../../components/coreComponents/container/Container";
import CartItem from "../../components/sharedComponents/cart/CartItem";
import { useShoppingContext } from "../../context/ShoppingContext";
import { checkDiscount, getProducts } from "../../services/Api";
import { numberWithCommas } from "../../utils/number";
import Input from "../../components/coreComponents/input/Input";
import Button from "../../components/coreComponents/button/Button";

function Cart() {
  const { cartItems, cartQty } = useShoppingContext();
  const [products, setProducts] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    async function getProductsData() {
      const data = await getProducts();
      setProducts(data);
    }
    getProductsData();
  }, []);

  useEffect(() => {
    if (!discountCode.trim()) {
      setDiscountPercent(0);
    }
  }, [discountCode]);

  let totalPrice = cartItems.reduce((total, item) => {
    let selectedProduct = products.find((product) => product.id == item.id);
    return total + selectedProduct?.price * item.qty;
  }, 0);

  let totalDiscount = cartItems.reduce((totalDiscount, item) => {
    let selectedProduct = products.find((product) => product.id == item.id);
    if (selectedProduct) {
      return (
        totalDiscount +
        ((selectedProduct.price * selectedProduct.discount) / 100) * item.qty
      );
    }
    return totalDiscount;
  }, 0);

  const submitDiscount = async () => {
    if (!discountCode.trim()) {
      setDiscountPercent(0);
      return;
    }
    const data = await checkDiscount(discountCode);
    if (data) {
      setDiscountPercent(data[0].percent);
    } else {
      setDiscountPercent(0);
    }
  };

  let totalcart = totalPrice - totalDiscount;
  let couponDiscountAmount = (totalcart * discountPercent) / 100;
  let finalTotal = totalcart - couponDiscountAmount;

  return (
    <Container>
      <div className="mt-6 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9 md:pe-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="col-span-12 lg:col-span-3 lg:w-[300px]">
          <div className="min-h-[352px] w-[316px] flex-col justify-between gap-6 rounded border border-gray-300 bg-gray-100 px-3 py-5 shadow-sm lg:flex">
            <div className="w-full">
              <div className="flex justify-between text-gray-400">
                <span> قیمت کالاها:({cartQty})</span>
                <span className="text-xl">
                  {numberWithCommas(totalPrice)}
                  <span className="text-sm ms-1">تومان</span>
                </span>
              </div>
              <div className="flex justify-between text-red-700">
                <span> تخفیف کالاها</span>
                <span className="text-xl">
                  {numberWithCommas(totalDiscount)}
                  <span className="text-sm ms-1">تومان</span>
                </span>
              </div>
              <div className="flex justify-between mt-3 pt-3 border-t-1 border-gray-300">
                <span> جمع سبد خرید</span>
                <span className="text-xl">
                  {numberWithCommas(totalcart)}
                  <span className="text-sm ms-1">تومان</span>
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <Button className="rounded bg-red-700 hover:bg-red-900 text-white font-bold w-full cursor-pointer px-2 py-3">
                  ثبت سفارش
                </Button>
              </div>
              <div className=" mt-3 pt-3 border-t-1 border-gray-300">
                <div className="flex mt-5 items-center w-full">
                  <Input
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="کد تخفیف را وارد نمایید"
                    className="w-[calc(100%-4.5rem)] h-7 px-3 rounded"
                  />
                  <Button onClick={submitDiscount}>بررسی کد</Button>
                </div>
                <div className="flex justify-between mt-3 pt-3 border-t-1 border-gray-300">
                  <span> جمع نهایی سبد خرید </span>
                  <span className="text-xl">
                    {numberWithCommas(finalTotal)}
                    <span className="text-sm ms-1">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
