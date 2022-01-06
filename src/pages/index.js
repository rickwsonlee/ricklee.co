import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Section, Grid, Col } from "../components/grid"
import { ListHeader, List } from "../components/list"
import { AnimatedLink, AnimatedAnchor } from "../components/link"

const Label = styled.dd`
  font-size: 14px;
  margin-top: 2px;
`

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  const specialisations = [
    `UI/UX`,
    `Interaction Design`,
    `Website Design`,
    `Front-End Development`,
    `Branding & Identity`,
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
    `Framer`,
  ]
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <Seo title="Home" />
      <Helmet titleTemplate="">
        <title>{`${siteTitle} — ${siteDescription}`}</title>
      </Helmet>
      <Section p="5rem 2rem">
        <Grid gap="2rem">
          <Col gap="2rem">
            <Section>
              <ListHeader>Specialisation</ListHeader>
              <List nostyle>
                {specialisations.map(specialisation => {
                  return (
                    <li key={specialisation.toString()}>{specialisation}</li>
                  )
                })}
              </List>
            </Section>
            <Section>
              <ListHeader>Skills</ListHeader>
              <List nostyle>
                {skills.map(skill => {
                  return <li key={skill.toString()}>{skill}</li>
                })}
              </List>
            </Section>
            <Section>
              <ListHeader>Education</ListHeader>
              <List nostyle gap="1rem">
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
              <ListHeader>Experience</ListHeader>
              <List nostyle gap="1rem">
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
              <ListHeader>Projects</ListHeader>
              <List nostyle gap="1rem">
                {posts.map(post => {
                  return (
                    <li key={post.fields.slug}>
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
              </List>
            </Section>
            <Section>
              <ListHeader>Contact</ListHeader>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
