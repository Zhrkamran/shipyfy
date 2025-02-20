import Layouts from "./components/sharedComponents/layouts/Layouts";
import ShoppingContextProvider from "./context/ShoppingContext";
import Approutes from "./routes/Approutes";

function App() {
  return (
    <ShoppingContextProvider>
      <Layouts>
        <Approutes />
      </Layouts>
    </ShoppingContextProvider>
  );
}

export default App;
