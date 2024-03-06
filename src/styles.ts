import { createGlobalStyle } from "styled-components";
// import astronboywonder from './font/astronboywonder.otf';
import astronboywonder from "./font/astronboywonder.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AstronBoyWonder-Regular';
    src: url(${astronboywonder});
  }


body {
    font-family:  monospace;
    margin: 0;
    padding: 0;
    -webkit-font-smothing: antialiased;
    text-rendering: optimizeLegibility;
    font-weight: normal;
  }
  h1 {
    font-family: 'astronboywonder';
    font-weight: normal;
    /* font-family: 'AstronBoyWonder-Regular';
    src: url(${astronboywonder}) format('OpenType'); */
    font-display: auto;
  }
`;
