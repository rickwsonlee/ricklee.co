import React from "react"
import styled from "styled-components"

import Icon from "../assets/arrow-up.svg"

const ArrowUp = styled.div`
  transition: transform 0.25s ease-out;

  &:hover {
    transform: translateY(-8px);
  }
`

const BacktoTop = () => {
  return (
    <ArrowUp>
      <Icon />
    </ArrowUp>
  )
}

export default BacktoTop
