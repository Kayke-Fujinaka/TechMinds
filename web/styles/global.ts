import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
