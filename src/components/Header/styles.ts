import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const DivContainer = styled.div`
  display: flex;
`;

export const DivLocalization = styled.div`
  margin-right: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
