import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Meta from "../components/post-meta"
import { Section, Grid, Col } from "../components/grid"
import { List } from "../components/list"
import { Display, Label } from "../typography"

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
        p="5rem 3rem"
        gap="3rem"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Grid as="header" lg="2" md="1">
          <Col span="2">
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          </Col>
          <Col>
            <List nostyle gap="4px">
              {post.frontmatter.meta.contribution.map(contribution => (
                <li>
                  <Label transparent>{contribution}</Label>
                </li>
              ))}
            </List>
          </Col>
          <Col>
            <Meta post={post} />
          </Col>
          <Display>{post.frontmatter.subtitle}</Display>
        </Grid>
        <Section itemProp="articleBody" gap="3rem">
          <MDXRenderer localImages={post.frontmatter.embeddedImagesLocal}>
            {post.body}
          </MDXRenderer>
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
      body
      frontmatter {
        title
        subtitle
        meta {
          website
          contribution
          year
          duration
          collaboration {
            name
            url
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
