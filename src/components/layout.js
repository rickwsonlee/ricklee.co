import * as React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import fontURL from "@fontsource/inter/files/inter-latin-400-normal.woff2"

import Header from "./header"
import Footer from "./footer"

import { darkTheme } from "../theme"
import { Reset } from "../reset"
import { Typography, Display, Label } from "../typography"
import { Section, Grid, Col } from "./grid"
import { List } from "./list"
import { Button } from "./button"
import { AnimatedAnchor } from "./link"
import Figure from "./figure"

const GlobalStyle = createGlobalStyle`
  // reset.js
  ${Reset}

  body {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    font-family: ${({ theme }) => theme.font.static};
    font-weight: 400;
    line-height: 1.3;
    
    * {
      letter-spacing: -.01em;
    }

    @supports (font-variation-settings: normal) {
      font-family: ${({ theme }) => theme.font.variable};
      font-variation-settings: "wght" 450;
    }
  }

  p {
    margin-bottom: 1em;

    :last-child {
      margin-bottom: 0;
    }
  }

  // Typography
  ${Typography}
`

const shortcodes = {
  Section,
  Grid,
  Col,
  Display,
  Label,
  List,
  Button,
  AnimatedAnchor,
  Figure,
}

const Layout = ({ children, location }) => {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href={fontURL}
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Helmet>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header location={location} />
        <main>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
