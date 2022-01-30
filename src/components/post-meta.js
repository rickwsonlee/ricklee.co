import * as React from "react"

import { Section, Grid } from "./grid"
import { List } from "./list"
import { AnimatedAnchor } from "./link"
import { Label } from "../typography"

const Meta = ({ post }) => {
  return (
    <Grid lg="2" sm="2" gap="2rem">
      {post.frontmatter.meta.collaboration.length > 0 && (
        <Section gap="8px">
          <Label as="h4" transparent>
            Collaboration
          </Label>
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
        <Section gap="8px">
          <Label as="h4" transparent>
            Duration
          </Label>
          <p>{post.frontmatter.meta.duration}</p>
        </Section>
      )}
      <Section gap="8px">
        <Label as="h4" transparent>
          Year
        </Label>
        <p>{post.frontmatter.meta.year}</p>
      </Section>
    </Grid>
  )
}

export default Meta
