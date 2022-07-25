import { CartInformation } from "./components/CartInformation";
import { CheckoutInformation } from "./components/CheckoutInformation";

export function Checkout() {
  return (
    <main>
      <div>
        <strong>Complete seu pedido</strong>
        <CheckoutInformation />
      </div>
      {/* <div>
        <strong>Cafés selecionados</strong>
        <CartInformation /> */}
      {/* </div> */}
    </main>
  );
}
