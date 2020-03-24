import React from 'react'
import styled from 'styled-components'

export const ButtonStyle = styled.button`
  cursor: pointer;
  background: ${props =>
    props.outline ? 'transparent' : props.theme.colors.highlight};

  border: ${props =>
    props.outline ? '1px solid ' + props.theme.colors.highlight : 'none'};
  border-radius: 5px;
  padding: 1rem 1.5rem;
  &:hover {
    background: ${props => props.theme.colors.highlight};
    /* border-color: transparent; */
    color: ${props => props.theme.colors.black};
  }
`

const Button = props => {
  return (
    <ButtonStyle outline={props.outline || null}>{props.children}</ButtonStyle>
  )
}

export default Button
