import styled from "styled-components"

export const List = styled.ul`
  width: 100%;
  list-style: ${props => (props.nostyle ? `none` : null)};
  margin: 0;
  margin-bottom: 1em;
  padding-left: ${props => (props.nostyle ? `0` : `2rem`)};

  li > h3 {
    margin-bottom: 0.5em;
  }

  li:not(:last-child) {
    margin-bottom: ${props => (props.gap ? `${props.gap}` : "16px")};
  }
`
