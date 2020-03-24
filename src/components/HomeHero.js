import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Button from '../components/Button'

const Wrapper = styled.section`
  position: relative;
  /* min-height: 300px; */
`

const BgImg = styled(Img)`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
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
    /* position: absolute; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const HomeHero = props => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
      position={'top'}
    />
  </Wrapper>
)

export default HomeHero
