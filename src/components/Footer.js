import React from 'react'
import styled from 'styled-components'
import logoTypo from '../../static/logos/RH-LogoType-Black.png'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  padding: 1rem;
  background: ${props => props.theme.colors.base};
`
const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: auto;
  width: 100%;
`

// const List = styled.ul`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: flex-start;
//   width: 100%;
//   border-top: 1px solid ${props => props.theme.colors.secondary};
//   padding: 1em 0 2em;
//   margin: 0 1.5em;
// `
//
// const Item = styled.li`
//   display: inline-block;
//   padding: 0.25em 0;
//   width: 100%;
//   @media screen and (min-width: ${props => props.theme.responsive.small}) {
//     width: auto;
//   }
//   a {
//     font-weight: 600;
//     transition: all 0.2s;
//     color: ${props => props.theme.colors.base};
//     &:hover {
//       color: ${props => props.theme.colors.highlight};
//     }
//     &:visited {
//       color: ${props => props.theme.colors.base};
//     }
//   }
// `
const date = new Date()
const Footer = () => (
  <Wrapper>
    <Container>
      <center>
        <img
          src={'/logos/RH-FullLogo-Black.png'}
          style={{ maxWidth: '200px', margin: '2rem' }}
        />
        <p>
          Copyright &copy; {date.getFullYear()} Restoring Hope - Healing from
          Trauma and Addiction, LLC
        </p>
      </center>
    </Container>
  </Wrapper>
)

export default Footer
