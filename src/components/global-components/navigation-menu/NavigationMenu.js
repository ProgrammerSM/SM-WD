// Modules
import { css } from '@emotion/react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

// Component
import MenuButton from '../MenuButton'

const NavigationMenu = () => {
  const navigationMenuButtonStyles = css`
    position: absolute;
    left: 10px;
    bottom: 60px;

    @media screen and (min-width: 430px) {
      left: 10px;
      bottom: 25px;
    }

    @media screen and (min-width: 470px) {
      left: 25px;
    }
  `

  return (
    <MenuButton
      buttonText='menu'
      customStyles={navigationMenuButtonStyles}
      icon={faBars}
      tabIndexNumber={2}
    />
  )
}

export default NavigationMenu
