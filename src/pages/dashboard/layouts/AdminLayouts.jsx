
import Cookies from "js-cookie";
import { Navigate } from "react-router";
import Button from "../../../components/coreComponents/button/Button";




const AdminLayouts = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    location.reload();
    <Navigate to="/" />
  };
  return (
    <Button onClick={handleLogout}>
    خروج از پنل کاربری
   </Button>
  );
};

export default AdminLayouts;
