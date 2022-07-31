import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const NavContainer = styled.nav`
  display: flex;
`;

export const DivLocalization = styled.div`
  margin-right: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  &:first-child {
    background: ${(props) => props.theme["purple-light"]};
  }

  span {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 0.875rem;
  }
`;

export const DivCartHeader = styled.div`
  span {
    position: absolute;
    margin-top: -3rem;
    margin-left: 2.125rem;

    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 1000px;
    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ImgCartHeader = styled.img`
  display: flex;
  align-items: center;
  height: 2.75rem;
`;
