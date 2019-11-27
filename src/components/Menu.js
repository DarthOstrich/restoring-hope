import React, { useRef, useState, useEffect } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import theme from '../styles/theme'
import Hero from '../components/Hero'

const Header = styled.header`
	background: transparent;
  /* background: ${props => props.theme.colors.base}; */
  width: 100%;
  /* padding: 2rem; */
	/* position: fixed; */
  /* width: 100%; */
  /* max-width: ${props => props.theme.sizes.maxWidth}; */
  margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	position: relative;
`

const activeLinkStyle = {
  color: 'white',
}

const StyledBurger = styled.button`
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
    background: ${({ fillNavBackground, theme }) =>
      fillNavBackground ? theme.colors.black : theme.colors.white};
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

const Burger = ({ open, setOpen, fillNavBackground }) => {
  return (
    <StyledBurger
      open={open}
      fillNavBackground={fillNavBackground}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
const StyledMenu = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 90px;
  padding: 2rem;
  z-index: ${({ open }) => (open ? '100' : '0')};
  background: ${props => props.theme.colors.secondary};
  transform: ${({ open }) => (open ? 'translatex(0)' : 'translatex(-100%)')};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 426px) {
    text-align: left;
    z-index: 10;
    transform: translateX(0);
    margin-top: 0;
    background: ${({ fillNavBackground, theme }) =>
      fillNavBackground ? theme.colors.secondary : 'transparent'};
  }
`

const StyledMenuContent = styled.nav`
  max-width: ${props => props.theme.sizes.maxWidth};
	margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: flex-start;

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
    z-index: 10;
		justify-content: space-between;
		align-items: center;
		ul {
			text-align: right;
			margin-bottom: 0;
	}
		li {
			display: inline;
			margin-left: 1rem;
		}
	}
`

const NavMenu = ({ open, fillNavBackground }) => {
  // const isBrowser = typeof window !== 'undefined'
  // let isMobile = false
  // if (isBrowser) {
  //   isMobile = window.innerWidth < 426
  // }
  const pages = ['about', 'contact', 'resources', 'services', 'forms']

  return (
    <StaticQuery
      query={graphql`
        query headerQuery {
          contentfulCompanyInfo(
            contentful_id: { eq: "127ollEi7qxzPVkBWiM0oT" }
          ) {
            phone
          }
        }
      `}
      render={({ contentfulCompanyInfo }) => (
        <StyledMenu open={open} fillNavBackground={fillNavBackground}>
          <StyledMenuContent>
            <Link to="/" activeStyle={activeLinkStyle}>
              <Logo src="/logos/RH-vector-logo-color.png" />
            </Link>
            <ul>
              <li>
                <Link to="/services/" activeStyle={activeLinkStyle}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about/" activeStyle={activeLinkStyle}>
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/resources/" activeStyle={activeLinkStyle}>
                  Resources
                </Link>
              </li>
              {/* <li> */}
              {/*   <Link to="/contact/" activeStyle={activeLinkStyle}> */}
              {/*     Contact */}
              {/*   </Link> */}
              {/* </li> */}
              <li>
                <Link to="/forms/" activeStyle={activeLinkStyle}>
                  Forms
                </Link>
              </li>
              <li>
                <Link to="/blog/" activeStyle={activeLinkStyle}>
                  Blog
                </Link>
              </li>
              <li>
                <a href={'tel:' + contentfulCompanyInfo.phone}>
                  {contentfulCompanyInfo.phone}
                </a>
              </li>
            </ul>
          </StyledMenuContent>
        </StyledMenu>
      )}
    />
  )
}

const BurgerWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  width: 100%;
  z-index: 100;
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

const Menu = ({ children, heroImage }) => {
  let menuBreakPoint = 426
  // set initial state using React hooks
  const [open, setOpen] = useState(false)
  const [fillNavBackground, setFillNavBackground] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  // let isMobile

  // check to see if it is a browser
  const isBrowser = typeof window !== 'undefined'
  // const isMobile = useRef(true)
  if (isBrowser) {
    useWindowWidth()
    useWindowScroll()
    // isMobile.current = window.innerWidth < menuBreakPoint
  }

  function useWindowWidth() {
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
      // const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })
  }

  function useWindowScroll() {
    const [scrollPosition, setScrollPosition] = useState({
      x: window.scrollX,
      y: window.scrollY,
    })

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })
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
    if (position.y > 50) {
      setFillNavBackground(true)
    } else if (position.y <= 100) {
      setFillNavBackground(false)
    }
  }

  function handleResize() {
    // isMobile.current = window.innerWidth < menuBreakPoint
    setWindowWidth(window.innerWidth)
  }

  return (
    <Header>
      {windowWidth < menuBreakPoint && (
        <BurgerWrapper
          fillNavBackground={fillNavBackground}
          setFillNavBackground={setFillNavBackground}
        >
          <Link to="/" activeStyle={activeLinkStyle}>
            <Logo src="/logos/RH-vector-logo-color.png" />
          </Link>
          <Burger
            open={open}
            setOpen={setOpen}
            fillNavBackground={fillNavBackground}
          />
        </BurgerWrapper>
      )}
      <NavMenu
        open={open}
        setOpen={setOpen}
        fillNavBackground={fillNavBackground}
        setFillNavBackground={setFillNavBackground}
      />
      {children}
      {/* <Hero */}
      {/*   image={heroImage} */}
      {/*   height="50vh" */}
      {/*   quote="Empowering wholehearted living by cultivating and embracing hope." */}
      {/* ></Hero> */}
    </Header>
  )
}

export default Menu
