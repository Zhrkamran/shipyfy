import Layouts from "../components/sharedComponents/layouts/Layouts";
import Cart from "../pages/cart/Cart";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Product from "../pages/product/Product";
import Store from "../pages/store/Store";

export const routes = [
  {
    path: "/",
    element: (
      <Layouts>
        <Home />
      </Layouts>
    ),
    isPrivat: false,
  },
  {
    path: "/store",
    element: (
      <Layouts>
        <Store />
      </Layouts>
    ),
    isPrivat: false,
  },
  {
    path: "/product/:id",
    element: (
      <Layouts>
        <Product />
      </Layouts>
    ),
    isPrivat: false,
  },
  {
    path: "/cart",
    element: (
      <Layouts>
        <Cart />
      </Layouts>
    ),
    isPrivat: false,
  },
  {
    path: "/blog",
    element: (
      <Layouts>
        <Home />
      </Layouts>
    ),
    isPrivat: false,
  },
  {
    path: "/about",
    element: (
      <Layouts>
        <Home />
      </Layouts>
    ),
    isPrivat: false,
  },
  {
    path: "/contact",
    element: (
      <Layouts>
        <Home />
      </Layouts>
    ),
    isPrivat: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivat: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    isPrivat: true,
  },
];
export const menuItems = [
  { label: "داشبورد", route: "/dashboard" },
  { label: "تحلیل‌ها", route: "/analytics" },
  { label: "تنظیمات", route: "/settings" },
];
