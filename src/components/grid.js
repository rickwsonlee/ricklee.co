import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.sm ? `repeat(${props.sm}, 1fr)` : null};
  grid-gap: ${props => (props.gap ? `${props.gap}` : `2rem`)};
`

export const Col = styled.div``
