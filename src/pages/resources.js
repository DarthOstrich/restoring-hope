import React from 'react'
import { graphql } from 'gatsby'
import PageTemplate from '../templates/page'

const Resources = ({ data }) => {
  return <PageTemplate data={data} />
}

export default Resources

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "resources" }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
    }
  }
`
