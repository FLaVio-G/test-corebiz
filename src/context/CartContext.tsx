import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext({
  cartCount: 0,
  incrementCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState<number>(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    return storedCartCount ? parseInt(storedCartCount, 10) : 0;
  });

  const incrementCart = () => {
    setCartCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("cartCount", newCount.toString());
      return newCount;
    });
  };

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount.toString());
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, incrementCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
