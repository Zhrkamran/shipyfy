import { useState } from "react";
import Button from "../../components/coreComponents/button/Button";
import Input from "../../components/coreComponents/input/Input";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // const { data, error } = await login(email, password);

    const response = {
      token: "11222nhjb gfvgycrtdcfx",
      expires: 7,
    };
    if (!response.token) {
      console.error("توکن دریافت نشد!");
      return;
    }

    Cookies.set("token", response.token, response.expires);
    location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          ورود
        </h2>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            ایمیل
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            رمز عبور
          </label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
            required
          />
        </div>

        <Button
          onClick={handleSubmit}
          size="lg"
          className="w-full bg-red-700 hover:bg-red-900  font-bold  rounded-lg transition text-white"
        >
          ورود
        </Button>

        <div className="text-center mt-3">
          <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
            رمز عبور را فراموش کرده‌اید؟
          </a>
        </div>

        <div className="text-center text-sm">
          حساب کاربری ندارید؟{" "}
          <a href="#" className="text-blue-600 hover:underline">
            ثبت‌نام کنید
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
