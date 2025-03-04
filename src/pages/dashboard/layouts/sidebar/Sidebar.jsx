import logo from "/images/logo.png";
import Button from "../../../../components/coreComponents/button/Button";
import Dropdown from "../../../../components/coreComponents/dropdown/Dropdown";
import Cookies from "js-cookie";
import { Navigate } from "react-router";
import { menuItems } from "../../../../routes/routes.constant";

function Sidebar() {
  const handleLogout = () => {
    Cookies.remove("token");
    location.reload();
    <Navigate to="/" />;
  };
  return (
    <aside className="sidebar fixed top-0 right-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-auto border-l border-gray-200 bg-white px-5 transition-all duration-300 lg:static lg:translate-x-0 dark:border-gray-800 dark:bg-black -translate-x-full">
      <div className="flex items-center gap-2 pt-8 sidebar-header pb-7 justify-between">
        <a href="">
          <span className="logo">
            <img src={logo} />
          </span>
        </a>
      </div>
      <div className="block mb-3">
        <Dropdown title="فروشگاه" items={menuItems} />
      </div>
      <Button onClick={handleLogout}>خروج از پنل کاربری</Button>
    </aside>
  );
}

export default Sidebar;
