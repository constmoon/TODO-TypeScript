import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    font-size: 0.9rem;
  }
`;


export default GlobalStyles; 