import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
  // Styles for headersLeft
  flex-direction: ${props => props.headersLeft && 'row;'};
  flex-wrap: ${props => props.headersLeft && 'wrap;'};
  @media (min-width: 475px) {
    > h1,
    h2 {
      flex-basis: ${props => props.headersLeft && '33%;'};
      text-align: ${props => props.headersLeft && 'right;'};
      margin-right: ${props => props.headersLeft && '1rem;'};
    }
    > article {
      flex-basis: ${props => props.headersLeft && '66%;'};
    }
  }
`

const Container = props => {
  const headersLeft = props.layout === 'headersLeft' ? true : false
  return <Wrapper headersLeft={headersLeft}>{props.children}</Wrapper>
}

export default Container
