import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Grid, Col } from "./grid"
import { AnimatedLink } from "./link"
import { Label } from "../typography"

const FeaturedImage = styled(GatsbyImage)`
  margin-bottom: 1rem;
`

const Article = styled.article`
  & h3 {
    display: inline;
    margin-right: 8px;
  }
`

const diffDays = date => {
  var today = new Date()
  var formattedDate = new Date(date)
  const days = Math.round(
    Math.abs((today - formattedDate) / (24 * 60 * 60 * 1000))
  )

  return <Label as="span" transparent>{`${days}d`}</Label>
}

const PostCard = ({ post }) => {
  let contributions = post.frontmatter.meta.contribution

  let article

  if (post.frontmatter.status === "Published") {
    article = (
      <>
        <Article itemScope itemType="http://schema.org/Article">
          <FeaturedImage
            image={getImage(post.frontmatter.featuredImage.src)}
            alt={post.frontmatter.featuredImage.alt}
            itemProp="image"
          />
          <Grid as="header" lg="2">
            <Col gap="8px">
              <h3 itemProp="name">
                <span>{post.frontmatter.title}</span>
              </h3>
              <Label
                transparent
              >{`${contributions[0]}, ${post.frontmatter.meta.year}`}</Label>
            </Col>
            <Col>
              <p>{post.frontmatter.subtitle}</p>
            </Col>
          </Grid>
        </Article>
      </>
    )
  } else {
    article = (
      <>
        <Article itemScope itemType="http://schema.org/Article">
          <header>
            <h3 itemProp="name">
              <span>{`${post.frontmatter.title}: ${post.frontmatter.subtitle}`}</span>
            </h3>
            {diffDays(post.frontmatter.date.modified)}
          </header>
        </Article>
      </>
    )
  }

  return (
    <li key={post.fields.slug}>
      <AnimatedLink to={post.fields.slug} itemProp="url">
        {article}
      </AnimatedLink>
    </li>
  )
}

export default PostCard
