import { ItemCart } from "./components/ItemCart";
import { MainItens, TitleMain } from "./styled";

import { BannerHome } from "./components/BannerHome";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { coffeItens } from "../../itensCart";

export function Home() {
  const cart = useContext(CartContext);

  return (
    <>
      <BannerHome />
      <TitleMain>Nossos cafés</TitleMain>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <MainItens>
        {coffeItens.map((product) => (
          <ItemCart key={product.idProduct} {...product} />
        ))}
      </MainItens>
    </>
  );
}
