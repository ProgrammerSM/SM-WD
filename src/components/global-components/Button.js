// Modules
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import React, {
  useContext,
  useEffect,
  useRef,
} from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// PropTypes
const propTypes = {}
const Button = ({ label }) => {
  const buttonRef = useRef()
  useEffect(() => {
    const button = buttonRef.current

    if (button) {

      setTimeout(() => {
      }, 200)

      setTimeout(() => {
      }, 800)

      setTimeout(() => {
      }, 1000)
    }
  })

  const { theme } = useContext(CurrentThemeContext)
  const SciFiButton = styled.button`
    position: relative;
    display: block;
    padding: ${theme.space.small} 3rem;
    background-color: ${theme.colors.primaryColor}26;
    color: ${theme.colors.fontColor};
    font-size: ${theme.space.medium};
    font-weight: bold;
    font-family: ${theme.fontFamily.orbitron};
    text-transform: uppercase;
    letter-spacing: 3px;
    /* opacity: 0; */
    box-shadow: 0;
    transition: opacity .5s linear, box-shadow .2s linear;

    &:active,
    &:focus,
    &:hover {
      box-shadow: 0 0 5px 2px ${theme.colors.primaryColor};
      background-color: ${theme.colors.primaryColor}33;
    }

    &.animate { opacity: 1; }
    .left-bar,
    .left-bracket,
    .left-bracket::after,
    .right-bar,
    .right-bracket,
    .right-bracket::before {
      position: absolute;
    }

    .left-bracket,
    .right-bracket {
      top: -2px;
      width: 15px;
      height: calc(100% + 4px);
      border-top: 2px solid ${theme.colors.primaryColor};
      border-bottom: 2px solid ${theme.colors.primaryColor};
    }

    .left-bracket::after,
    .right-bracket::before {
      top: calc(50% + 2.5px);
      transform: translateY(-50%);
      width: 30px;
      height: 5px;
      border-top: 2px solid ${theme.colors.primaryColor};
      box-shadow: inset 0 5px 5px -5px ${theme.colors.primaryColor};
      content: '';
    }

    .left-bar,
    .right-bar {
      top: 50%;
      transform: translateY(-50%);
      width: 21px;
      height: 60%;
    }

    .left-bracket {
      left: -2px;
      border-left: 2px solid ${theme.colors.primaryColor};
      box-shadow: inset 5px 0 5px -5px ${theme.colors.primaryColor};

      &::after {
        left: 0;
      }
    }

    .right-bracket {
      right: -2px;
      border-right: 2px solid ${theme.colors.primaryColor};
      box-shadow: inset -5px 0 5px -5px ${theme.colors.primaryColor};

      &::before {
        right: 0;
      }
    }

    .left-bar {
      left: -10px;
      border-left: 4px solid ${theme.colors.accentColor1};
      box-shadow: inset 5px 0 5px -5px ${theme.colors.primaryColor};
    }

    .right-bar {
      right: -10px;
      border-right: 4px solid ${theme.colors.accentColor1};
      box-shadow: inset -5px 0 5px -5px ${theme.colors.primaryColor};
    }
  `

  return (
    <SciFiButton ref={buttonRef}>
      <span className='left-bar' />
      <span className='left-bracket' />
      {label}
      <span className='right-bracket' />
      <span className='right-bar' />
    </SciFiButton>
  )
}

Button.propTypes = propTypes
export default Button
