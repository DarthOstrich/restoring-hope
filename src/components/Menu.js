import React, { useRef, useLayoutEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../styles/theme'

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
  &:focus {
    outline: none;
  }

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
	align-items: center;
  background: ${props => props.theme.colors.secondary};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  text-align: left;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;

  li {
    margin-bottom: 1rem;
  }

  a {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.8rem;
    text-transform: uppercase;
    /* color: ${props => props.theme.colors.black}; */
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
	}

	@media (min-width: 426px) {
		flex-direction: row;
		transform: translateX(0);
		justify-content: space-between;
		background: ${({ fillNavBackground, theme }) =>
      fillNavBackground ? theme.colors.secondary : 'transparent'};
		ul {

		text-align: right;
	}
		li {
			display: inline;
			margin-left: 1rem;
		}
	}
  /* height: 100vh; */
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */

  /* @media (max-width: 576px) { */
  /*   width: 100%; */
  /* } */

  /* a { */
  /*   font-size: 2rem; */
  /*   text-transform: uppercase; */
  /*   padding: 2rem 0; */
  /*   font-weight: bold; */
  /*   letter-spacing: 0.5rem; */
  /*   color: #0d0c1d; */
  /*   text-decoration: none; */
  /*   transition: color 0.3s linear; */
  /*  */
  /*   @media (max-width: 576px) { */
  /*     font-size: 1.5rem; */
  /*     text-align: center; */
  /*   } */
  /*  */
  /*   &:hover { */
  /*     color: #343078; */
  /*   } */
  /* } */
`

const NavMenu = ({ open, fillNavBackground }) => {
  const isBrowser = typeof window !== 'undefined'
  let isMobile = false
  if (isBrowser) {
    isMobile = window.innerWidth < 426
  }

  return (
    <StyledMenu open={open} fillNavBackground={fillNavBackground}>
      <span>
        <Logo src="/logos/RH-vector-logo-color.png" />
      </span>
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
        <li>
          <Link to="/resources/" activeStyle={activeLinkStyle}>
            Community Resources
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
  transition: background 0.3s ease-in-out;
  background: ${props =>
    props.fillNavBackground ? props.theme.colors.secondary : 'transparent'};
  align-items: center;
  @media (min-width: 426px) {
    display: none;
  }
`

const Logo = styled.img`
  width: 100%;
  max-width: 50px;
`

const Menu = () => {
  // check to see if it is a browser
  const isBrowser = typeof window !== 'undefined'
  // set initial state using React hooks
  const [open, setOpen] = React.useState(false)
  const [fillNavBackground, setFillNavBackground] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(0)
  let isMobile
  if (isBrowser) {
    isMobile = window.innerWidth < 426
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
  }

  function getScrollPosition() {
    if (!isBrowser) return { x: 0, y: 0 }

    return { x: window.scrollX, y: window.scrollY }

    // const target = element ? element.current : document.body
    // const position = target.getBoundingClientRect()

    // return useWindow
    //   ? { x: window.scrollX, y: window.scrollY }
    //   : { x: position.left, y: position.top }
  }

  function handleScroll() {
    const position = getScrollPosition()
    if (position.y > 100) {
      setFillNavBackground(true)
    } else if (position.y <= 100) {
      setFillNavBackground(false)
    }
  }
  function handleResize() {
    isMobile = window.innerWidth < 426
    // setWindowWidth(window.innerWidth)
  }

  return (
    <Header>
      {isMobile && (
        <BurgerWrapper
          fillNavBackground={fillNavBackground}
          setFillNavBackground={setFillNavBackground}
        >
          <Link to="/" activeStyle={activeLinkStyle}>
            <Logo src="/logos/RH-vector-logo-color.png" />
          </Link>
          <Burger open={open} setOpen={setOpen} />
        </BurgerWrapper>
      )}
      <NavMenu
        open={open}
        setOpen={setOpen}
        fillNavBackground={fillNavBackground}
        setFillNavBackground={setFillNavBackground}
      />
    </Header>
  )
}

export default Menu
