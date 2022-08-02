import iconMapPinFullPurple from "../../assets/icon-map-pin-full-purple.svg";
import iconTimerFullYellow from "../../assets/icon-timer-full-yellow.svg";
import iconCashFullYellowDark from "../../assets/icon-cash-full-yellow-dark.svg";
import imgIllustration from "../../assets/illustration-page-success.svg";
import {
  DivContainer,
  DivInfos,
  DivSubContainer,
  DivSubInfos,
  ImgIllustration,
  Main,
  SpanSubtitle,
} from "./styled";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { useContext } from "react";

export function Success() {

  const { checkoutInformation } = useContext(CheckoutContext)

  return (
    <Main>
      <DivContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <SpanSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </SpanSubtitle>
        <DivSubContainer>
          <DivInfos>
            <img src={iconMapPinFullPurple} />
            <DivSubInfos>
              <span>
                Entrega em <strong>{checkoutInformation.street}, {checkoutInformation.num}</strong>
              </span>
              <span>{checkoutInformation.city} - {checkoutInformation.uf}</span>
            </DivSubInfos>
          </DivInfos>
          <DivInfos>
            <img src={iconTimerFullYellow} />
            <DivSubInfos>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </DivSubInfos>
          </DivInfos>
          <DivInfos>
            <img src={iconCashFullYellowDark} />
            <DivSubInfos>
              <span>Pagamento na entrega</span>
              <strong>{checkoutInformation.paymentMethod}</strong>
            </DivSubInfos>
          </DivInfos>
        </DivSubContainer>
      </DivContainer>

        <ImgIllustration src={imgIllustration} />

    </Main>
  );
}
