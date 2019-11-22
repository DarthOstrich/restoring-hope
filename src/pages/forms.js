import React from 'react'
import { graphql } from 'gatsby'
import PageTemplateInternal from '../templates/pageInteral'

const Forms = ({ data }) => {
  debugger
  return (
    <PageTemplateInternal data={data}>
      <p>Words</p>
    </PageTemplateInternal>
  )
}
export default Forms

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "forms" }) {
      slug
      title
      metaDescription {
        internal {
          content
        }
      }
      heroImage {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1200) {
          src
          width
          height
        }
      }
    }
  }
`
