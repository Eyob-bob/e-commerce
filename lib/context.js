import { createContext, useContext, useState } from "react";

const ShopContext = createContext(null);

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty((prev) => prev + 1);
  };

  const decrease = () => {
    setQty((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const onAdd = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };
  return (
    <ShopContext.Provider
      value={{ qty, increase, decrease, showCart, cartItems, onAdd }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
