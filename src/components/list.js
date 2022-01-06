import styled from "styled-components"

export const ListHeader = styled.h3`
  font-size: 14px;
  opacity: 0.5;
`

export const List = styled.ul`
  list-style: ${props => (props.nostyle ? `none` : null)};
  margin: 0;
  padding-left: ${props => (props.nostyle ? `0` : `2rem`)};

  li:not(:last-child) {
    margin-bottom: ${props => (props.gap ? `${props.gap}` : null)};
  }
`
