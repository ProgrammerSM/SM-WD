// Modules
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import React, {
  createContext,
  useState,
} from 'react'

// Scripts
import commonThemeValues from 'scripts/commonThemeValues'
import themeColorGroups from 'scripts/themeColorGroups'

// Variables
const themeDefault = 'light'
const CurrentThemeContext = createContext(themeDefault)
// PropTypes
const propTypes = { children: PropTypes.node }
const CurrentThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')
  const theme = {
    ...commonThemeValues,
    ...themeColorGroups[themeName],
  }

  return (
    <ThemeProvider theme={theme}>
      <CurrentThemeContext.Provider value={[themeName, setThemeName]}>
        {children}
      </CurrentThemeContext.Provider>
    </ThemeProvider>
  )
}

CurrentThemeProvider.propTypes = propTypes
export {
  CurrentThemeContext,
  CurrentThemeProvider,
}
