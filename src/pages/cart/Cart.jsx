import Container from "../../components/coreComponents/container/Container";
import CartItem from "../../components/sharedComponents/cart/CartItem";
import { useShoppingContext } from "../../context/ShoppingContext";

function Cart() {
  const { cartItems } = useShoppingContext();
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
            <div className="flex justify-between">
              <span> قیمت کالاها:</span>
              <span>
                <span>تومان</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
