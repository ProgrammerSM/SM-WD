/** @jsx jsx */
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { jsx } from '@emotion/react'

// Modules
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useContext } from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'
import { SettingsContext } from 'context/SettingsContext'

// Data
import { mediumUp } from 'data/media-queries'

// PropTypes
const propTypes = {
  buttonText: PropTypes.string,
  clickHandler: PropTypes.func,
  customStyles: PropTypes.string,
  icon: PropTypes.objectOf(PropTypes.string),
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tabIndexNumber: PropTypes.number,
}

const MenuButton = ({
  buttonText,
  clickHandler,
  customStyles,
  icon,
  isActive,
  isDisabled,
  tabIndexNumber,
}) => {
  const { isAnimationActive } = useContext(SettingsContext)
  const { theme } = useContext(CurrentThemeContext)
  let buttonColor = `${theme.colors.primaryColor}80`
  let buttonFontColor = theme.colors.fontColor
  let buttonIcon = icon

  if (isActive) {
    buttonColor = `${theme.colors.primaryColor}BF`
    buttonIcon = faTimes
  }

  if (isDisabled) {
    buttonColor = `${theme.colors.primaryColor}40`
    buttonFontColor = `${theme.colors.fontColor}80`
  }

  const MenuButtonStyles = styled.div`
    width: calc(2.5rem + 10px);
    height: calc(2.5rem + 10px);
    border-radius: 50%;
    cursor: pointer;
    ${isAnimationActive && 'transition: all .2s linear;'}

    ${mediumUp} {
      width: calc(4rem + 10px);
      height: calc(4rem + 10px);
    }

    &:focus:not([disabled]) .animated-circle,
    &:hover:not([disabled]) .animated-circle,
    &[data-active = true] .animated-circle {
      animation-duration: 10s;
    }

    &[disabled] .animated-circle {
      animation-play-state: paused;
    }

    .main-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      padding: ${theme.space.extraSmall};
      background-image: radial-gradient(circle, ${buttonColor}, transparent);
      color: ${buttonFontColor};
      ${isActive && `font-weight: bold;`}
      border-radius: 50%;
      border: 1px solid ${theme.colors.primaryColor};
      transition: all .2s linear;

      ${mediumUp} {
        width: 4rem;
        height: 4rem;
      }
    }

    .button-text {
      display: none;
      font-size: .75rem;

      ${mediumUp} { display: inline; }
    }

    .animated-circle-svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
    }

    .animated-circle {
      fill: transparent;
      stroke: ${theme.colors.accentColor1};
      stroke-width: 2px;
      stroke-dasharray: 50%, 25%;
      transform: rotate(15deg);
      transform-origin: center center;
      ${isAnimationActive && 'animation: rotating 200s linear infinite;'}
    }

    @keyframes rotating {
      from { transform: rotate(0deg); }
      to { transform: rotate(1800deg); }
    }
  `

  const handleBtnKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      clickHandler(event.target)
    }
  }

  return (
    <MenuButtonStyles
      css={customStyles}
      data-active={Boolean(isActive)}
      disabled={Boolean(isDisabled)}
      role='button'
      tabIndex={tabIndexNumber}
      onClick={clickHandler}
      onKeyDown={handleBtnKeyDown}
    >
      <div className='main-button'>
        {icon && (
          <FontAwesomeIcon icon={buttonIcon} />
        )}
        {buttonText && <span className='button-text'>{buttonText}</span>}
      </div>
      <svg className='animated-circle-svg'>
        <circle
          className='animated-circle'
          cx='50%'
          cy='50%'
          r='48%'
        />
      </svg>

    </MenuButtonStyles>
  )
}

MenuButton.propTypes = propTypes
export default MenuButton
