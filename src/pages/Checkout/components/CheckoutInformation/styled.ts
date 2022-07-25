import styled from "styled-components";

export const DivAddress = styled.div`
  width: 40rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const DivTitleSubtitleAddress = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
  }

  svg {
    font-size: 1.375rem;
  }
`;

export const TitleDivAddress = styled.strong`
  font-weight: 400;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const SubTitleDivAddress = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const DivInput = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LabelInputRadio = styled.label`
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 1rem;
  width: 11rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;

const BaseInput = styled.input`
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;
  align-items: center;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 1rem;

  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const DivInputRadio = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputCepNumBairro = styled(BaseInput)`
  width: 12.5rem;
`;

export const InputRuaComplementoCidade = styled(BaseInput)`
  width: 100%;
`;

export const InputUF = styled(BaseInput)`
  width: 4rem;
`;

export const InputTypeRadio = styled.input`
  display: none;

  &:checked + label {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;
