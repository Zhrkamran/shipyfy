import { useContext, createContext } from "react";
import { useLocalStorage } from "../../src/hooks/useLocalStorage";
export const shoppingContext = createContext({});

export const useShoppingContext = () => {
  return useContext(shoppingContext);
};

function ShoppingContextProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const increaseProductQty = (id) => {
    setCartItems((currentItems) => {
      let isProductNotExist =
        currentItems.find((item) => item.id == id) == null;

      if (isProductNotExist) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) =>
          item.id == id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  };

  const getProductQty = (id) => {
    const item = cartItems.find((item) => item.id == id);
    return item ? item.qty : 0;
  };

  const decreaseProductQty = (id) => {
    setCartItems((currentItems) => {
      let isProductExist = currentItems.find((item) => item.id == id);

      if (!isProductExist) {
        return currentItems;
      }

      if (isProductExist.qty === 1) {
        return currentItems.filter((item) => item.id !== id); 
      } else {
        return currentItems.map((item) =>
          item.id == id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  };

  const cartQty = (cartItems).reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );

  const removeProductFromCart = (id) => {
    setCartItems((currentItems) => {
      if (!currentItems || currentItems.length === 0) return [];
      return currentItems.filter((item) => item.id != id);
    });
  };

  return (
    <shoppingContext.Provider
      value={{
        cartItems,
        increaseProductQty,
        getProductQty,
        decreaseProductQty,
        cartQty,
        removeProductFromCart,
      }}
    >
      {children}
    </shoppingContext.Provider>
  );
}

export default ShoppingContextProvider;
