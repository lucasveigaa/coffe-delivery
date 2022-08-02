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
import { ChangeEvent, useState } from "react";
import { InputDataType } from "../../../../types";

export function CheckoutInformation() {
  const [inputData, setInputData] = useState<InputDataType>(
    {} as InputDataType
  );
  console.log(inputData);
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const theme = useTheme();

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
    setInputData({ ...inputData, street: event.target.value });
  }

  function handleNumValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, num: event.target.value });
  }

  function handleComplementoValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, complement: event.target.value });
  }

  function handleBairroValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, district: event.target.value });
  }

  function handleCidadeValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, city: event.target.value });
  }

  function handleUfValue(event: ChangeEvent<HTMLInputElement>) {
    setInputData({ ...inputData, uf: event.target.value });
  }

  function handlePaymentMethod(event: React.MouseEvent<HTMLInputElement>){
    setInputData({ ...inputData, paymentMethod: (event.target as HTMLInputElement).value});
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
            id="cep"
            onChange={handleCepValue}
            placeholder="CEP"
            type="number"
          />
          <InputRuaCidade
            value={rua}
            id="rua"
            onChange={handleRuaValue}
            placeholder="Rua"
            type="text"
          />
          <DivInput>
            <InputNumBairro
              id="num"
              onChange={handleNumValue}
              placeholder="Número"
              type="text"
            />
            <DivComplemento>
              <InputComplemento
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
              value={bairro}
              id="bairro"
              onChange={handleBairroValue}
              placeholder="Bairro"
              type="text"
            />
            <InputRuaCidade
              value={cidade}
              id="cidade"
              onChange={handleCidadeValue}
              placeholder="Cidade"
              type="text"
            />
            <InputUF
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
            value="CARTÃO DE CRÉDITO"
          />
          <LabelInputRadio htmlFor="credit-card">
            <CreditCard /> CARTÃO DE CRÉDITO
          </LabelInputRadio>
          <InputTypeRadio
            onClick={handlePaymentMethod}
            type="radio"
            name="payment-form"
            id="debit-card"
            value="CARTÃO DE DÉBITO"
          />
          <LabelInputRadio htmlFor="debit-card">
            <Bank /> CARTÃO DE DÉBITO
          </LabelInputRadio>
          <InputTypeRadio
          onClick={handlePaymentMethod}
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
