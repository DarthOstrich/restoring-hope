import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
// import Button from '../components/Button'
import CardList from '../components/CardList'
import Card from '../components/Card'
import FeaturedPost from '../components/FeaturedPost'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
// import HomeHero from '../components/HomeHero'
// import Hero from '../components/Hero'

// import styled from 'styled-components'

const Blog = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
  // const postNode = data.contentfulPage
  // const { title, slug, heroImage } = data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`Restoring Hope - Blog`}</title>
      </Helmet>
      {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}
      <Menu solid />
      {/* <SEO /> */}
      {/* <Helmet> */}
      {/*   <title>{config.siteTitle}</title> */}
      {/* </Helmet> */}
      {isFirstPage && (
        <>
          <Container noHero>
            <FeaturedPost {...featuredPost} />
            <CardList>
              {posts.slice(1).map(({ node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>
          </Container>
        </>
      )}
      {!isFirstPage && (
        <>
          <Helmet>
            <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
          </Helmet>
          <Container noHero>
            <CardList>
              {posts.map(({ node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>
          </Container>
        </>
      )}
      <Pagination context={pageContext} />
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allContentfulPost(
//       sort: { fields: [publishDate], order: DESC }
//       limit: 100
//       skip: 0
//     ) {
//       edges {
//         node {
//           title
//           id
//           slug
//           publishDate(formatString: "MMMM DD, YYYY")
//           heroImage {
//             title
//             fluid(maxWidth: 1800) {
//               ...GatsbyContentfulFluid_withWebp_noBase64
//             }
//           }
//           body {
//             childMarkdownRemark {
//               timeToRead
//               html
//               excerpt(pruneLength: 80)
//             }
//           }
//         }
//       }
//     }
//   }
// `
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Blog
