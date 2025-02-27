import { useAuthContext } from "../../../../context/AuthContext";
import Button from "../../../coreComponents/button/Button";
import { GoSignIn } from "react-icons/go";
import { Link } from "react-router";

function Login() {
  const { isLogin } = useAuthContext();
  return isLogin ? (
    <Link to="/dashboard">
      <Button
        size="lg"
        className="rounded font-bold flex items-center justify-center bg-transparent text-red-700 border border-red-700 px-4 py-2 cursor-pointer hover:bg-red-700 hover:!text-white"
      >
        <GoSignIn size={20} className="ml-3" />
        ورود به پنل کاربری
      </Button>
    </Link>
  ) : (
    <Link to="/login">
      <Button
        size="lg"
        className="rounded font-bold flex items-center justify-center bg-transparent text-red-700 border border-red-700 px-4 py-2 cursor-pointer hover:bg-red-700 hover:!text-white"
      >
        <GoSignIn size={20} className="ml-3" />
        ورود | ثبت نام
      </Button>
    </Link>
  );
}

export default Login;
