import * as React from "react"
import styled from "styled-components"

import { Section, Grid, Col } from "../components/grid"
import { AnimatedAnchor } from "./link"
import { Button } from "./button"

const Heading = styled.h1`
  font-size: 1.2rem;
`

const Header = () => (
  <Section as="header" id="top" p="2rem">
    <Grid>
      <Col span="2">
        <Heading>
          Rick Lee is a Malaysia-based product &#40;UI&#47;UX&#41; designer with
          a passion and curiosity for design and technology. Born in Penang, he
          currently lives in Kuala Lumpur and is{" "}
          <AnimatedAnchor
            href="//www.linkedin.com/in/rickwsonlee"
            target="_blank"
            underlined
            external
          >
            <span>available for hire</span>
          </AnimatedAnchor>
          .
        </Heading>
        <Button
          href="https://1drv.ms/b/s!AjrODPFRPE3lgeJocXlxHbvZsRrmGw?e=wNqa7a"
          target="_blank"
        >
          View CV
        </Button>
      </Col>
    </Grid>
  </Section>
)

export default Header
