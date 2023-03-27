import { createGlobalStyle } from "styled-components";
import { theme } from "./themes";

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
    text-decoration: none;
    font-family: ${theme.fonts.family.primary};
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
