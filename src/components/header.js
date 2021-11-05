import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Grid, Col } from "../components/grid"
import { List } from "./list"

const Header = ({ siteTitle }) => (
  <header id="top">
    <Grid sm="2">
      <Col>
        <Link to="/">{siteTitle}</Link>
      </Col>
      <Col>
        <nav>
          <List>
            <li>
              <a href="mailto:hello@ricklee.co">Email</a>
            </li>
            <li>
              <a href="//www.linkedin.com/in/rickwsonlee">LinkedIn</a>
            </li>
          </List>
        </nav>
      </Col>
    </Grid>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
