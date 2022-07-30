import { ItemCart } from "./components/ItemCart";
import { MainItens, TitleMain } from "./styled";

import { BannerHome } from "./components/BannerHome";

import ImgExpressoTradicional from "../../assets/01-expresso-tradicional.svg";
import ImgExpressoAmericano from "../../assets/02-expresso-americano.svg";
import ImgExpressoCremoso from "../../assets/03-expresso-cremoso.svg";
import ImgExpressoGelado from "../../assets/04-expresso-gelado.svg";
import ImgCafeComLeite from "../../assets/05-cafe-com-leite.svg";
import ImgLatte from "../../assets/06-latte.svg";
import ImgCapuccino from "../../assets/07-capuccino.svg";
import ImgMacciato from "../../assets/08-macciato.svg";
import ImgMocaccino from "../../assets/09-mocaccino.svg";
import ImgChocolateQuente from "../../assets/10-chocolate-quente.svg";
import ImgCubano from "../../assets/11-cubano.svg";
import ImgHavaiano from "../../assets/12-havaiano.svg";
import ImgArabe from "../../assets/13-arabe.svg";
import ImgIrlandes from "../../assets/14-irlandes.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const coffeItens = [
  {
    idProduct: 1,
    imgProduct: ImgExpressoTradicional,
    typeProduct: "TRADICIONAL",
    titleProduct: "Expresso Tradicional",
    descriptionProduct:
      "O tradicional café feito com água quente e grãos moídos",
  },
  {
    idProduct: 2,
    imgProduct: ImgExpressoTradicional,
    typeProduct: "TRADICIONAL",
    titleProduct: "Expresso Tradicional",
    descriptionProduct: "O tradicional café feito",
  },
  {
    idProduct: 3,
    imgProduct: ImgExpressoTradicional,
    typeProduct: "TRADICIONAL, GELADO",
    titleProduct: "Expresso Tradicional",
    descriptionProduct: "O tradicional café feito com água quente e grãos",
  },
];

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
