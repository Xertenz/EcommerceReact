import { createContext, useEffect, useState } from "react";

interface Item {
  id: number;
  images: string[];
  title?: string;
  price: number;
  availabilityStatus?: string;
  brand?: string;
  description?: string;
  stock?: string;
  category?: string;
  quantity: number;
}

type ValueType = {
  cartItems: Item[];
  addItem: (item: Item) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  deleteItem: (id: number) => void;
  favorites: Item[];
  addFavItem: (item: Item) => void;
  removeFavItem: (item: Item) => void;
};

export const CartContext = createContext<ValueType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Item[]>(() => {
    const localFav = localStorage.getItem("favorites");
    return localFav ? (JSON.parse(localFav) as Item[]) : [];
  });

  const addFavItem = (item: Item) => {
    const favItemExist = favorites.find((favItem) => favItem.id == item.id);
    if (!favItemExist) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavItem = (item: Item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favItem) => favItem.id != item.id)
    );
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const [cartItems, setCartItems] = useState<Item[]>(() => {
    const localData = localStorage.getItem("cartItems");
    return localData ? (JSON.parse(localData) as Item[]) : [];
  });

  const addItem = (newItem: Item): void => {
    const itemExist = cartItems.find((item) => item.id === newItem.id);
    if (!itemExist)
      setCartItems((prevItems) => [...prevItems, { ...newItem, quantity: 1 }]);
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        favorites,
        addFavItem,
        removeFavItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
