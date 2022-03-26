import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/post-card"

import { Section, Grid, Col } from "../components/grid"
import { List } from "../components/list"
import { AnimatedAnchor } from "../components/link"
import { HiddenText, Display } from "../typography"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  return (
    <Layout location={location}>
      <Seo title="Home" />
      <Helmet titleTemplate="">
        <title>{`${siteTitle} — ${siteDescription}`}</title>
      </Helmet>
      <Section contained m="5rem 0">
        <Grid lg="2" gap="2rem 3rem">
          <Col>
            <HiddenText as="h2" hide_all>
              Info
            </HiddenText>
            <Grid lg="1" md="1" gap="4rem" sticky>
              <div>
                <Display>
                  Hey. My name is Rick. I am a Product Designer from Penang,
                  Malaysia, now based in Kuala Lumpur.
                </Display>
                <Display>
                  I design interfaces and interactive experiences to delight and
                  inspire.{" "}
                  <AnimatedAnchor
                    href="//github.com/rickwsonlee/ricklee.co"
                    target="_blank"
                    rel="noopener"
                    underlined
                  >
                    <span>I write code too</span>
                  </AnimatedAnchor>
                  .
                </Display>
                <Display>
                  My work encompasses UI/UX design, web/mobile app strategy
                  &amp; design, and front-end web development. I am{" "}
                  <AnimatedAnchor
                    href="//www.linkedin.com/in/rickwsonlee"
                    target="_blank"
                    rel="noopener"
                    underlined
                  >
                    <span>available for hire</span>
                  </AnimatedAnchor>
                  .
                </Display>
                <Display>
                  I geek out over random stuff &mdash; primarily on the tech,
                  history, craft, and design.
                </Display>
              </div>
              <List nostyle gap="4px">
                <li>
                  <AnimatedAnchor
                    href="//1drv.ms/b/s!AjrODPFRPE3lgesDwA1paB6J727ksQ?e=PuhFro"
                    target="_blank"
                    rel="noopener"
                  >
                    <Display as="span">Resume</Display>
                  </AnimatedAnchor>
                </li>
                <li>
                  <AnimatedAnchor
                    href="//www.linkedin.com/in/rickwsonlee"
                    target="_blank"
                    rel="noopener"
                  >
                    <Display as="span">LinkedIn</Display>
                  </AnimatedAnchor>
                </li>
                <li>
                  <AnimatedAnchor
                    href="//github.com/rickwsonlee"
                    target="_blank"
                    rel="noopener"
                  >
                    <Display as="span">GitHub</Display>
                  </AnimatedAnchor>
                </li>
              </List>
            </Grid>
          </Col>
          <Col gap="4rem">
            <Section gap="2rem">
              <HiddenText as="h2" id="archive" hide_md>
                Archive
              </HiddenText>
              <List nostyle gap="2rem">
                {data.allMdx.nodes.map(post => {
                  return <PostCard post={post} />
                })}
              </List>
            </Section>
            {/* <Section gap="2rem">
              <h2>Working Drafts</h2>
              <List nostyle gap="2rem">
                {data.draft.nodes.map(post => {
                  return <PostCard post={post} />
                })}
              </List>
            </Section> */}
          </Col>
        </Grid>
      </Section>
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
    allMdx(
      filter: { frontmatter: { status: { eq: "Published" } } }
      sort: { fields: frontmatter___date___published, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          subtitle
          status
          featuredImage {
            src {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.33)
              }
            }
          }
          meta {
            contribution
            year
          }
        }
      }
    }
    draft: allMdx(
      filter: { frontmatter: { status: { eq: "Draft" } } }
      sort: { fields: frontmatter___date___modified, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          subtitle
          status
          date {
            modified
          }
          meta {
            contribution
            year
          }
        }
      }
    }
  }
`
