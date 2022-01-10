import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Label } from "../typography"

const FeaturedImage = styled(GatsbyImage)`
  margin-bottom: 1rem;
`

const Article = styled.article`
  & header {
    opacity: 0.5;
    transition: opacity 0.25s ease-out;
  }

  &:hover header {
    opacity: 1;
  }
`

const PostCard = ({ post }) => {
  let contributions = post.frontmatter.meta.contribution

  return (
    <li key={post.fields.slug}>
      <Link to={post.fields.slug} itemProp="url">
        <Article itemScope itemType="http://schema.org/Article">
          <FeaturedImage
            image={getImage(post.frontmatter.featuredImage.src)}
            alt={post.frontmatter.featuredImage.alt}
            itemProp="image"
          />
          <header>
            <h3 itemProp="name">{post.frontmatter.title}</h3>
            <Label>{`${contributions[0]}, ${post.frontmatter.meta.year}`}</Label>
          </header>
        </Article>
      </Link>
    </li>
  )
}

export default PostCard
