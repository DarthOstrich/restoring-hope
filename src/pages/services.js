import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import PageTemplateInternal from '../templates/pageInteral'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Article from '../components/Article'
import { ButtonStyle } from '../components/Button'
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

const TruncatedArticle = styled.article`
  position: relative;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: ${props => (!props.expanded ? '10rem' : `${props.maxHeight}px`)};
  margin-bottom: 4rem;
`
const ReadMoreBlock = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(0deg, #f2f2f2, transparent);
  width: 100%;
  text-align: right;
  padding: 1rem;
`

const TruncatedText = ({ html, id }) => {
  const ref = useRef()
  const [expanded, setExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState()

  useLayoutEffect(() => {
    // do something
    setMaxHeight(ref.current.clientHeight)
  }, [ref.current])

  return (
    <TruncatedArticle expanded={expanded} maxHeight={maxHeight}>
      <div
        style={{ paddingBottom: '4rem' }}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
        key={id}
        ref={ref}
      />
      <ReadMoreBlock>
        <ButtonStyle onClick={() => setExpanded(!expanded)}>
          Read {expanded ? 'Less' : 'More'}
        </ButtonStyle>
      </ReadMoreBlock>
    </TruncatedArticle>
  )
}
const Services = ({ data }) => {
  // const postNode = {
  //   title: `Services - ${config.siteTitle}`,
  // }
  //
  const { servicesOverview } = data.contentfulCompanyInfo
  const { edges: services } = data.allContentfulService
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
            <TruncatedText
              html={node.description.childMarkdownRemark.html}
              id={node.id}
            />
          </React.Fragment>
        )
      })}
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
