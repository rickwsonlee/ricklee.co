import * as React from "react"
import styled from "styled-components"

import { Section, Grid, Col } from "../components/grid"
import { AnimatedLink, AnimatedAnchor } from "./link"
import { Button } from "./button"

const Heading = styled.h1`
  font-size: 1.2rem;
`

const Header = ({ location }) => {
  let header

  if (location.pathname === "/") {
    header = (
      <Col>
        <Heading>
          Rick Lee is a Malaysia-based product &#40;UI&#47;UX&#41; designer with
          a passion and curiosity for design and technology. Born in Penang, he
          currently lives in Kuala Lumpur and is{" "}
          <AnimatedAnchor
            href="//www.linkedin.com/in/rickwsonlee"
            target="_blank"
            rel="noopener"
            underlined
            external
          >
            <span>available for hire</span>
          </AnimatedAnchor>
          .
        </Heading>
        <Button
          href="https://1drv.ms/b/s!AjrODPFRPE3lgep4H8MKIb3ndKu1Pw?e=4Cifkn"
          target="_blank"
          rel="noopener"
        >
          View CV
        </Button>
      </Col>
    )
  } else {
    header = (
      <>
        <Col>
          <AnimatedLink to="/">
            <span>Rick Lee</span>
          </AnimatedLink>
        </Col>
        <Col>
          <AnimatedLink to="/#archive">
            <span>Back to Archive</span>
          </AnimatedLink>
        </Col>
      </>
    )
  }

  return (
    <Section as="header" id="top" p="2rem">
      <Grid lg="2">{header}</Grid>
    </Section>
  )
}

export default Header
