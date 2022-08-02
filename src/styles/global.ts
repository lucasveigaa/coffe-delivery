import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
    }
    body{
         background: ${(props) => props.theme["background"]};
        -webkit-font-smoothing: antialiased;
        padding: 0 10rem;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }

    body {
        padding: 0;
        max-width: 90%;
        margin-right: auto;
        margin-left: auto;
    }

}
`;
