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
const propTypes = {
  children: PropTypes.node,
  isFail: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarn: PropTypes.bool,
  onClickHandler: PropTypes.func,
}

const Button = ({
  children,
  isFail,
  isSubmit,
  isSuccess,
  isWarn,
  onClickHandler,
}) => {
  const buttonRef = useRef()
  useEffect(() => {
    const button = buttonRef.current

    if (button) {
      const leftBracket = button.querySelector('.left-bracket')
      const rightBracket = button.querySelector('.right-bracket')
      const leftBar = button.querySelector('.left-bar')
      const rightBar = button.querySelector('.right-bar')

      setTimeout(() => {
        button.classList.add('animate')
      }, 200)

      setTimeout(() => {
        leftBracket.classList.add('animate')
        rightBracket.classList.add('animate')
      }, 800)

      setTimeout(() => {
        leftBar.classList.add('animate')
        rightBar.classList.add('animate')
      }, 1000)
    }
  })

  const { theme } = useContext(CurrentThemeContext)
  const SciFiButton = styled.button`
    position: relative;
    display: block;
    margin: 2px 10px;
    padding: ${theme.space.small} 3rem;
    background-color: ${theme.colors.primaryColor}26;
    color: ${theme.colors.fontColor};
    font-size: ${theme.space.medium};
    font-weight: bold;
    font-family: ${theme.fontFamily.orbitron};
    text-transform: uppercase;
    text-shadow: 0 1px 1px ${theme.colors.fontColor};
    letter-spacing: 3px;
    opacity: 0;
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
      width: 0;
      height: 0;
      border-top: 2px solid ${theme.colors.primaryColor};
      border-bottom: 2px solid ${theme.colors.primaryColor};
      transition: width .2s .2s linear, height .2s linear;

      &.animate {
        width: 15px;
        height: calc(100% + 4px);
      }
    }

    .left-bracket::after,
    .right-bracket::before {
      top: calc(50% + 2.5px);
      transform: translateY(-50%);
      width: 0;
      height: 5px;
      border-top: 2px solid ${theme.colors.primaryColor};
      box-shadow: inset 0 5px 5px -5px ${theme.colors.primaryColor};
      transition: width .2s .6s linear;
      content: '';
    }

    .left-bar,
    .right-bar {
      top: 50%;
      transform: translateY(-50%);
      width: 21px;
      height: 0;
      transition: height .2s .2s linear;

      &.animate {
        height: 60%;
      }
    }

    .left-bracket {
      left: -2px;
      box-shadow: inset 5px 0 5px -5px ${theme.colors.primaryColor};

      &::after { left: 0; }
      &.animate {
        border-left: 2px solid ${theme.colors.primaryColor};
        
        &::after { width: 30px; } 
      }
    }

    .right-bracket {
      right: -2px;
      box-shadow: inset -5px 0 5px -5px ${theme.colors.primaryColor};

      &::before { right: 0; }
      &.animate {
        border-right: 2px solid ${theme.colors.primaryColor};

        &::before { width: 30px; }
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
    <SciFiButton
      className={`
        ${isFail ? 'fail' : ''}
        ${isSuccess ? 'success' : ''}
        ${isWarn ? 'warn' : ''}
      `}
      ref={buttonRef}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClickHandler}
    >
      <span className='left-bar' />
      <span className='left-bracket' />
      {children}
      <span className='right-bracket' />
      <span className='right-bar' />
    </SciFiButton>
  )
}

Button.propTypes = propTypes
export default Button
