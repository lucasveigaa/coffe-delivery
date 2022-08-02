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
  DivComplemento,
  InputRuaCidade,
  InputTypeRadio,
  InputUF,
  LabelInputRadio,
  SpanOpcional,
  SubTitleDivAddress,
  TitleDivAddress,
  InputComplemento,
  InputCep,
  InputNumBairro,
} from "./styled";

import { useTheme } from "styled-components";
import { ChangeEvent, useContext, useState } from "react";
import { InputDataType } from "../../../../types";
import { CheckoutContext } from "../../../../contexts/CheckoutContext";

export function CheckoutInformation() {
  const [inputData, setInputData] = useState<InputDataType>(
    {} as InputDataType
  );
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const theme = useTheme();

  const { setCheckoutInformation } = useContext(CheckoutContext);
  setCheckoutInformation(inputData);

  function handleCepValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, cep: Number(event.target.value) });

    const lenghtInput = event.target.value.split("").length;

    if (lenghtInput === 8) {
      fetch(`https://viacep.com.br/ws/${event.target.value}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setRua(data.logradouro);
          setBairro(data.bairro);
          setCidade(data.localidade);
          setUf(data.uf);

          setInputData({
            ...inputData,
            street: data.logradouro,
            district: data.bairro,
            city: data.localidade,
            uf: data.uf,
          });
        });
    }
  }

  function handleRuaValue(event: ChangeEvent<HTMLInputElement>) {
    setRua(event.target.value);
    setInputData({ ...inputData, street: event.target.value });
  }

  function handleNumValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, num: event.target.value });
  }

  function handleComplementoValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, complement: event.target.value });
  }

  function handleBairroValue(event: ChangeEvent<HTMLInputElement>) {
    setBairro(event.target.value);
    setInputData({ ...inputData, district: event.target.value });
  }

  function handleCidadeValue(event: ChangeEvent<HTMLInputElement>) {
    setCidade(event.target.value);
    setInputData({ ...inputData, city: event.target.value });
  }

  function handleUfValue(event: ChangeEvent<HTMLInputElement>) {
    setUf(event.target.value);
    setInputData({ ...inputData, uf: event.target.value });
  }

  function handlePaymentMethod(event: React.MouseEvent<HTMLInputElement>) {
    setInputData({
      ...inputData,
      paymentMethod: (event.target as HTMLInputElement).value,
    });
  }

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
          <InputCep
            autoComplete="nope"
            id="cep"
            onChange={handleCepValue}
            placeholder="CEP"
            type="number"
          />
          <InputRuaCidade
            autoComplete="nope"
            value={rua}
            id="rua"
            onChange={handleRuaValue}
            placeholder="Rua"
            type="text"
          />
          <DivInput>
            <InputNumBairro
              autoComplete="nope"
              id="num"
              onChange={handleNumValue}
              placeholder="Número"
              type="text"
            />
            <DivComplemento>
              <InputComplemento
                autoComplete="nope"
                id="complemento"
                onChange={handleComplementoValue}
                placeholder="Complemento"
                type="text"
              />
              <SpanOpcional>Opcional</SpanOpcional>
            </DivComplemento>
          </DivInput>
          <DivInput>
            <InputNumBairro
              autoComplete="nope"
              value={bairro}
              id="bairro"
              onChange={handleBairroValue}
              placeholder="Bairro"
              type="text"
            />
            <InputRuaCidade
              autoComplete="nope"
              value={cidade}
              id="cidade"
              onChange={handleCidadeValue}
              placeholder="Cidade"
              type="text"
            />
            <InputUF
              autoComplete="nope"
              value={uf}
              id="uf"
              onChange={handleUfValue}
              placeholder="UF"
              type="text"
            />
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
            onClick={handlePaymentMethod}
            type="radio"
            name="payment-form"
            id="credit-card"
            value="Cartão de crédito"
          />
          <LabelInputRadio htmlFor="credit-card">
            <CreditCard /> CARTÃO DE CRÉDITO
          </LabelInputRadio>
          <InputTypeRadio
            onClick={handlePaymentMethod}
            type="radio"
            name="payment-form"
            id="debit-card"
            value="Cartão de débito"
          />
          <LabelInputRadio htmlFor="debit-card">
            <Bank /> CARTÃO DE DÉBITO
          </LabelInputRadio>
          <InputTypeRadio
            onClick={handlePaymentMethod}
            type="radio"
            name="payment-form"
            id="cash"
            value="Dinheiro"
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
