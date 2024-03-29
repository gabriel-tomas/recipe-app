import { createGlobalStyle, styled } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import fonts from '../config/fonts';
import colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  :root {
    --text: ${colors.text};
    --background: ${colors.background};
    --backgroundCard: ${colors.backgroundCard};
    --primary: ${colors.primary};
    --secondary: ${colors.secondary};
    --accent: ${colors.accent};
    --white: ${colors.white};

    --neutral1: ${colors.neutral1};
    --neutral2: ${colors.neutral2};
    --neutral3: ${colors.neutral3};

    --font-size-sm: ${fonts.fontSizeSm};
    --font-size-base: ${fonts.fontSizeBase};
    --font-size-md: ${fonts.fontSizeMd};
    --font-size-lg: ${fonts.fontSizeLg};
    --font-size-xl: ${fonts.fontSizeXl};
    --font-size-xxl: ${fonts.fontSizeXxl};
    --font-size-xxxl: ${fonts.fontSizeXxxl};
  }

  html, button, input, a {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: ${colors.text};
  }

  body {
    background-color: ${colors.background};
    min-height: 100vh;
  }

  body.disabled {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  body > #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body.disable {
    height: 100vh;
    height: 100svh;
  }

  button {
    background-color: unset;
    height: 35px;
    padding-inline: 19px;
    font-weight: 700;
    border-radius: 100px;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${colors.text};
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  .container-results-search {
    margin-inline: 1rem;
    margin-top: 1.5rem;
    font-size: var(--font-size-base);
  }

  body .Toastify div.Toastify__toast-body > div:nth-child(2) {
    color: ${colors.text};
  }
`;

export const Main = styled.main`
  min-width: 250px;
  max-width: 960px;
  padding-inline: clamp(1rem, 5vw, 3rem);
  margin-inline: auto;

  @media screen and (max-width: 694px) {
    margin-inline: unset;
  }
`;

export const BackBlocker = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -999;
  visibility: hidden;
  transition: .2s background-color ease-in;

  &.active-menu {
    visibility: visible;
    z-index: 2;
    background-color: var(--neutral1);
  }
`;
