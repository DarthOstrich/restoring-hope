import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
  flex-wrap: wrap;
  @media (min-width: 475px) {
    > h1,
    h2 {
      flex-basis: 33%;
    }
    > article {
      flex-basis: 66%;
    }
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
