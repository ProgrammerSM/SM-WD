// Modules
import React, {
  useContext,
  useState,
} from 'react'

// Components
import CustomColorMenu from './sub-components/CustomColorMenu'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Data
import themeColorGroups from 'data/themeColorGroups'

const SettingsMenu = () => {
  const {
    customTheme,
    themeName,
    hasCustomTheme,
    previousThemeRef,
    setHasCustomTheme,
    setThemeName,
    setCustomTheme,
  } = useContext(CurrentThemeContext)

  const [selectedCustomColorObject, setSelectedCustomColorObject] = useState({
    color: customTheme.colors.primaryColor,
    colorName: 'primaryColor',
  })

  const themeChangeHandler = event => {
    setThemeName(event.target.value)

    if (event.target.value === 'custom' && !hasCustomTheme)
      setCustomTheme({ ...themeColorGroups[themeName] })
  }

  const customThemeHandler = (color, colorName) => {
    const updatedCustomThemeObject = {
      colors: {
        ...customTheme.colors,
        [colorName]: color,
      },
    }

    setCustomTheme(updatedCustomThemeObject)

    if (!hasCustomTheme)
      setHasCustomTheme(true)
  }

  const customColorInputHandler = event => {
    const enteredColor = event.target.value
    customThemeHandler(enteredColor, selectedCustomColorObject.colorName)

    setSelectedCustomColorObject({
      ...selectedCustomColorObject,
      color: enteredColor,
    })
  }

  const resetCustomThemeHandler = () => {
    const previousTheme = previousThemeRef.current

    setCustomTheme(previousTheme)
    setSelectedCustomColorObject({
      ...selectedCustomColorObject,
      color: previousTheme.colors[selectedCustomColorObject.colorName],
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
      {themeName === 'custom' && (
        <CustomColorMenu
          customColorInputHandler={customColorInputHandler}
          customTheme={customTheme}
          customThemeHandler={customThemeHandler}
          resetCustomThemeHandler={resetCustomThemeHandler}
          selectedCustomColorObject={selectedCustomColorObject}
          setSelectedCustomColorObject={setSelectedCustomColorObject}
        />
      )}
    </div>
  )
}

export default SettingsMenu
