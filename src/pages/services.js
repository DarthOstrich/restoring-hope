import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Article from '../components/Article'
// import PageTitle from '../components/PageTitle'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

const Services = ({ data }) => {
  const postNode = {
    title: `Services - ${config.siteTitle}`,
  }

  const {
    servicesOverview,
    generalAdmissionCriteria,
    behavioralAdmissionCriteria,
  } = data.contentfulCompanyInfo
  const { edges: services } = data.allContentfulService
  const { edges: groups } = data.allContentfulGroup

  const { heroImage } = data.contentfulPage
  return (
    <Layout>
      <Helmet>
        <title>{`Services - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="about" customTitle />

      <Hero title="Services" image={heroImage} height={'50vh'} />
      <Container>
        <h1>Overview of Services</h1>
        <Article
          dangerouslySetInnerHTML={{
            __html: servicesOverview.childMarkdownRemark.html,
          }}
        />
        {services.map(({ node }) => {
          return (
            <>
              <h2>{node.title}</h2>
              <Article
                dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}
              />
            </>
          )
        })}
        <h1>Groups Offered</h1>
        <Article>
          <ul>
            {groups.map(({ node: group }) => {
              return (
                <li>
                  <h2>{group.title}</h2>
                </li>
              )
            })}
          </ul>
        </Article>
        <h1>Criteria For Admission</h1>
        <Article
          dangerouslySetInnerHTML={{
            __html: generalAdmissionCriteria.childMarkdownRemark.html,
          }}
        />
        <h2>Behavioral Health Admission Criteria</h2>
        <Article
          dangerouslySetInnerHTML={{
            __html: behavioralAdmissionCriteria.childMarkdownRemark.html,
          }}
        />
      </Container>
    </Layout>
  )
}

export default Services

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "services" }) {
      title
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
    contentfulCompanyInfo {
      contentful_id
      servicesOverview {
        childMarkdownRemark {
          html
        }
      }
      generalAdmissionCriteria {
        childMarkdownRemark {
          html
        }
      }
      behavioralAdmissionCriteria {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
            description
          }
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
