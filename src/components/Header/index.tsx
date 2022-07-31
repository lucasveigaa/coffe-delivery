import {
  DivCartHeader,
  DivLocalization,
  HeaderContainer,
  ImgCartHeader,
  NavContainer,
} from "./styles";
import coffeLogo from "../../assets/coffe-logo.svg";
import { Link } from "react-router-dom";

import iconCartFullYellowDark from "../../assets/icon-cart-full-yellow-dark.svg";
import iconMapFullPurple from "../../assets/icon-map-full-purple-header.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);
  const amountItensCart = cart.reduce((acum, actualValue) => acum + actualValue.amountProduct, 0)

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
        <DivCartHeader>
          <Link to="/checkout">
            <ImgCartHeader src={iconCartFullYellowDark} />
            <span>{amountItensCart}</span>
          </Link>
        </DivCartHeader>
      </NavContainer>
    </HeaderContainer>
  );
}
