import cartWhiteBackPurpleDark from "../../../../assets/cart-white-back-purple-dark.svg";
import {
  DescriptionItem,
  DivAddToCart,
  DivItem,
  DivTypeItem,
  ImgCoffe,
  ItemInfos,
  TitleItem,
  TypeItem,
  ValueDiv,
} from "./styles";
import { Minus, Plus } from "phosphor-react";
import { Link } from "react-router-dom";

interface ItemCartProps {
  imgItem: string;
  titleItem: string;
  typeItem: string;
  descriptionItem: string;
}

export function ItemCart({
  imgItem,
  titleItem,
  typeItem,
  descriptionItem,
}: ItemCartProps) {
  const arrTypeItem = typeItem?.split(",");
  return (
    <DivItem>
      <ImgCoffe src={imgItem} />
      <DivTypeItem>
        {arrTypeItem?.map((item) => {
          return <TypeItem>{item}</TypeItem>;
        })}
      </DivTypeItem>
      <TitleItem>{titleItem}</TitleItem>
      <DescriptionItem>{descriptionItem}</DescriptionItem>
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
          <Link to="/checkout"><img src={cartWhiteBackPurpleDark} /></Link>
        </DivAddToCart>
      </ItemInfos>
    </DivItem>
  );
}
