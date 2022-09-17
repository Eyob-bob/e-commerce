import { createContext, useContext, useState } from "react";

const ShopContext = createContext(null);

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQtys, setTotalQtys] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const increase = () => {
    setQty((prev) => prev + 1);
  };

  const decrease = () => {
    setQty((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const onAdd = (product, quantity) => {
    setTotalQtys((prev) => prev + quantity);
    setTotalPrice((prev) => prev + product.price * quantity);

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
  const onRemove = (product) => {
    setTotalQtys((prev) => prev - 1);
    setTotalPrice((prev) => prev - product.price);

    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increase,
        decrease,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
        onRemove,
        totalQtys,
        setTotalQtys,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
