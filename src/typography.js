import styled, { css } from "styled-components"

export const Typography = css`
  h1,
  h2 {
    font-weight: 600;
    letter-spacing: -0.02em;

    @supports (font-variation-settings: normal) {
      font-variation-settings: "wght" 600;
    }
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;

    @supports (font-variation-settings: normal) {
      font-variation-settings: "wght" 500;
    }
  }
`

export const HiddenText = styled.p`
  ${props =>
    props.hide_all &&
    css`
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `}

  ${props =>
    props.hide_md &&
    css`
      @media (min-width: 43.75rem) {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    `}
`

export const Display = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.02em;

  @supports (font-variation-settings: normal) {
    font-variation-settings: "wght" 450;
  }
`

export const Label = styled.p`
  font-size: ${props => (props.size ? `${props.size}` : null)};

  ${props =>
    props.transparent &&
    css`
      opacity: 0.5;
    `}
`
