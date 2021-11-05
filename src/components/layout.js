/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
