import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  margin-top: 5.8rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.strong`
  font-size: 1.375rem;
`;

export const DivSubContainer = styled.div`
  margin-top: 4rem;
`;

export const DivIcons = styled.div`
  display: flex;

  span {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    width: 50%;
  }

  img {
    margin-right: 0.75rem;
  }
`;

export const ImgCoffeBannerHome = styled.img`
  width: 29.75rem;
  height: 22.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;


