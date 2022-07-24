import bannerCoffeHome from "../../assets/banner-home.svg";
import { DivContainer, DivIcons, DivSubContainer, ImgCoffeBannerHome, SubTitle, Title } from "./styles";
import iconCartWhiteBackYellow from "../../assets/cart-white-back-yellow.svg";
import iconPackingWhiteBackGray from "../../assets/packing-white-back-gray.svg";
import iconCoffeWhiteBackPurple from "../../assets/coffe-white-back-purple.svg";
import timerWhiteBackYellow from "../../assets/timer-white-back-yellow.svg";

export function BannerHome() {
  return (
    <DivContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubTitle>
        <DivSubContainer>
          <DivIcons>
            <span>
              <img src={iconCartWhiteBackYellow} />
              Compra simples e segura
            </span>
            <span>
              <img src={iconPackingWhiteBackGray} />
              Embalagem mantém o café intacto
            </span>
          </DivIcons>
          <DivIcons>
            <span>
              <img src={timerWhiteBackYellow} />
              Entrega rápida e rastreada
            </span>
            <span>
              <img src={iconCoffeWhiteBackPurple} />O café chega fresquinho até
              você
            </span>
          </DivIcons>
        </DivSubContainer>
      </div>
      <ImgCoffeBannerHome src={bannerCoffeHome} />
    </DivContainer>
  );
}
