import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Hero from '../components/Hero'
// import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const PageTemplate = ({ data }) => {
  const { title, slug, body, heroImage } = data.contentfulPage
  const postNode = data.contentfulPage
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Hero title={title} image={heroImage} height={'50vh'} />
      <Container>{body && <PageBody body={body} />}</Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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
// export const query = graphql`
//   query($slug: String!) {
//     contentfulPage(slug: { eq: $slug }) {
//       title
//       slug
//       metaDescription {
//         internal {
//           content
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//           excerpt(pruneLength: 320)
//         }
//       }
//     }
//   }
// `
//
export default PageTemplate
