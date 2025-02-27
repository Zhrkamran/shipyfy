import { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (Cookies.get("token")) {
      setIsLogin(true);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
