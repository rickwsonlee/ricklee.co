import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  return (
    <Layout title={siteTitle}>
    <Seo title="Home" />
      <Helmet>
        <title>{`${siteTitle} — ${siteDescription}`}</title>
      </Helmet>
  </Layout>
)
}

export default IndexPage

export const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
