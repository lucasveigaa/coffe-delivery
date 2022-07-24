import traditionalCoffe from "../../assets/traditional-coffe.svg";
import cartWhiteBackPurpleDark from "../../assets/cart-white-back-purple-dark.svg";
import {
  DescriptionItem,
  DivAddToCart,
  DivItem,
  ItemInfos,
  TitleItem,
  TypeItem,
  ValueDiv,
} from "./styles";
import { Minus, Plus } from "phosphor-react";

export function ItemCart() {
  return (
    <DivItem>
      <img src={traditionalCoffe} />
      <TypeItem>TRADICIONAL</TypeItem>
      <TitleItem>Expresso Tradicional</TitleItem>
      <DescriptionItem>
        O tradicional café feito com água quente e grãos moídos
      </DescriptionItem>
      <ItemInfos>
        <ValueDiv>
          <span>R$</span>
          <strong>9,90</strong>
        </ValueDiv>
        <DivAddToCart>
          <div>
            <button>{<Minus />}</button>
            <span>1</span>
            <button>{<Plus />}</button>
          </div>
          <img src={cartWhiteBackPurpleDark} />
        </DivAddToCart>
      </ItemInfos>
    </DivItem>
  );
}
