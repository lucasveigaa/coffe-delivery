import { createContext, PropsWithChildren, useState } from "react";
import { toast } from "react-toastify";
import { ProductWithAmount } from "../types";

import _ from "lodash";

interface CartContextType {
  cart: ProductWithAmount[];
  addToCart: (product: ProductWithAmount) => void;
  removeProductCart: (product: ProductWithAmount) => void;
  changeAmountCart: (product: ProductWithAmount) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const CartSavedOnLocalStorage = JSON.parse(
    localStorage.getItem("cart-coffe-delivery:1-0")!
  );

  const [cart, setCart] = useState<ProductWithAmount[]>(
    CartSavedOnLocalStorage || []
  );

  function addToCart(product: ProductWithAmount) {
    const filteredCart = cart.filter(
      (item) => item.idProduct !== product.idProduct
    );

    if (product.amountProduct > 0) {
      setCart([...filteredCart, product]);
      toast.success("Produto adicionado no carrinho com sucesso!");
    }
  }

  function removeProductCart(product: ProductWithAmount) {
    const filteredCart = cart.filter((item) => item !== product);
    setCart(filteredCart);
  }

  function changeAmountCart(product: ProductWithAmount) {
    if (product.amountProduct <= 0) {
      toast.warning("Quantidade não pode ser 0");
      return;
    }

    const clonedArray = _.clone(cart);

    const newCloneArrayWithChangedAmount = clonedArray.map((item) => {
      if (item.idProduct === product.idProduct) {
        return product;
      }
      return item;
    });

    setCart(newCloneArrayWithChangedAmount);
  }

  if (cart.length > 0) {
    localStorage.setItem("cart-coffe-delivery:1-0", JSON.stringify(cart));
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeProductCart, changeAmountCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
