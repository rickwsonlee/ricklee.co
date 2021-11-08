import * as React from "react"

import { Section, Grid, Col } from "./grid"
import { AnimatedLink } from "./link"

const Footer = () => {
  return (
    <Section as="footer" p="2rem">
      <Grid sm="2">
        <Col span="2">© {new Date().getFullYear()}</Col>
        <Col>
          <AnimatedLink to="#top">
            <span>Back to Top</span>
          </AnimatedLink>
        </Col>
      </Grid>
    </Section>
  )
}

export default Footer
