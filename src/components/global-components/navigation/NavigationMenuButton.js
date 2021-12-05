// Modules
import { css } from '@emotion/react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

// Context
import { ActiveMenuContext } from 'context/ActiveMenuContext'

// Component
import MenuButton from '../MenuButton'

// Scipts
import menuButtonClick from 'scripts/menuButtonClick'

// PropTypes
const propTypes = {
  alternateButtonName: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
}

const NavigationMenu = ({
  alternateButtonName,
  buttonName,
}) => {
  const {
    activeMenu,
    isMenuActive,
    setActiveMenu,
    setIsMenuActive,
  } = useContext(ActiveMenuContext)

  const navigationMenuButtonStyles = css`
    position: absolute;
    left: 10px;
    bottom: 60px;

    @media screen and (min-width: 430px) {
      bottom: 25px;
    }

    @media screen and (min-width: 470px) {
      left: 15px;
    }
  `

  return (
    <MenuButton
      buttonText={buttonName}
      clickHandler={
        () => menuButtonClick(activeMenu, buttonName, isMenuActive, setActiveMenu, setIsMenuActive)
      }
      customStyles={navigationMenuButtonStyles}
      icon={faBars}
      isActive={activeMenu === buttonName}
      isDisabled={activeMenu === alternateButtonName}
      tabIndexNumber={2}
    />
  )
}

NavigationMenu.propTypes = propTypes
export default NavigationMenu
