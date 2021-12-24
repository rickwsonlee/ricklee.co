import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Meta from "../components/post-meta"
import { Section, Grid, Col } from "../components/grid"
import { AnimatedAnchor } from "../components/link"
import { Subhead } from "../typography"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Section
        as="article"
        p="5rem 2rem"
        gap="5rem"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Grid as="header" lg="2" md="1">
          <Col gap="2rem">
            <Section>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <AnimatedAnchor
                href={post.frontmatter.meta.website}
                target="_blank"
                rel="noopener"
                underlined
                external
              >
                <span>Visit Website</span>
              </AnimatedAnchor>
            </Section>
            <Meta post={post} />
          </Col>
          <Col>
            <Subhead>{post.frontmatter.description}</Subhead>
          </Col>
        </Grid>
        <Section itemProp="articleBody">
          <MDXRenderer>{post.body}</MDXRenderer>
        </Section>
        <footer></footer>
      </Section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        meta {
          website
          year
          contribution
          collaboration {
            name
            url
          }
        }
      }
    }
  }
`
