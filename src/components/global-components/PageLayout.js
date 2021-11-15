/** @jsx jsx */
import {
  css,
  jsx,
  useTheme,
} from '@emotion/react'

// Modules
import PropTypes from 'prop-types'

// Components
import SettingsMenu from 'components/settings-menu/SettingsMenu'

// PropTypes
const propTypes = { children: PropTypes.node }
const PageLayout = ({ children }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        max-width: 100vw;
        min-height: 100vh;
        background-color: ${theme.colors.backgroundColor};
        color: ${theme.colors.fontColor};
        transition-duration: .5s;
        transition-property: background-color, color;
      `}
    >
      <main>{children}</main>
      <SettingsMenu />
    </div>
  )
}

PageLayout.propTypes = propTypes
export default PageLayout
