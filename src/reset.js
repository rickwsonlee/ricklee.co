import { css } from "styled-components"

export const Reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* html:focus-within {
    scroll-behavior: smooth;
  } */

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; /* Firefox */
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
