import styled from "styled-components";

export const Main = styled.main`
  margin-top: 1rem;

  gap: 1.5rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
`;

export const DivContainerItemCart = styled.div`
  display: flex;
  flex-direction: column;

`;

// export const DivItensCart = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const DivSubContainerItemCart = styled.div`
  display: flex;
  gap: 1.25rem;

  
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 4rem;
  }
`;

export const SpanNameItemCart = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const DivAddAndRemoveItemCart = styled.div`
  margin-top: 0.5rem;
  display: flex;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  svg:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }

  button {
    background: ${(props) => props.theme["base-button"]};
    padding: 0.5rem;
    border: 0;
  }

  button:last-child {
    margin-left: 0.5rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;

    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  button:last-child:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  span {
    background: ${(props) => props.theme["base-button"]};
    padding: 0.52rem;
  }
`;

export const DivValueItemCart = styled.div`
  margin-left: 3.125rem;

  span {
    font-weight: 700;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const DivValueCart = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.3;
  color: ${(props) => props.theme["base-text"]};

  span {
    margin-bottom: 0.75rem;
  }

  span:first-child {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 1.5rem;
  }
`;

export const ButtonValueCart = styled.button`
  width: 100%;
  background: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  color: ${(props) => props.theme["white"]};
  border: 0;
  font-size: 0.875rem;
  font-weight: 700;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
    cursor: pointer;
  }
`;
