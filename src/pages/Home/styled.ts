import styled from "styled-components";

export const MainItens = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 3.375rem 0;

  @media (max-width: 1025px){
    justify-content: space-evenly;
  }

  @media (max-width: 768px){
    justify-content: center;
  }
`;

export const TitleMain = styled.strong`
  font-size: 2rem;
  font-family: "Baloo 2", cursive;
  font-weight: 800px;
`;
