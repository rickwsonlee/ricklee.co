import { Link } from "gatsby"
import styled, { css } from "styled-components"

const LinkUnderline = css`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.text};
    transform: ${props => (props.underlined ? `scaleX(1)` : `scaleX(0)`)};
    transform-origin: top left;
    transition: transform 0.25s ease-out;
  }

  &:hover::before {
    transform: ${props => (props.underlined ? `scaleX(0)` : `scaleX(1)`)};
  }
`

export const AnimatedLink = styled(Link)`
  ${LinkUnderline}
`
export const AnimatedAnchor = styled.a`
  ${LinkUnderline}
`
