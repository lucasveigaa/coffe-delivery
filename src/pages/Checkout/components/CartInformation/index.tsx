import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
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
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <Main>
      <DivContainerItemCart>
        {cart.map((product) => {
          return (
            <div>
              <DivSubContainerItemCart>
                <img src={product.imgProduct} />
                <div>
                  <SpanNameItemCart>{product.titleProduct}</SpanNameItemCart>
                  <DivAddAndRemoveItemCart>
                    <button>{<Minus />}</button>
                    <span>{product.amountProduct}</span>
                    <button>{<Plus />}</button>

                    <button>{<Trash />} REMOVER</button>
                  </DivAddAndRemoveItemCart>
                </div>
                <DivValueItemCart>
                  <span>R$ 9,90</span>
                </DivValueItemCart>
              </DivSubContainerItemCart>
            </div>
          );
        })}
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
        <Link to="/success">
          <ButtonValueCart>CONFIRMAR PEDIDO</ButtonValueCart>
        </Link>
      </div>
    </Main>
  );
}
