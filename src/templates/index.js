import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Button from '../components/Button'
// import CardList from '../components/CardList'
// import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
// import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import HomeHero from '../components/HomeHero'
import Hero from '../components/Hero'

import styled from 'styled-components'
const Article = styled.article`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : null)};
`

const CallToAction = styled.aside`
  max-width: ${props => props.theme.sizes.maxWidth};
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 2rem;
  padding-top: 7rem;
  line-height: 1.5;
  font-family: ${props => props.theme.fonts.primary};
  text-align: center;
  color: ${props => props.theme.colors.white};
  blockquote {
    font-size: 2.5rem;
    /* text-align: left; */
    margin-bottom: 2rem;
  }
  a {
  }
  button {
    color: ${props => props.theme.colors.white};
  }
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
    transform: translateY(10%);
    blockquote {
      font-weight: 100;
      font-size: 5rem;
    }
  }
  @media (min-width: ${props => props.theme.responsive.large}) {
    blockquote {
      font-size: 6rem;
    }
  }
`
const Index = ({ data, pageContext }) => {
  // const posts = data.allContentfulPost.edges
  // const featuredPost = posts[0].node
  // const { currentPage } = pageContext
  // const isFirstPage = currentPage === 1
  const postNode = data.contentfulPage
  const { title, slug, heroImage } = data.contentfulPage
  // const heroImage = data.allContentfulAsset.nodes[0]
  const { edges: groups } = data.allContentfulGroup

  const HomeH1 = styled.h1`
    text-align: center;
  `
  return (
    <Layout>
      <Helmet>
        <title>{`Restoring Hope - ${title}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      <Menu>
        <Hero image={heroImage} height={'50vh'} />
        {/* <HomeHero */}
        {/*   image={heroImage} */}
        {/*   height="50vh" */}
        {/*   quote="Empowering wholehearted living by cultivating and embracing hope." */}
        {/* /> */}
        <CallToAction>
          <blockquote>
            Empowering wholehearted living by cultivating and embracing hope.
          </blockquote>
          <a href="tel:1-208-602-9296">
            <Button>Call Us Now</Button>
          </a>
        </CallToAction>
      </Menu>
      {/* <SEO /> */}
      {/* <Helmet> */}
      {/*   <title>{config.siteTitle}</title> */}
      {/* </Helmet> */}
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
            {groups.map(({ node: group }) => {
              return (
                <li key={group.title}>
                  <h2>{group.title}</h2>
                </li>
              )
            })}
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
    contentfulPage(slug: { eq: "home" }) {
      title
      slug
      metaDescription {
        internal {
          content
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
    allContentfulGroup {
      edges {
        node {
          title
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
