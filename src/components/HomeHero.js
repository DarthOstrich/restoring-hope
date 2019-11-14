import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Button from '../components/Button'

const Wrapper = styled.section`
  position: relative;
  /* min-height: 300px; */
`

const CallToAction = styled.aside`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: auto;
  padding: 2rem;
  padding-top: 7rem;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.white};
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  blockquote {
    font-size: 2.5rem;
    text-align: left;
    margin-bottom: 2rem;
  }
  a {
  }
  button {
    color: ${props => props.theme.colors.white};
  }
`

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  /* min-height: 300px; */
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    /* background: rgba(0, 0, 0, 0.5); */
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

// const Title = styled.h1`
//   font-size: 3em;
//   text-transform: capitalize;
//   font-weight: 600;
//   position: absolute;
//   width: 100%;
//   max-width: ${props => props.theme.sizes.maxWidthCentered};
//   padding: 0 1rem;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: white;
// `

const HomeHero = props => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
      style={{ position: 'absolute' }}
      position={'top'}
    />
    <CallToAction height={props.height}>
      <blockquote>{props.quote}</blockquote>
      <a href="tel:1-208-602-9296">
        <Button>Call Us Now</Button>
      </a>
    </CallToAction>
  </Wrapper>
)

export default HomeHero
