import { Minus, Plus, Trash } from "phosphor-react";
import ImgExpressoTradicional from "../../../..//assets/expresso-tradicional.svg";
import {
  ButtonValueCart,
  DivAddAndRemoveItemCart,
  DivContainerItemCart,
  DivSubContainerItemCart,
  DivValueCart,
  DivValueItemCart,
  Main,
  SpanNameItemCart,
} from "./styled";

export function CartInformation() {
  return (
    <Main>
      <DivContainerItemCart>
        <DivSubContainerItemCart>
          <img src={ImgExpressoTradicional} />
          <div>
            <SpanNameItemCart>Expresso Tradicional</SpanNameItemCart>
            <DivAddAndRemoveItemCart>
              <button>{<Minus />}</button>
              <span>1</span>
              <button>{<Plus />}</button>

              <button>{<Trash />} REMOVER</button>
            </DivAddAndRemoveItemCart>
          </div>
        </DivSubContainerItemCart>
        <DivValueItemCart>
          <span>R$ 9,90</span>
        </DivValueItemCart>
      </DivContainerItemCart>
      <div>
        <DivValueCart>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </DivValueCart>
        <DivValueCart>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </DivValueCart>
        <DivValueCart>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </DivValueCart>
        <ButtonValueCart>CONFIRMAR PEDIDO</ButtonValueCart>
      </div>
    </Main>
  );
}
