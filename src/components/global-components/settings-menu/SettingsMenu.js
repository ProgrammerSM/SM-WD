// Modules
import { css } from '@emotion/react'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

// Component
import MenuButton from '../MenuButton'

const SettingsMenu = () => {

  const settingsMenuButtonStyles = css`
    position: absolute;
    right: 10px;
    bottom: 60px;

    @media screen and (min-width: 430px) {
      right: 10px;
      bottom: 25px;
    }

    @media screen and (min-width: 470px) {
      right: 25px;
    }
  `

  return (
    <MenuButton
      buttonText='settings'
      customStyles={settingsMenuButtonStyles}
      icon={faCogs}
      tabIndexNumber={3}
    />
  )
}

export default SettingsMenu
