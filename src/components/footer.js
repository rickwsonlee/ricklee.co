import * as React from "react"
import { Link } from "gatsby"

import { Grid, Col } from "./grid"

const Footer = () => {
  return (
    <footer>
      <Grid sm="2">
        <Col>© {new Date().getFullYear()}</Col>
        <Col>
          <Link to="#top">Back to Top</Link>
        </Col>
      </Grid>
    </footer>
  )
}

export default Footer
