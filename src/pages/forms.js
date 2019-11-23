import React from 'react'
import { graphql } from 'gatsby'
import PageTemplateInternal from '../templates/pageInteral'

const Form = ({ form }) => {
  const { title, description, instructions, formFile } = form
  return (
    <article>
      <h3>{form.title}</h3>
      <h4>Instructions</h4>
      <aside
        dangerouslySetInnerHTML={{
          __html: instructions.childMarkdownRemark.html,
        }}
      />
      <a href={formFile.file.url}>Download File</a>
    </article>
  )
}

const Forms = ({ data }) => {
  const forms = data.allContentfulForm.edges
  debugger
  return (
    <PageTemplateInternal data={data}>
      {forms.map(({ node }) => {
        return <Form key={node.title} form={node} />
      })}
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
    allContentfulForm {
      totalCount
      edges {
        node {
          title
          instructions {
            childMarkdownRemark {
              html
            }
          }
          formFile {
            file {
              url
            }
          }
        }
      }
    }
  }
`
