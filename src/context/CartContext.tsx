import { createContext, useEffect, useState } from "react";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

type ValueType = {
  cartItems: Item[];
  addItem: (item: Item) => void;
};

export const CartContext = createContext<ValueType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Item[]>(() => {
    const localData = localStorage.getItem("cartItems");
    return localData ? (JSON.parse(localData) as Item[]) : [];
  });

  const addItem = (item: Item): void => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
