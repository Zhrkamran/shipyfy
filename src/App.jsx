import AuthContextProvider from "./context/AuthContext";
import ShoppingContextProvider from "./context/ShoppingContext";
import Approutes from "./routes/Approutes";

function App() {
  return (
    <AuthContextProvider>
      <ShoppingContextProvider>
        <Approutes />
      </ShoppingContextProvider>
    </AuthContextProvider>
  );
}

export default App;
