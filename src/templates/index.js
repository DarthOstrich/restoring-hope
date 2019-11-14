import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import CardList from '../components/CardList'
// import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
// import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import HomeHero from '../components/HomeHero'

import styled from 'styled-components'
const Article = styled.article`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : null)};
`

const Index = ({ data, pageContext }) => {
  // const posts = data.allContentfulPost.edges
  // const featuredPost = posts[0].node
  // const { currentPage } = pageContext
  // const isFirstPage = currentPage === 1
  const heroImage = data.allContentfulAsset.nodes[0]
  const groupList = [
    'Trauma Education',
    'Trauma Process Group',
    'Co-Dependency Group',
    'Helping Woman Recover',
    'Helping Men Recover',
    'Substance Use Disorder (SUD) support group',
    'Family Education Group',
    'Mindfulness Relapse Prevention',
    'Early Recovery Skills',
    'Moral Reconation Therapy (MRT)',
    'Anger Management',
  ]

  const HomeH1 = styled.h1`
    text-align: center;
  `

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <HomeHero
        image={heroImage}
        height="50vh"
        quote="Empowering wholehearted living by cultivating and embracing hope."
      ></HomeHero>
      <Container>
        <Article direction="column">
          <HomeH1>Services</HomeH1>
          <ul>
            <li>
              <h2>Individual Therapy</h2>
            </li>
            <li>
              <h2>Group Therapy</h2>
            </li>
            <li>
              <h2>Co-Occuring Disorder Treatment</h2>
            </li>
            <li>
              <h2>Trauma Informed Treatment</h2>
            </li>
          </ul>
        </Article>
        <Article direction="column">
          <HomeH1>Groups</HomeH1>
          <ul>
            {groupList.map(group => (
              <li key={group}>
                <h2>{group}</h2>
              </li>
            ))}
          </ul>
        </Article>
        <Article direction="column">
          <HomeH1>Where We Are</HomeH1>
          <h2>Office Hours</h2>
          <h3>
            <p>9:00 AM &mdash; 5:00 PM</p>
          </h3>
          <h2>Address</h2>
          <address>
            <h3>
              <p>850 E Franklin Rd. Ste 405</p>
            </h3>
            <h3>
              <p>Meridian, Idaho 83642</p>
            </h3>
          </address>
        </Article>
      </Container>

      {/* {!isFirstPage && ( */}
      {/*   <Helmet> */}
      {/*     <title>{`${config.siteTitle} - Page ${currentPage}`}</title> */}
      {/*   </Helmet> */}
      {/* )} */}
      {/* <Container> */}
      {/*   {isFirstPage ? ( */}
      {/*     <CardList> */}
      {/*       <Card {...featuredPost} featured /> */}
      {/*       {posts.slice(1).map(({ node: post }) => ( */}
      {/*         <Card key={post.id} {...post} /> */}
      {/*       ))} */}
      {/*     </CardList> */}
      {/*   ) : ( */}
      {/*     <CardList> */}
      {/*       {posts.map(({ node: post }) => ( */}
      {/*         <Card key={post.id} {...post} /> */}
      {/*       ))} */}
      {/*     </CardList> */}
      {/*   )} */}
      {/* </Container> */}
      {/* <Pagination context={pageContext} /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { contentful_id: { eq: "5UmikbgYwmuH0aWuFN3Zhh" } }
    ) {
      nodes {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogImg: resize(width: 1800) {
          src
          width
          height
        }
      }
    }
  }
`
// export const query = graphql`
//   query($skip: Int!, $limit: Int!) {
//     allContentfulPost(
//       sort: { fields: [publishDate], order: DESC }
//       limit: $limit
//       skip: $skip
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

export default Index
