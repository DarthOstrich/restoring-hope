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

const ClinicianBio = styled(Article)`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  div {
    flex-basis: 33%;
  }
  section {
    flex-basis: 33%;
  }
  aside {
    flex-basis: 33%;
  }
`

const formatAgeGroup = groups => {
  let list = ''
  groups.map((group, index) => {
    if (index === groups.length - 1) {
      list += `and ${group} `
    } else {
      list += `${group} `
    }
  })
  return list
}

const Clinician = ({ clinician }) => {
  const BioPic = styled(Img)`
    border-radius: 50%;
  `
  const { name, title, ageGroup, specialties, profilePicture } = clinician
  return (
    <ClinicianBio>
      <BioPic fluid={profilePicture.fluid} />
      <section>
        <h2>{name}</h2>
        <h4>{title}</h4>
        <p>{formatAgeGroup(ageGroup)}</p>
        {/* <p>Age Group: </p> */}
        {/* <ul> */}
        {/*   {ageGroup.map(group => ( */}
        {/*     <li key={group}>{group}</li> */}
        {/*   ))} */}
        {/* </ul> */}
      </section>
      <aside>
        <h3>Specialties</h3>
        <ul>
          {specialties.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </aside>
    </ClinicianBio>
  )
}

const Clinicians = ({ clinicians }) => {
  return (
    <section>
      {clinicians.map(clinician => (
        <Clinician key={clinician.node.name} clinician={clinician.node} />
      ))}
    </section>
  )
}

const About = ({ data }) => {
  const postNode = {
    title: `Who We Are - ${config.siteTitle}`,
  }

  const clinicians = data.allContentfulClinician.edges
  const { heroImage } = data.contentfulPage

  const companyInfo = data.contentfulCompanyInfo
  const {
    missionStatementLong,
    missionStatementShort,
    companyHistory,
  } = companyInfo

  return (
    <Layout>
      <Helmet>
        <title>{`About - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="about" customTitle />

      <Hero title="Who We Are" image={heroImage} height={'50vh'} />
      <Container>
        <h1>Mission Statement</h1>
        <Article
          dangerouslySetInnerHTML={{
            __html: missionStatementLong.childMarkdownRemark.html,
          }}
        />
        <h1>Clinicians</h1>
        <Clinicians clinicians={clinicians} />
        <h1>Company History</h1>
        <Article
          dangerouslySetInnerHTML={{
            __html: companyHistory.childMarkdownRemark.html,
          }}
        />
      </Container>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "about" }) {
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
    contentfulCompanyInfo(contentful_id: { eq: "127ollEi7qxzPVkBWiM0oT" }) {
      id
      missionStatementShort
      missionStatementLong {
        childMarkdownRemark {
          html
        }
      }
      title
      address {
        lat
        lon
      }
      companyHistory {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulClinician {
      edges {
        node {
          contentful_id
          name
          title
          ageGroup
          specialties
          profilePicture {
            title
            fluid(maxWidth: 200) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 200) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`