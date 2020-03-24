import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
// import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageTemplateInteral from '../templates/pageInteral'
// import Menu from '../components/Menu'
// import Hero from '../components/Hero'
// import Layout from '../components/Layout'
// import Container from '../components/Container'
// import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const WhereSection = styled.section`
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* @media (min-width: ${props => props.theme.responsive.medium}) { */
  /*   display: flex; */
  /*   flex-direction: row; */
  /*   justify-content: space-between; */
  /*   > div, */
  /*   /* aside { */ */
  /*   /*   width: 50%; */ */
  /*   /* } */ */
  /* } */
`

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  const { title, slug, heroImage } = data.contentfulPage
  const {
    addressCity,
    addressState,
    addressStreet,
    addressZip,
    officeHours,
    phone,
  } = data.contentfulCompanyInfo

  return (
    <PageTemplateInteral data={data} layout={'headersLeft'}>
      <h1>Hours of Operation</h1>

      <WhereSection>
        <h3>Office Hours</h3>
        <h4>
          <p>{officeHours}</p>
        </h4>
        <h3>Address</h3>
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
      </WhereSection>
      <h1>Contact</h1>

      <ContactForm />
    </PageTemplateInteral>
  )
}

export default Contact

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "contact" }) {
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
    }
  }
`
