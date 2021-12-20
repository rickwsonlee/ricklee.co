import * as React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import fontURL from "@fontsource/archivo/files/archivo-latin-400-normal.woff2"

import Header from "./header"
import Footer from "./footer"

import { darkTheme } from "../theme"
import { Reset } from "../reset"
import { Section, Grid, Col } from "./grid"
import { AnimatedAnchor } from "./link"

const GlobalStyle = createGlobalStyle`
  // reset.js
  ${Reset}

  body {
    font-family: "Archivo", sans-serif;
    line-height: 1.33;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
  }
`

const shortcodes = { Section, Grid, Col, AnimatedAnchor }

const Layout = ({ children }) => {
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
        <Header />
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
