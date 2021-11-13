// Modules
import { SketchPicker } from 'react-color'
import React, { useContext } from 'react'

// Components

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

  const themeChangeHandler = event => {
    setThemeName(event.target.value)

    if (event.target.value === 'custom' && !hasCustomTheme)
      setCustomTheme({ ...themeColorGroups[themeName] })
  }

  const customThemeHandler = colorName => color => {
    const updatedCustomThemeObject = {
      colors: {
        ...customTheme.colors,
        [colorName]: color.hex,
      },
    }

    setCustomTheme(updatedCustomThemeObject)
    setHasCustomTheme(true)
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
      {
        themeName === 'custom' && (
          <>
            <button
              type='button'
              onClick={() => { setCustomTheme(previousThemeRef.current) }}
            >
              Reset
            </button>
            {
              Object.keys(customTheme.colors).map(key => {
                const colorName = key.split('Color').join(' ')
                const formattedColorName = colorName.charAt(0).toUpperCase() + colorName.slice(1)

                return (
                  <div key={formattedColorName}>
                    <p>{formattedColorName}</p>
                    <SketchPicker
                      disableAlpha
                      color={customTheme.colors[key]}
                      presetColors={themeColorGroups.all}
                      onChangeComplete={customThemeHandler(key)}
                    />
                  </div>
                )
              })
            }
          </>
        )
      }
    </div>
  )
}

export default SettingsMenu
