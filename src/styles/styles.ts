import { createGlobalStyle, css } from 'styled-components';
import RalewayRegularWoff2 from 'assets/fonts/raleway-regular.woff2';
import RalewayRegularWoff from 'assets/fonts/raleway-regular.woff';
import LobsterWoff2 from 'assets/fonts/lobster.woff2';
import LobsterWoff from 'assets/fonts/lobster.woff';

export const GLobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegularWoff2}) format('woff2');
    src: url(${RalewayRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lobster';
    src: url(${LobsterWoff2}) format('woff2');
    src: url(${LobsterWoff}) format('woff');
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
    font-family: 'Raleway', 'Arial', sans-serif;
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
