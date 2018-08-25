import "normalize.css";
import { injectGlobal } from "styled-components";
export { ThemeProvider } from "styled-components";

export const theme = {
  background: "#FAFAFA",
  black: "#000000",
  primary: "#25104F",
  secondary: "#E73686",
  tertiary: "#1C84FF",
  white: "#FFFFFF",
};

export const addGlobalStyles = () => {
  // tslint:disable no-unused-expression
  injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    body {
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
    }

    body *, body *:before, body *:after {
      box-sizing: inherit;
    }
  `;
};
