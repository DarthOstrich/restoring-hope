import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import PageTemplateInternal from '../templates/pageInteral'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Article from '../components/Article'
// import PageTitle from '../components/PageTitle'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

const ArticleWithStyledList = styled(Article)`
  ul {
    li {
      padding-left: 2rem;
      :before {
        content: '✓'; /* FontAwesome Unicode */
        display: inline-block;
        margin-left: -2rem; /* same as padding-left set on li */
        width: 2rem; /* same as padding-left set on li */
        color: ${props => props.theme.colors.highlight};
      }
    }
  }
`

const GroupUl = styled.ul`
  @media (min-width: ${props => props.theme.responsive.medium}) {
    column-count: 2;
  }
`
const Services = ({ data }) => {
  // const postNode = {
  //   title: `Services - ${config.siteTitle}`,
  // }
  //
  const {
    servicesOverview,
    generalAdmissionCriteria,
    behavioralAdmissionCriteria,
  } = data.contentfulCompanyInfo
  const { edges: services } = data.allContentfulService
  const { edges: groups } = data.allContentfulGroup
  //
  // const { heroImage } = data.contentfulPage
  const titleToId = function(title) {
    const array = title.split(' ')
    return array[0].toLowerCase()
  }
  return (
    <PageTemplateInternal data={data} layout={'headersLeft'}>
      <h1>Overview of Services</h1>
      <Article
        dangerouslySetInnerHTML={{
          __html: servicesOverview.childMarkdownRemark.html,
        }}
      />
      {services.map(({ node }) => {
        const htmlId = titleToId(node.title)
        return (
          <React.Fragment key={node.title}>
            <h2 id={htmlId}>{node.title}</h2>
            <Article
              dangerouslySetInnerHTML={{
                __html: node.description.childMarkdownRemark.html,
              }}
              key={node.id}
            />
          </React.Fragment>
        )
      })}
      {/* <h1>Groups Offered</h1> */}
      {/* <Article> */}
      {/*   <GroupUl> */}
      {/*     {groups.map(({ node: group }) => { */}
      {/*       return ( */}
      {/*         <li key={group.title}> */}
      {/*           <h4>{group.title}</h4> */}
      {/*         </li> */}
      {/*       ) */}
      {/*     })} */}
      {/*   </GroupUl> */}
      {/* </Article> */}
    </PageTemplateInternal>
  )
}

export default Services

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "services" }) {
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
    allContentfulService(sort: { order: ASC, fields: order }) {
      edges {
        node {
          id
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
