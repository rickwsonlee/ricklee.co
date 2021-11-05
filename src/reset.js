import { css } from "styled-components"

export const Reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

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
    margin: 0;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }
`
