/** @jsx jsx */
import {
  css,
  jsx,
  useTheme,
} from '@emotion/react'

// Modules
import PropTypes from 'prop-types'

// Components
import SettingsMenu from 'components/SettingsMenu'

// PropTypes
const propTypes = { children: PropTypes.node }
const PageLayout = ({ children }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        background-color: ${theme.colors.backgroundColor};
        color: ${theme.colors.fontColor};
        height: 100vh;
        transition-duration: .5s;
        transition-property: background-color, color;
        width: 100vw;
      `}
    >
      <main>{children}</main>
      <SettingsMenu />
    </div>
  )
}

PageLayout.propTypes = propTypes
export default PageLayout
