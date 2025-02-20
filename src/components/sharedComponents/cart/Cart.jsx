import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useShoppingContext } from "../../../context/ShoppingContext";
import { Link } from "react-router";

function Cart() {
  const { cartQty } = useShoppingContext();
  return (
    <Link to="/cart" className="relative">
      <HiOutlineShoppingBag size={25} />
      <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-red-700 rounded-full text-white text-center text-base/4">
        {cartQty}
      </span>
    </Link>
  );
}

export default Cart;
