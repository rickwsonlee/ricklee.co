import styled, { css } from "styled-components"

export const Typography = css`
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
  }
`

export const HiddenText = styled.p`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

export const Subhead = styled.p`
  font-size: 1.3rem;
`

export const Label = styled.p`
  font-size: 14px;

  ${props =>
    props.transparent &&
    css`
      opacity: 0.5;
    `}
`
