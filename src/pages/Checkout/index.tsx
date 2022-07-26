import { CartInformation } from "./components/CartInformation";
import { CheckoutInformation } from "./components/CheckoutInformation";
import { Main, TitleCheckouts } from "./styled";

export function Checkout() {
  return (
    <Main>
      <div>
        <TitleCheckouts>Complete seu pedido</TitleCheckouts>
        <CheckoutInformation />
      </div>
      <div>
        <TitleCheckouts>Cafés selecionados</TitleCheckouts>
        <CartInformation />
      </div>
    </Main>
  );
}
