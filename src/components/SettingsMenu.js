// Modules
import React, { useContext } from 'react'

// Components

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Data
import themeColorGroups from 'data/themeColorGroups'

const SettingsMenu = () => {
  const {
    themeName,
    hasCustomTheme,
    setThemeName,
    setCustomTheme,
  } = useContext(CurrentThemeContext)

  const themeChangeHandler = event => {
    setThemeName(event.target.value)

    if (event.target.value === 'custom')
      if (!hasCustomTheme)
        setCustomTheme({ ...themeColorGroups[themeName] })
      else
        setCustomTheme({
          colors: {
            backgroundColor: 'green',
            fontColor: 'red',
          },
        })
  }

  return (
    <div>
      <select
        name='theme-selector'
        value={themeName}
        onChange={themeChangeHandler}
      >
        {
          Object.keys(themeColorGroups).map(key => (
            <option
              key={`theme-option-${key}`}
              value={key}
            >
              {key.toUpperCase()}
            </option>
          ))
        }

        <option value='custom'>CUSTOM</option>
      </select>
    </div>
  )
}

export default SettingsMenu
