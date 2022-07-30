import styled from "styled-components";

export const DivItem = styled.div`
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  border-radius: 6px 36px;
  
  margin-right: 2rem;
  margin-bottom: 2.5rem;
`;

export const ImgCoffe = styled.img`
  position: relative;
  top: -1.25rem;
`;

export const DivTypeItem = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const TypeItem = styled.span`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-weight: bold;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`;

export const TitleItem = styled.h3`
  font-family: "Baloo 2", cursive;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

export const DescriptionItem = styled.span`
  color: ${(props) => props.theme["base-label"]};
  padding: 0 1.25rem;
  margin-bottom: 2rem;
`;

export const ItemInfos = styled.div`
  display: flex;
`;

export const ValueDiv = styled.div`
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    margin-right: 1px;
  }

  strong {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 1.5rem;
    margin-right: 1.4375rem;
  }
`;

export const DivAddToCart = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  button {
    border: none;
  }


  span {
    background: ${(props) => props.theme["base-button"]};
    padding: 0.52rem;
  }

  img {
    margin-left: 0.5rem;
  }

`;

export const ButtonIncreaseAndDecreaseItensCart = styled.button`
    color: ${(props) => props.theme["purple"]};
    background: ${(props) => props.theme["base-button"]};
    padding: 0.5rem;
    border: 0;
`