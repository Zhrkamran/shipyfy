import Button from "../../../coreComponents/button/Button";
import { GoSignIn } from "react-icons/go";

function Login() {
  return (
    <Button
      size="lg"
      className="flex items-center justify-center bg-transparent   text-red-700 hover:bg-red-700 hover:rounded cursor-pointer hover:text-white border"
    >
      <GoSignIn size={20} className="ml-3" />
      ورود | ثبت نام
    </Button>
  );
}

export default Login;
