import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"

import { darkTheme } from "../theme"
import { Reset } from "../reset"

const GlobalStyle = createGlobalStyle`
  // reset.js
  ${Reset}

  body {
    font-family: ${({ theme }) => theme.font};
    line-height: 1.33;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
