import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'column')};
  margin-bottom: 1rem;
`

// const Article = props => {
//   return <StyledArticle>{props.children}</StyledArticle>
// }

export default StyledArticle
