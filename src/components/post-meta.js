import * as React from "react"

import { Section, Grid } from "./grid"
import { ListHeader, List } from "./list"
import { AnimatedAnchor } from "./link"

const Meta = ({ post }) => {
  return (
    <Grid lg="3" md="2" sm="2">
      <Section>
        <ListHeader as="h4">Contribution</ListHeader>
        <List nostyle>
          {post.frontmatter.meta.contribution.map(contribution => (
            <li>{contribution}</li>
          ))}
        </List>
      </Section>
      {post.frontmatter.meta.collaboration.length > 0 && (
        <Section>
          <ListHeader as="h4">Collaboration</ListHeader>
          <List nostyle>
            {post.frontmatter.meta.collaboration.map(collaboration => {
              if (collaboration.url) {
                return (
                  <li>
                    <AnimatedAnchor
                      href={collaboration.url}
                      target="_blank"
                      rel="noreferrer"
                      underlined
                      external
                    >
                      <span>{collaboration.name}</span>
                    </AnimatedAnchor>
                  </li>
                )
              } else {
                return (
                  <li>
                    <span>{collaboration.name}</span>
                  </li>
                )
              }
            })}
          </List>
        </Section>
      )}
      {post.frontmatter.meta.duration && (
        <Section>
          <ListHeader as="h4">Duration</ListHeader>
          <p>{post.frontmatter.meta.duration}</p>
        </Section>
      )}
      <Section>
        <ListHeader as="h4">Year</ListHeader>
        <p>{post.frontmatter.meta.year}</p>
      </Section>
    </Grid>
  )
}

export default Meta
