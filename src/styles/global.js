import { createGlobalStyle } from 'styled-components'
import theme from './theme'
const { responsive, colors, sizes } = theme

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    /* font-size: 100%; */
    /* stylelint-disable-next-line */
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* @media screen and (min-width: 35em) { */
  /*   html { */
  /*     margin-right: calc(-100vw + 100%); */
  /*     overflow-x: hidden; */
  /*   } */
  /* } */

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }
	html {
		font-size: 62.5%;
	}
  body {
		margin: 0;
    background: ${colors.white};
		line-height: 1;
		font-size: 1.6rem;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
		font-weight: 400;
		font-family: "Montserrat", sans-serif;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
	}
	// Typography
	h1 {
		font-size: 2.133rem
		text-transform: uppercase;
		letter-spacing: 0.1rem;
	}
	h1, h2, h3, h4 {
		font-family: "Josefin Sans", sans-serif;
		margin-bottom: 1rem;
	}
	h2, h3, h4 {
		font-weight: bold;
	}
	h2 {
		font-size: 2.843rem;
	}
	h3 {
		font-size: 2.133rem
	}
	h4 {
		font-size: 1.6rem;
	}
	p {
		font-size: 1.6rem;
		margin-bottom: 1rem;
    line-height: 1.2;
	}
	blockquote {
		margin-bottom: 1rem;
	}
	a {
		font-weight: bold;
		color: ${colors.highlight}
    transition: color 0.3s linear;
		&:hover {
			color: ${colors.white}
		}
	}
	ol, ul, li {
		margin-bottom: 1rem;
	}
	strong {
		font-weight: bold;
	}


`
export default GlobalStyle
