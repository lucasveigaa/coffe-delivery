import cartWhiteBackPurpleDark from "../../../../assets/cart-white-back-purple-dark.svg";
import {
  ButtonIncreaseAndDecreaseItensCart,
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
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { Product } from "../../../../types";

export function ItemCart(product: Product) {
  const [amountProduct, setAmountProduct] = useState(0);
  const { descriptionProduct, imgProduct, titleProduct, typeProduct } = product;

  const arrTypeItem = typeProduct?.split(",");

  const { addToCart } = useContext(CartContext);

  const newProduct = {
    ...product,
    amountProduct,
  };

  function handleIncreaseAmountItem() {
    setAmountProduct((state) => state + 1);
  }

  function handleDecreaseAmountItem() {
    setAmountProduct((state) => state - 1);
  }

  return (
    <DivItem>
      <ImgCoffe src={imgProduct} />
      <DivTypeItem>
        {arrTypeItem?.map((item: string) => {
          return <TypeItem key={item}>{item}</TypeItem>;
        })}
      </DivTypeItem>
      <TitleItem>{titleProduct}</TitleItem>
      <DescriptionItem>{descriptionProduct}</DescriptionItem>
      <ItemInfos>
        <ValueDiv>
          <span>R$</span>
          <strong>9,90</strong>
        </ValueDiv>
        <DivAddToCart>
          <div>
            <ButtonIncreaseAndDecreaseItensCart
              onClick={handleDecreaseAmountItem}
            >
              {<Minus />}
            </ButtonIncreaseAndDecreaseItensCart>
            <span>{amountProduct}</span>
            <ButtonIncreaseAndDecreaseItensCart
              onClick={handleIncreaseAmountItem}
            >
              {<Plus />}
            </ButtonIncreaseAndDecreaseItensCart>
          </div>
          <button onClick={() => addToCart(newProduct)}>
            <img src={cartWhiteBackPurpleDark} />
          </button>
        </DivAddToCart>
      </ItemInfos>
    </DivItem>
  );
}
