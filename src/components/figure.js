import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Section } from "./grid"

const Caption = styled.figcaption`
  font-size: 14px;
  opacity: 0.5;
`

const Figure = ({ alt, image }) => {
  return (
    <Section as="figure" m="1rem 0" gap="1rem" align="center">
      <GatsbyImage alt={alt} image={image} />
      <Caption>{alt}</Caption>
    </Section>
  )
}

export default Figure
