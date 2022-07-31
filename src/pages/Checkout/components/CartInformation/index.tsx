import { Minus, Plus, ShoppingCartSimple, Trash } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { CartContext } from "../../../../contexts/CartContext";
import { ProductWithAmount } from "../../../../types";
import {
  ButtonValueCart,
  DivAddAndRemoveItemCart,
  DivContainerCartEmpty,
  DivContainerItemCart,
  DivSubContainerItemCart,
  DivValueCart,
  DivValueItemCart,
  Main,
  SpanNameItemCart,
} from "./styled";

export function CartInformation() {
  const { cart, changeAmountCart, removeProductCart } = useContext(CartContext);
  const theme = useTheme()

  let totalProductValues = cart.reduce(
    (acum, actualValue) =>
      acum + actualValue.valueProduct * actualValue.amountProduct,
    0
  );

  function formatValueProduct(productValue: number) {
    return productValue.toFixed(2).toString().replace(".", ",");
  }

  function handleDecreaseAmount(product: ProductWithAmount) {
    const newProductAmount = {
      ...product,
      amountProduct: product.amountProduct - 1,
    };

    changeAmountCart(newProductAmount);
  }

  function handleIncreaseAmount(product: ProductWithAmount) {
    const newProductAmount = {
      ...product,
      amountProduct: product.amountProduct + 1,
    };

    changeAmountCart(newProductAmount);
  }

  return (
    <Main>
      {Object.keys(cart).length <= 0 ? (
        <DivContainerCartEmpty>
          <span>
            Carrinho de compras vazio <ShoppingCartSimple color={theme.purple} size={22}/>
          </span>
          <Link to="/">Adicionar produtos</Link>
        </DivContainerCartEmpty>
      ) : (
        <>
          <DivContainerItemCart>
            {cart.map((product) => {
              return (
                <div>
                  <DivSubContainerItemCart>
                    <img src={product.imgProduct} />
                    <div>
                      <SpanNameItemCart>
                        {product.titleProduct}
                      </SpanNameItemCart>
                      <DivAddAndRemoveItemCart>
                        <button onClick={() => handleDecreaseAmount(product)}>
                          {<Minus />}
                        </button>
                        <span>{product.amountProduct}</span>
                        <button onClick={() => handleIncreaseAmount(product)}>
                          {<Plus />}
                        </button>

                        <button onClick={() => removeProductCart(product)}>
                          {<Trash />} REMOVER
                        </button>
                      </DivAddAndRemoveItemCart>
                    </div>
                    <DivValueItemCart>
                      <span>
                        R$
                        {formatValueProduct(
                          product.valueProduct * product.amountProduct
                        )}
                      </span>
                    </DivValueItemCart>
                  </DivSubContainerItemCart>
                </div>
              );
            })}
          </DivContainerItemCart>
          <div>
            <DivValueCart>
              <span>Total de itens</span>
              <span>R${formatValueProduct(totalProductValues)}</span>
            </DivValueCart>
            <DivValueCart>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </DivValueCart>
            <DivValueCart>
              <strong>Total</strong>
              <strong>R${formatValueProduct(totalProductValues + 3.5)}</strong>
            </DivValueCart>
            <Link to="/success">
              <ButtonValueCart>CONFIRMAR PEDIDO</ButtonValueCart>
            </Link>
          </div>
        </>
      )}
    </Main>
  );
}
