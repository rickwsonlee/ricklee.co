import * as React from "react"

import BacktoTop from "./back-to-top"

import { Section, Grid, Col } from "./grid"
import { AnimatedLink } from "./link"
import { Display } from "../typography"

const Footer = () => {
  return (
    <Section as="footer" p="4rem 3rem">
      <Grid lg="2" sm="2">
        <Col>
          <Display>© {new Date().getFullYear()}</Display>
        </Col>
        <Col align="flex-end">
          <AnimatedLink to="#top">
            <BacktoTop />
          </AnimatedLink>
        </Col>
      </Grid>
    </Section>
  )
}

export default Footer
