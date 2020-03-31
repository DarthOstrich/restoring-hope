import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faUsers, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Button from '../components/Button'
// import CardList from '../components/CardList'
// import Card from '../components/Card'
import Container from '../components/Container'
// import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
// import config from '../utils/siteConfig'
// import HomeHero from '../components/HomeHero'
import Hero from '../components/Hero'
import logo from '../../static/logos/RH-vector-logo-color.png'

import styled from 'styled-components'
const Article = styled.article`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : null)};
  padding: 20px 0px;
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
    margin-top: 9rem;
    height: ${props => props.height || 'auto'};
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
    transform: translateY(30%);
    margin-top: 0;
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
const HomeH1 = styled.h1`
  margin: 0 auto 4rem auto;
  text-align: center;
`
const HomeH2 = styled.h2`
  margin: 4rem auto;
  text-align: center;
`
const ServicesLogo = styled.img`
  max-width: 10rem;
  margin: auto;
`
const ServicesUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    /* margin: 0; */
  }
  svg {
    color: ${props => props.theme.colors.highlight};
    margin-bottom: 1rem;
    flex-basis: 30%;
  }
  h2 {
    flex-basis: 70%;
  }
  @media (min-width: ${props => props.theme.responsive.large}) {
    text-align: center;
    flex-direction: row;
    li {
      display: block;
    }
    h2 {
    }
  }
`
const GroupUl = styled.ul`
  @media (min-width: ${props => props.theme.responsive.medium}) {
    column-count: 2;
  }
`
const WhereSection = styled.section`
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div,
    aside {
      width: 50%;
    }
  }
`

const UnstyledLink = styled.a`
  font-weight: inherit;
  text-align: center;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
`
const Index = ({ data, pageContext }) => {
  // const posts = data.allContentfulPost.edges
  // const featuredPost = posts[0].node
  // const { currentPage } = pageContext
  // const isFirstPage = currentPage === 1
  const postNode = data.contentfulPage
  const { title, slug, heroImage } = data.contentfulPage
  const { edges: groups } = data.allContentfulGroup
  const { addressCity, addressState, addressStreet, addressZip, officeHours, phone, exteriorPhoto, missionStatementShort, missionStatementLong } = data.contentfulCompanyInfo

  return (
    <Layout>
      <Helmet>
        <title>{`Restoring Hope - ${title}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      <Menu>
        <Hero image={heroImage} height={'50vh'} />
        <CallToAction>
          <blockquote>Restoring Hope</blockquote>
          <a href={'tel:' + phone}>
            <Button outline={true}>Call Us Now</Button>
          </a>
        </CallToAction>
      </Menu>
      {/* <SEO /> */}
      {/* <Helmet> */}
      {/*   <title>{config.siteTitle}</title> */}
      {/* </Helmet> */}
      <Container>
        <Article direction="column">
          <HomeH1>Vision Statement</HomeH1>
          <HomeH2>{missionStatementShort}</HomeH2>
        </Article>
        <Article direction="column">
          <HomeH1>Core Values</HomeH1>
          <HomeH2>Hope, Compassion, Transparency &amp; Empowerment</HomeH2>
        </Article>
        <Article direction="column">
          <HomeH1>Services</HomeH1>
          <ServicesUl>
            <li>
              <UnstyledLink href="/services#intensive">
                <ServicesLogo src={logo} alt="Restoring Hope" />
                <h2>Online Counseling</h2>
              </UnstyledLink>
            </li>
            <li>
              <UnstyledLink href="/services#trauma-informed">
                <ServicesLogo src={logo} alt="Restoring Hope" />
                <h2>Trauma Informed Treatment</h2>
              </UnstyledLink>
            </li>
            <li>
              <UnstyledLink href="/services#individual">
                <ServicesLogo src={logo} alt="Restoring Hope" />
                <h2>Individual Therapy</h2>
              </UnstyledLink>
            </li>
            <li>
              <UnstyledLink href="/services#group">
                <ServicesLogo src={logo} alt="Restoring Hope" />
                <h2>Group Therapy</h2>
              </UnstyledLink>
            </li>
          </ServicesUl>
        </Article>
        {/* <Article direction="column"> */}
        {/*   <HomeH1>Groups</HomeH1> */}
        {/*   <GroupUl> */}
        {/*     {groups.map(({ node: group }) => { */}
        {/*       return ( */}
        {/*         <li key={group.title}> */}
        {/*           <h2>{group.title}</h2> */}
        {/*         </li> */}
        {/*       ) */}
        {/*     })} */}
        {/*   </GroupUl> */}
        {/* </Article> */}
        <Article direction="column">
          <HomeH1>Where We Are</HomeH1>
          <WhereSection>
            <aside>
              <h2>Office Hours</h2>
              <h3>
                <p>{officeHours}</p>
              </h3>
              <h2>Address</h2>
              <address>
                <h3>
                  <p>{addressStreet}</p>
                </h3>
                <h3>
                  <p>
                    {addressState} {addressCity}, {addressZip}
                  </p>
                </h3>
              </address>
            </aside>
            <Img fluid={exteriorPhoto.fluid} alt="exterior of Restoring Hope" />
          </WhereSection>
        </Article>
      </Container>
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
    contentfulCompanyInfo {
      addressCity
      addressState
      addressStreet
      addressZip
      address {
        lat
        lon
      }
      officeHours
      phone
      missionStatementLong {
        missionStatementLong
      }
      missionStatementShort
      exteriorPhoto {
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

export default Index
