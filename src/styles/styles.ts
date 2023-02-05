import { createGlobalStyle, css } from 'styled-components';

export const GLobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Lobster";
    src: url("../../assets/fonts/lobster.woff") format("woff");
    src: url("../../assets/fonts/lobster.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Raleway";
    src: url('../../assets/fonts/raleway-regular.woff') format('woff');
    src: url('../../assets/fonts/raleway-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Raleway', Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
