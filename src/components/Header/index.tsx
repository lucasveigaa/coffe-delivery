import { DivLocalization, HeaderContainer, ImgCartHeader, NavContainer } from "./styles";
import coffeLogo from "../../assets/coffe-logo.svg";
import { Link } from "react-router-dom";

import iconCartFullYellowDark from "../../assets/icon-cart-full-yellow-dark.svg";
import iconMapFullPurple from "../../assets/icon-map-full-purple-header.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeLogo} />
      </Link>
      <NavContainer>
        <DivLocalization>
          <img src={iconMapFullPurple} />
          <span>Minas Gerais, MG</span>
        </DivLocalization>
        <div>
          <Link to="/checkout">
            <ImgCartHeader src={iconCartFullYellowDark} />
          </Link>
        </div>
      </NavContainer>
    </HeaderContainer>
  );
}
