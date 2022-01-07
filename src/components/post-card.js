import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Label } from "../typography"

const FeaturedImage = styled(GatsbyImage)`
  margin-bottom: 1rem;
`

const PostCard = ({ post }) => {
  let contributions = post.frontmatter.meta.contribution

  return (
    <li key={post.fields.slug}>
      <Link to={post.fields.slug} itemProp="url">
        <article itemScope itemType="http://schema.org/Article">
          <FeaturedImage
            image={getImage(post.frontmatter.featuredImage.src)}
            alt={post.frontmatter.featuredImage.alt}
            itemProp="image"
          />
          <h3 itemProp="headline">{post.frontmatter.title}</h3>
          <footer>
            <Label>{`${contributions[0]}, ${post.frontmatter.meta.year}`}</Label>
          </footer>
        </article>
      </Link>
    </li>
  )
}

export default PostCard
