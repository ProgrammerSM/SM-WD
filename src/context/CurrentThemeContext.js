// Modules
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import React, {
  createContext,
  useRef,
} from 'react'

// Hooks
import useLocalStorage from 'hooks/useLocalStorage'

// Scripts
import commonThemeValues from 'data/commonThemeValues'
import themeColorGroups from 'data/themeColorGroups'

// Variables
const currentThemeDefaultValue = {}
const CurrentThemeContext = createContext(currentThemeDefaultValue)
// PropTypes
const propTypes = { children: PropTypes.node }
const CurrentThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useLocalStorage('smwdColorThemeName', 'light')
  const [customTheme, setCustomTheme] = useLocalStorage('smwdCustomTheme', { ...themeColorGroups.light })
  const [hasCustomTheme, setHasCustomTheme] = useLocalStorage('smwdHasCustomTheme', false)
  const previousThemeRef = useRef(themeColorGroups.light)

  let theme
  if (themeName === 'custom')
    theme = {
      ...commonThemeValues,
      ...customTheme,
    }
  else {
    previousThemeRef.current = themeColorGroups[themeName]

    theme = {
      ...commonThemeValues,
      ...themeColorGroups[themeName],
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CurrentThemeContext.Provider value={{
        customTheme,
        hasCustomTheme,
        previousThemeRef,
        setCustomTheme,
        setHasCustomTheme,
        setThemeName,
        themeName,
      }}
      >
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
