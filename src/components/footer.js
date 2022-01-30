import * as React from "react"

import BacktoTop from "./back-to-top"

import { Section, Grid, Col } from "./grid"
import { AnimatedLink, AnimatedAnchor } from "./link"

const Footer = () => {
  return (
    <Section as="footer" p="2rem">
      <Grid sm="2">
        <Col span="2">
          <div>
            © {new Date().getFullYear()}.{` `}
            {/*  Built with{" "}
            <AnimatedAnchor
              href="//www.gatsbyjs.com/showcase/"
              target="_blank"
              rel="noopener"
              external
            >
              <span>Gatsby</span>
            </AnimatedAnchor>
            .{` `} */}
            <AnimatedAnchor
              href="//github.com/rickwsonlee/ricklee.co"
              target="_blank"
              rel="noopener"
              underlined
              external
            >
              <span>GitHub</span>
            </AnimatedAnchor>
          </div>
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
