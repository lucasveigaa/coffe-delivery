import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 2rem;

  @media(max-width: 1025px) {
    flex-direction: column-reverse;
  }
`;

export const TitleCheckouts = styled.strong`
  font-family: "Baloo 2", cursive;
  font-size: 1.125rem;
  font-weight: 700;

  @media(max-width: 1025px) {
    display: flex;
    justify-content: center;
  }
`;

