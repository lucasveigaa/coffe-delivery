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

export function Home() {
  return (
    <>
      <BannerHome />
      <TitleMain>Nossos cafés</TitleMain>
      <MainItens>
        <ItemCart
          imgItem={ImgExpressoTradicional}
          typeItem="TRADICIONAL"
          titleItem="Expresso Tradicional"
          descriptionItem="O tradicional café feito com água quente e grãos moídos
"
        />
        <ItemCart
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
"
        />
        <ItemCart
          imgItem={ImgExpressoCremoso}
          typeItem="TRADICIONAL"
          titleItem="Expresso Cremoso"
          descriptionItem="Café expresso tradicional com espuma cremosa
"
        />
        <ItemCart
          imgItem={ImgExpressoGelado}
          typeItem="TRADICIONAL, GELADO"
          titleItem="Expresso Gelado"
          descriptionItem="Bebida preparada com café expresso e cubos de gelo
"
        />
        <ItemCart
          imgItem={ImgCafeComLeite}
          typeItem="TRADICIONAL, COM LEITE"
          titleItem="Café com leite"
          descriptionItem="Meio a meio de expresso tradicional com leite vaporizado
"
        />
        <ItemCart
          imgItem={ImgLatte}
          typeItem="TRADICIONAL, COM LEITE"
          titleItem="Latte"
          descriptionItem="Uma dose de café expresso com o dobro de leite e espuma cremosa
"
        />
        <ItemCart
          imgItem={ImgCapuccino}
          typeItem="TRADICIONAL, COM LEITE"
          titleItem="Capuccino"
          descriptionItem="Bebida com canela feita de doses iguais de café, leite e espuma
"
        />
        <ItemCart
          imgItem={ImgMacciato}
          typeItem="TRADICIONAL, COM LEITE"
          titleItem="Macchiato"
          descriptionItem="Café expresso misturado com um pouco de leite quente e espuma
"
        />
        <ItemCart
          imgItem={ImgMocaccino}
          typeItem="TRADICIONAL, COM LEITE"
          titleItem="Mocaccino"
          descriptionItem="Café expresso com calda de chocolate, pouco leite e espuma
"
        />
        <ItemCart
          imgItem={ImgChocolateQuente}
          typeItem="ESPECIAL, COM LEITE"
          titleItem="Chocolate Quente"
          descriptionItem="Bebida feita com chocolate dissolvido no leite quente e café
"
        />
        <ItemCart
          imgItem={ImgCubano}
          typeItem="ESPECIAL, ALCOÓLICO, GELADO"
          titleItem="Cubano"
          descriptionItem="Drink gelado de café expresso com rum, creme de leite e hortelã
"
        />
        <ItemCart
          imgItem={ImgHavaiano}
          typeItem="ESPECIAL"
          titleItem="Havaiano"
          descriptionItem="Bebida adocicada preparada com café e leite de coco
"
        />
        <ItemCart
          imgItem={ImgArabe}
          typeItem="ESPECIAL"
          titleItem="Árabe"
          descriptionItem="Bebida preparada com grãos de café árabe e especiarias
"
        />
        <ItemCart
          imgItem={ImgIrlandes}
          typeItem="ESPECIAL, ALCOÓLICO"
          titleItem="Irlandês"
          descriptionItem="Bebida a base de café, uísque irlandês, açúcar e chantilly
"
        />
      </MainItens>
    </>
  );
}
