import styled from "styled-components"

export const Section = styled.div`
  padding: ${props => props.p};
  display: flex;
  flex-direction: column;
  gap: ${props => (props.gap ? `${props.gap}` : `1rem`)};
`

export const Grid = styled.div`
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
  align-items: ${props => (props.align ? `${props.align}` : `baseline`)};
  grid-column: ${props => (props.span ? `span ${props.span}` : null)};
`
