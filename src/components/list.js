import styled from "styled-components"

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li:not(:last-child) {
    margin-bottom: ${props => (props.gap ? `${props.gap}` : null)};
  }
`
