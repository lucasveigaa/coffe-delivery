import { createContext, PropsWithChildren, useState } from "react";
import { toast } from "react-toastify";
import { ProductWithAmount } from "../types";

interface CartContextType {
  cart: ProductWithAmount[];
  addToCart: (product: ProductWithAmount) => void;
  removeProductCart: (product: ProductWithAmount) => void;
  changeAmountCart: (product: ProductWithAmount) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ProductWithAmount[]>([]);

  function addToCart(product: ProductWithAmount) {
    const filteredCart = cart.filter(
      (item) => item.idProduct !== product.idProduct
    );

    if (product.amountProduct > 0) {
      setCart([...filteredCart, product]);
      toast.success("Produto adicionado no carrinho com sucesso!");
    }
  }
  function changeAmountCart(product: ProductWithAmount) {
    const filteredCart = cart.filter(
      (item) => item.idProduct !== product.idProduct
    );

    setCart([...filteredCart, product]);
  }

  function removeProductCart(product: ProductWithAmount) {
    const filteredCart = cart.filter((item) => item !== product);
    setCart(filteredCart);
    toast.warn("Produto deletado do carrinho com sucesso!")
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeProductCart, changeAmountCart }}>
      {children}
    </CartContext.Provider>
  );
}
