import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Section, Grid, Col } from "../components/grid"
import { List } from "../components/list"
import { AnimatedLink, AnimatedAnchor } from "../components/link"

const Header = styled.h3`
  opacity: 0.5;
`

const Label = styled.dd`
  font-size: 14px;
  margin-top: 4px;
`

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <Helmet titleTemplate="">
        <title>{`${siteTitle} — ${siteDescription}`}</title>
      </Helmet>
      <Section p="5rem 2rem">
        <Grid gap="2rem">
          <Col gap="2rem">
            <Section>
              <Header>Specialisation</Header>
              <List>
                <li>UI/UX</li>
                <li>Interaction Design</li>
                <li>Website Design</li>
                <li>Front-End Development</li>
                <li>Branding &amp; Identity</li>
              </List>
            </Section>
            <Section>
              <Header>Skills</Header>
              <List>
                <li>User Research</li>
                <li>Information Architecture</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Usability Testing</li>
                <li>Visual Design</li>
                <li>Design Systems</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Gatsby &#40;React&#41;</li>
              </List>
            </Section>
            <Section>
              <Header>Education</Header>
              <List gap="1rem">
                <li>
                  <dl>
                    <dt>Google UX Design Professional Certificate</dt>
                    <Label>Current</Label>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Graduated in Engineering</dt>
                    <Label>2015 &ndash; 2017</Label>
                  </dl>
                </li>
              </List>
            </Section>
          </Col>
          <Col gap="2rem">
            <Section>
              <Header>Experience</Header>
              <List gap="1rem">
                <li>
                  <dl>
                    <dt>Web Designer</dt>
                    <dd>Freelance</dd>
                    <Label>2019 &ndash; Present</Label>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Community Team</dt>
                    <dd>Common Ground Coworking Space</dd>
                    <Label>2019</Label>
                  </dl>
                </li>
              </List>
            </Section>
            <Section>
              <Header>Projects</Header>
              <List gap="1rem">
                {posts.map(post => {
                  return (
                <li>
                  <dl>
                        <dt>
                          <AnimatedLink
                            to={post.fields.slug}
                            itemProp="url"
                            underlined
                          >
                            <span>{post.frontmatter.title}</span>
                          </AnimatedLink>
                          <Label>{post.frontmatter.meta.year}</Label>
                        </dt>
                  </dl>
                </li>
                  )
                })}
                <li>
                  <dl>
                    <dt>
                      <AnimatedAnchor
                        href="//designsomething.co"
                        target="_blank"
                        rel="noreferrer"
                        underlined
                        external
                      >
                        <span>Artitude</span>
                      </AnimatedAnchor>
                      <Label>2021</Label>
                    </dt>
                  </dl>
                </li>
              </List>
            </Section>
            <Section>
              <Header>Contact</Header>
              <List gap="1rem">
                <li>
                  <AnimatedAnchor href="mailto:hello@ricklee.co" underlined>
                    <span>hello&#64;ricklee.co</span>
                  </AnimatedAnchor>
                </li>
                <li>
                  <AnimatedAnchor
                    href="//www.linkedin.com/in/rickwsonlee"
                    target="_blank"
                    rel="noopener"
                    underlined
                    external
                  >
                    <span>LinkedIn</span>
                  </AnimatedAnchor>
                </li>
              </List>
            </Section>
          </Col>
        </Grid>
      </Section>
      <Section as="section" p="1rem 2rem">
        <Grid>
          <Col span="2">
            <p>
              This work journal is a work in progress. Do drop by once in a
              while or consider following the project on{" "}
              <AnimatedAnchor
                href="//github.com/rickwsonlee/ricklee.co"
                target="_blank"
                rel="noopener"
                underlined
                external
              >
                <span>GitHub</span>
              </AnimatedAnchor>
              .
            </p>
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
    allMdx {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          meta {
            year
          }
        }
      }
    }
  }
`
