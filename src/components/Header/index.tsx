import { DivContainer, DivLocalization, HeaderContainer } from "./styles";
import coffeLogo from "../../assets/coffe-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><img src={coffeLogo} /></Link>
      <DivContainer>
        <DivLocalization>
          <MapPin />
          <span>Minas Gerais, MG</span>
        </DivLocalization>
        <DivLocalization>
          <Link to="/checkout"><ShoppingCart size={22} /></Link>
        </DivLocalization>
      </DivContainer>
    </HeaderContainer>
  );
}
