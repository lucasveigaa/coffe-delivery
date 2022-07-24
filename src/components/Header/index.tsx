import { DivContainer, DivLocalization, HeaderContainer } from "./styles";
import coffeLogo from "../../assets/coffe-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo} />
      <DivContainer>
        <DivLocalization>
          <MapPin />
          <span>Minas Gerais, MG</span>
        </DivLocalization>
        <DivLocalization>
          <ShoppingCart size={22} />
        </DivLocalization>
      </DivContainer>
    </HeaderContainer>
  );
}
