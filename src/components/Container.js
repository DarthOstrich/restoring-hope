import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 4rem 2rem 3rem;
  flex-grow: 1;
  // Styles for headersLeft
  flex-direction: ${props => props.headersLeft && 'row;'};
  flex-wrap: ${props => props.headersLeft && 'wrap;'};
  > h1,
  h2 {
		flex-grow: ${props => props.headersLeft && '0;'};
    flex-basis: ${props => props.headersLeft && '300px;'};
  }
  > article, section {
		flex-grow: ${props => props.headersLeft && '1;'};
    flex-basis: ${props => props.headersLeft && '600px;'};
  }
	margin-top: ${props => props.noHero && '100px;'};
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    > h1,
    h2 {
      text-align: ${props => props.headersLeft && 'right;'};
      margin-right: ${props => props.headersLeft && '1rem;'};
    }
    > article, section {
      /* flex-basis: ${props => props.headersLeft && '66%;'}; */
    }
  }
`

const Container = props => {
  const headersLeft = props.layout === 'headersLeft' ? true : false
  const noHero = props.noHero ? true : false
  return (
    <Wrapper headersLeft={headersLeft} noHero={noHero}>
      {props.children}
    </Wrapper>
  )
}

export default Container
