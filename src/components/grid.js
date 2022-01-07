import styled, { css } from "styled-components"

export const Section = styled.div`
  width: 100%;
  padding: ${props => props.p};
  display: flex;
  flex-direction: ${props =>
    props.direction ? `${props.direction}` : `column`};
  gap: ${props => (props.gap ? `${props.gap}` : `1rem`)};
  align-items: flex-start;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.sm ? `repeat(${props.sm}, 1fr)` : `1fr`};
  grid-gap: ${props => (props.gap ? `${props.gap}` : `1rem 2rem`)};

  ${props =>
    props.sticky &&
    css`
      position: sticky;
      top: 32px;
    `}

  @media (min-width: 43.75rem) {
    grid-template-columns: ${props =>
      props.md ? `repeat(${props.md}, 1fr)` : `repeat(2, 1fr)`};
  }
  @media (min-width: 64rem) {
    grid-template-columns: ${props =>
      props.lg ? `repeat(${props.lg}, 1fr)` : `repeat(4, 1fr)`};
  }
`

export const Col = styled(Section)`
  justify-content: ${props => (props.justify ? `${props.justify}` : null)};
  align-items: baseline;
  grid-column: 1fr;

  @media (min-width: 43.75rem) {
    align-items: ${props => (props.align ? `${props.align}` : null)};
    grid-column: ${props => (props.span ? `span ${props.span}` : null)};
  }
`
