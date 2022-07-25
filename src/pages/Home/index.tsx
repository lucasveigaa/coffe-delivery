import { ItemCart } from "./components/ItemCart";
import { MainItens, TitleMain } from "./styled";

import ImgExpressoTradicional from "../../assets/expresso-tradicional.svg";
import ImgExpressoAmericano from "../../assets/expresso-americano.svg";
import { BannerHome } from "./components/BannerHome";

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
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
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
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
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
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
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
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
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
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
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
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
"
        />
        <ItemCart
          imgItem={ImgExpressoAmericano}
          typeItem="TRADICIONAL"
          titleItem="Expresso Americano"
          descriptionItem="Expresso diluído, menos intenso que o tradicional
"
        />
      </MainItens>
    </>
  );
}
