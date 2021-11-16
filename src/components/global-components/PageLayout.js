import React from 'react'
import { useTheme } from '@emotion/react'

// Modules
import PropTypes from 'prop-types'

// Components
import SettingsMenu from 'components/settings-menu/SettingsMenu'

// PropTypes
const propTypes = { children: PropTypes.node }
const PageLayout = ({ children }) => {
  const theme = useTheme()

  return typeof window !== 'undefined' && (
    <div
      style={{
        backgroundColor: theme.colors.backgroundColor,
        color: theme.colors.fontColor,
        maxWidth: '100vw',
        minHeight: '100vh',
        transitionDuration: '.5s',
        transitionProperty: 'background-color, color',
      }}
    >
      <main>{children}</main>
      <SettingsMenu />
    </div>
  )
}

PageLayout.propTypes = propTypes
export default PageLayout
