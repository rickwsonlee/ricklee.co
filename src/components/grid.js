import styled from "styled-components"

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
    props.sm ? `repeat(${props.sm}, 1fr)` : null};
  grid-gap: ${props => (props.gap ? `${props.gap}` : `1rem 2rem`)};

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
  align-items: ${props => (props.align ? `${props.align}` : `baseline`)};
  grid-column: ${props => (props.span ? `span ${props.span}` : null)};
`
