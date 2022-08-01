import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  DivAddress,
  DivInput,
  DivInputRadio,
  DivTitleSubtitleAddress,
  InputCepNumBairro,
  DivComplemento,
  InputRuaCidade,
  InputTypeRadio,
  InputUF,
  LabelInputRadio,
  SpanOpcional,
  SubTitleDivAddress,
  TitleDivAddress,
  InputComplemento
} from "./styled";

import { useTheme } from "styled-components";

export function CheckoutInformation() {
  const theme = useTheme();
  return (
    <div>
      <DivAddress>
        <DivTitleSubtitleAddress>
          <MapPinLine color={theme.yellow} />
          <div>
            <TitleDivAddress>Endereço de Entrega</TitleDivAddress>
            <SubTitleDivAddress>
              Informe o endereço onde deseja receber seu pedido
            </SubTitleDivAddress>
          </div>
        </DivTitleSubtitleAddress>
        <div>
          <InputCepNumBairro placeholder="CEP" type="text" />
          <InputRuaCidade placeholder="Rua" type="text" />
          <DivInput>
            <InputCepNumBairro placeholder="Número" type="text" />
            <DivComplemento>
              <InputComplemento
                placeholder="Complemento"
                type="text"
              />
              <SpanOpcional>Opcional</SpanOpcional>
            </DivComplemento>
          </DivInput>
          <DivInput>
            <InputCepNumBairro placeholder="Bairro" type="text" />
            <InputRuaCidade placeholder="Cidade" type="text" />
            <InputUF placeholder="UF" type="text" />
          </DivInput>
        </div>
      </DivAddress>
      <DivAddress>
        <DivTitleSubtitleAddress>
          <CurrencyDollar />
          <div>
            <TitleDivAddress>Pagamento</TitleDivAddress>
            <SubTitleDivAddress>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </SubTitleDivAddress>
          </div>
        </DivTitleSubtitleAddress>

        <DivInputRadio>
          <InputTypeRadio
            type="radio"
            name="payment-form"
            id="credit-card"
            value="CARTÃO DE CRÉDITO"
          />
          <LabelInputRadio htmlFor="credit-card">
            <CreditCard /> CARTÃO DE CRÉDITO
          </LabelInputRadio>
          <InputTypeRadio
            type="radio"
            name="payment-form"
            id="debit-card"
            value="CARTÃO DE DÉBITO"
          />
          <LabelInputRadio htmlFor="debit-card">
            <Bank /> CARTÃO DE DÉBITO
          </LabelInputRadio>
          <InputTypeRadio
            type="radio"
            name="payment-form"
            id="cash"
            value="DINHEIRO"
          />
          <LabelInputRadio htmlFor="cash">
            <Money />
            DINHEIRO
          </LabelInputRadio>
        </DivInputRadio>
      </DivAddress>
    </div>
  );
}
