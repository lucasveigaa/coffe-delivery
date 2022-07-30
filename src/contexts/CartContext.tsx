import { createContext, PropsWithChildren, useState } from "react";
import { ProductWithAmount } from "../types";

interface CartContextType {
  cart: ProductWithAmount[];
  addToCart: (product: ProductWithAmount) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ProductWithAmount[]>([]);

  function addToCart(product: ProductWithAmount) {
    const filteredCart = cart.filter(
      (item) => item.idProduct !== product.idProduct
    );
    setCart([...filteredCart, product]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
