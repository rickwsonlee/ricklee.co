import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/post-card"

import { Section, Grid, Col } from "../components/grid"
import { List } from "../components/list"
import { AnimatedAnchor } from "../components/link"
import { HiddenText, Label } from "../typography"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  const specialisations = [
    `UI/UX`,
    `Interaction Design`,
    `Website Design`,
    `Front-End Development`,
  ]
  const skills = [
    `User Research`,
    `Information Architecture`,
    `Wireframing`,
    `Prototyping`,
    `Usability Testing`,
    `Visual Design`,
    `Design Systems`,
    `HTML`,
    `CSS`,
    `JavaScript`,
    `Gatsby (React)`,
  ]
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <Seo title="Home" />
      <Helmet titleTemplate="">
        <title>{`${siteTitle} — ${siteDescription}`}</title>
      </Helmet>
      <Section p="5rem 2rem">
        <Grid lg="2" gap="2rem">
          <Col>
            <HiddenText as="h2">Info</HiddenText>
            <Grid lg="2" gap="2rem" sticky>
              <Col gap="2rem">
                <Section>
                  <Label as="h3" transparent>
                    Specialisation
                  </Label>
                  <List nostyle>
                    {specialisations.map(specialisation => {
                      return (
                        <li key={specialisation.toString()}>
                          {specialisation}
                        </li>
                      )
                    })}
                  </List>
                </Section>
                <Section>
                  <Label as="h3" transparent>
                    Skills
                  </Label>
                  <List nostyle>
                    {skills.map(skill => {
                      return <li key={skill.toString()}>{skill}</li>
                    })}
                  </List>
                </Section>
              </Col>
              <Col gap="2rem">
                <Section>
                  <Label as="h3" transparent>
                    Experience
                  </Label>
                  <List nostyle gap="1rem">
                    <li>
                      <dl>
                        <dt>Web Designer</dt>
                        <dd>Freelance</dd>
                        <dd>2019 &ndash; Present</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>Community Team</dt>
                        <dd>Common Ground Coworking Space</dd>
                        <dd>2019</dd>
                      </dl>
                    </li>
                  </List>
                </Section>
                <Section>
                  <Label as="h3" transparent>
                    Education
                  </Label>
                  <List nostyle gap="1rem">
                    <li>
                      <dl>
                        <dt>Google UX Design Professional Certificate</dt>
                        <dd>Current</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>Graduated in Engineering</dt>
                        <dd>2015 &ndash; 2017</dd>
                      </dl>
                    </li>
                  </List>
                </Section>
                <Section>
                  <Label as="h3" transparent>
                    Contact
                  </Label>
                  <List nostyle gap="1rem">
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
          </Col>
          <Col>
            <HiddenText as="h2" id="archive">
              Archive
            </HiddenText>
            <List nostyle gap="2rem">
              {posts.map(post => {
                return <PostCard post={post} />
              })}
            </List>
          </Col>
        </Grid>
      </Section>
      {/* <Section as="section" p="1rem 2rem">
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
      </Section> */}
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
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
  }
`
