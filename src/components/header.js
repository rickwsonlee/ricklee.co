import * as React from "react"

import { Section, Grid, Col } from "../components/grid"
import { AnimatedLink, AnimatedAnchor } from "./link"
import { Display } from "../typography"

const Header = ({ location }) => {
  let header

  if (location.pathname === "/") {
    header = (
      <Display as="h1">
        <span>Rick Lee</span>
      </Display>
    )
  } else {
    header = <Display as="span">Back to Archive</Display>
  }

  return (
    <Section as="header" id="top" contained m="4rem 0">
      <Grid lg="2" sm="2">
        <Col>
          <AnimatedLink to="/">{header}</AnimatedLink>
        </Col>
        <Col align="flex-end" inherit="align">
          <AnimatedAnchor href="mailto:rick@ricklee.co">
            <Display as="span">Email</Display>
          </AnimatedAnchor>
        </Col>
      </Grid>
    </Section>
  )
}

export default Header
