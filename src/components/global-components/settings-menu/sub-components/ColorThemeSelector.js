// Modules
import React, {
  useContext,
  useRef,
  useState,
} from 'react'

// Components
import CustomColorMenu from './sub-components/CustomColorMenu'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Data
import themeColorGroups from 'data/themeColorGroups'

const ColorThemeSelector = () => {
  const {
    customTheme,
    themeName,
    hasCustomTheme,
    previousThemeRef,
    setHasCustomTheme,
    setThemeName,
    setCustomTheme,
  } = useContext(CurrentThemeContext)

  const previouslyEnteredValueRef = useRef('#')
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
    const uppercaseColor = color.toUpperCase()
    const updatedCustomThemeObject = {
      colors: {
        ...customTheme.colors,
        [colorName]: uppercaseColor,
      },
    }

    setCustomTheme(updatedCustomThemeObject)
    setSelectedCustomColorObject({
      ...selectedCustomColorObject,
      uppercaseColor,
    })

    if (!hasCustomTheme)
      setHasCustomTheme(true)

    document.getElementById('custom-theme-input').value = uppercaseColor
  }

  const customColorInputHandler = event => {
    const hexRegEx = /^#[0-9a-f]{0,6}$/i
    let enteredColor = event.target.value

    if (!enteredColor.includes('#'))
      enteredColor = `#${enteredColor}`

    if (hexRegEx.test(enteredColor))
      previouslyEnteredValueRef.current = enteredColor
    else
      enteredColor = previouslyEnteredValueRef.current

    customThemeHandler(enteredColor, selectedCustomColorObject.colorName)
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

export default ColorThemeSelector
