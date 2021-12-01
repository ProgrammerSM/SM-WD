/** @jsx jsx */
import { jsx } from '@emotion/react'

// Modules
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useContext } from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Data
import { mediumUp } from 'data/media-queries'

// PropTypes
const propTypes = {
  buttonText: PropTypes.string,
  clickHandler: PropTypes.func,
  customStyles: PropTypes.string,
  icon: PropTypes.objectOf(PropTypes.string),
  tabIndexNumber: PropTypes.number,
}

const MenuButton = ({
  buttonText,
  clickHandler,
  customStyles,
  icon,
  tabIndexNumber,
}) => {
  const { theme } = useContext(CurrentThemeContext)
  const MenuButtonStyles = styled.div`
    width: calc(2.5rem + 10px);
    height: calc(2.5rem + 10px);
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s linear;

    ${mediumUp} {
      width: calc(4rem + 10px);
      height: calc(4rem + 10px);
    }

    &:focus .animated-circle,
    &:hover .animated-circle {
      animation: rotating 5s linear infinite;
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
      background-image: radial-gradient(circle, ${theme.colors.primaryColor}80, transparent);
      color: ${theme.colors.fontColor};
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
    }

    @keyframes rotating {
      from { transform: rotate(0deg); }
      to { transform: rotate(365deg); }
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
      role='button'
      tabIndex={tabIndexNumber}
      onClick={clickHandler}
      onKeyDown={handleBtnKeyDown}
    >
      <div className='main-button'>
        {icon && (
          <FontAwesomeIcon icon={icon} />
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
