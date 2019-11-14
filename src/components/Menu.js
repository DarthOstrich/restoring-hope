import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
	background: transparent;
  /* background: ${props => props.theme.colors.base}; */
  width: 100%;
  /* padding: 2rem; */
	position: fixed;
	z-index: 100000000;
  /* width: 100%; */
  /* max-width: ${props => props.theme.sizes.maxWidth}; */
  margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`
// const Nav = styled.nav`
//   width: 100%;
//   max-width: ${props => props.theme.sizes.maxWidth};
//   margin: 0 auto;
//   padding: 0 1.5em;
//
//   ul {
//     display: flex;
//     justify-content: space-between;
//   }
//
//   li {
//     display: inline-block;
//     margin-left: 1em;
//     &:first-child {
//       position: relative;
//       margin: 0;
//       flex-basis: 100%;
//     }
//   }
//
//   a {
//     text-decoration: none;
//     color: DarkGray;
//     font-weight: 600;
//     transition: all 0.2s;
//     border-bottom: 2px solid ${props => props.theme.colors.base};
//     &:hover {
//       color: white;
//     }
//   }
// `

const activeLinkStyle = {
  color: 'white',
}

const StyledBurger = styled.button`
  /* position: absolute; */
  /* top: 2rem; */
  /* right: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  /* &:focus { */
  /*   outline: none; */
  /* } */

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open, theme }) =>
      open ? theme.colors.white : theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.secondary};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  /* height: 100vh; */
  text-align: left;
  padding: 2rem;
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const NavMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link to="/about/" activeStyle={activeLinkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeStyle={activeLinkStyle}>
            Contact
          </Link>
        </li>
      </ul>
    </StyledMenu>
  )
}

const BurgerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  z-index: 100000000;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const Menu = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Header>
      <BurgerWrapper>
        <Link to="/" activeStyle={activeLinkStyle}>
          Logo
        </Link>
        <Burger open={open} setOpen={setOpen} />
      </BurgerWrapper>
      <NavMenu open={open} setOpen={setOpen} />
    </Header>
  )
}

export default Menu
