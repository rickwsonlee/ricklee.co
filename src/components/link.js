import { Link } from "gatsby"
import styled, { css } from "styled-components"

import icon from "../assets/external-link.svg"

const LinkAnimation = css`
  span:first-child {
    position: relative;
    margin-right: ${props => (props.external ? `.3em` : null)};

    ${props =>
      props.underlined &&
      css`
        text-decoration: underline;
      `}

    @media (min-width: 43.75rem) {
      text-decoration: none;

      &:before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -1px;
        left: 0;
        background-color: ${({ theme }) => theme.text};
        transform: ${props => (props.underlined ? `scaleX(1)` : `scaleX(0)`)};
        transform-origin: top left;
        transition: transform 0.25s ease-out;
      }
    }
  }

  &:hover span::before {
    transform: ${props => (props.underlined ? `scaleX(0)` : `scaleX(1)`)};
  }

  /* &::after {
    ${props =>
    props.external
      ? css`
          content: "";
          display: inline-block;
          width: 0.7em;
          height: 0.7em;
          -webkit-mask: url(${icon}) no-repeat 50% 50%;
          mask: url(${icon}) no-repeat 50% 50%;
          -webkit-mask-size: cover;
          mask-size: cover;
          background-color: ${({ theme }) => theme.text};
          opacity: 0.5;
          transition: opacity 0.25s ease-out;
        `
      : null}
  }

  &:hover::after {
    ${props =>
    props.external
      ? css`
          opacity: 1;
        `
      : null}
  } */
`

export const AnimatedLink = styled(Link)`
  ${LinkAnimation}
`
export const AnimatedAnchor = styled.a`
  ${LinkAnimation}
`
