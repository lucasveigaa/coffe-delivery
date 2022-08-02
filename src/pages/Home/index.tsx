import { ItemCart } from "./components/ItemCart";
import { MainItens, TitleMain } from "./styled";
import { BannerHome } from "./components/BannerHome";
import { coffeItens } from "../../itensCart";

export function Home() {

  return (
    <>
      <BannerHome />
      <TitleMain>Nossos cafés</TitleMain>
      <MainItens>
        {coffeItens.map((product) => (
          <ItemCart key={product.idProduct} {...product} />
        ))}
      </MainItens>
    </>
  );
}
