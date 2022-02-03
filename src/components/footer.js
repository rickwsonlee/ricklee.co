import * as React from "react"

import BacktoTop from "./back-to-top"

import { Section, Grid, Col } from "./grid"
import { AnimatedLink } from "./link"
import { Display } from "../typography"

const Footer = () => {
  return (
    <Section as="footer" contained m="4rem 0">
      <Grid lg="2" sm="2">
        <Col>
          <Display>© {new Date().getFullYear()}</Display>
        </Col>
        <Col align="flex-end" inherit="align">
          <AnimatedLink to="#top" aria-label="Back to top">
            <BacktoTop />
          </AnimatedLink>
        </Col>
      </Grid>
    </Section>
  )
}

export default Footer
