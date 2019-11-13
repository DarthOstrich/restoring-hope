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

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <Container>
        <HomeHero>Words</HomeHero>
        <Article direction="column">
          <h1>Services</h1>
          <ul>
            <li>Individual Therapy</li>
            <li>Group Therapy</li>
            <li>Co-Occuring Disorder Treatment</li>
            <li>Trauma Informed Treatment</li>
          </ul>
        </Article>
        <Article direction="column">
          <h1>Groups</h1>
          <ul>
            {groupList.map(group => (
              <li>{group}</li>
            ))}
          </ul>
        </Article>
        <Article direction="column">
          <h1>Where We Are</h1>
          <h2>Office Hours</h2>
          <p>9:00 AM &mdash; 5:00 PM</p>
          <h2>Address</h2>
          <address>
            <p>850 E Franklin Rd. Ste 405</p>
            <p>Meridian, Idaho 83642</p>
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

export default Index
