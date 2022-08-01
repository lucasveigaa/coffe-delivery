import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: 75rem;
  margin-top: 5rem;

  @media (max-width: 1025px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800px;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.25rem;
  }
`;

export const SpanSubtitle = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 1.3;
`;

export const DivSubContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  margin-top: 2.5rem;

  width: 32.875rem;
  height: 16.875rem;

  border: 1px solid rgba(219, 172, 44, 1);

  @media (max-width: 768px){
    width: 80vw;
    margin-bottom: 1rem;  

  }
`;

export const DivInfos = styled.div`
  display: flex;
  margin-bottom: 2rem;

  gap: 0.75rem;
`;

export const DivSubInfos = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme["base-text"]};
  }

  strong {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ImgIllustration = styled.img`
  @media (max-width: 1025px){
    margin-top: 2rem;
    width: 55vw;
  }

  @media (max-width: 768px){
    width: 80vw;
  }
`