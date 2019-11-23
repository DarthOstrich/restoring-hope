import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
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
    background: rgba(0, 0, 0, 0.25);
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

const Title = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
  font-weight: 700;
  position: absolute;
  right: 50%;
  bottom: 0;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 2rem;
  transform: translate(50%, 0%);
  text-align: right;
  color: ${props => props.theme.colors.white};
`

const Hero = props => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
