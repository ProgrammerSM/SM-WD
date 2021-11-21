// Modules
import { HexColorPicker } from 'react-colorful'
import PropTypes from 'prop-types'
import React from 'react'

// Components

// PropTypes
const propTypes = {
  customColorInputHandler: PropTypes.func.isRequired,
  customTheme: PropTypes.shape({ colors: PropTypes.objectOf(PropTypes.string).isRequired }).isRequired,
  customThemeHandler: PropTypes.func.isRequired,
  resetCustomThemeHandler: PropTypes.func.isRequired,
  selectedCustomColorObject: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedCustomColorObject: PropTypes.func.isRequired,
}

const CustomColorTheme = ({
  customColorInputHandler,
  customTheme,
  customThemeHandler,
  resetCustomThemeHandler,
  selectedCustomColorObject,
  setSelectedCustomColorObject,
}) => (
  <>
    <button
      type='button'
      onClick={resetCustomThemeHandler}
    >Reset</button>
    {
      Object.keys(customTheme.colors).map((key, index) => {
        const colorName = key.split('Color').join(' ')
        const formattedColorName = colorName.charAt(0).toUpperCase() + colorName.slice(1)

        return (
          <button
            key={`custom-color-button-${index}`}
            type='button'
            onClick={() => setSelectedCustomColorObject({
              color: customTheme.colors[key],
              colorName: key,
            })}
          >{formattedColorName}</button>
        )
      })
    }
    <HexColorPicker
      color={selectedCustomColorObject.color}
      onChange={color => customThemeHandler(color, selectedCustomColorObject.colorName)}
    />
    <input
      id='custom-theme-input'
      maxLength={7}
      type='text'
      onChange={customColorInputHandler}
    />
  </>
)

CustomColorTheme.propTypes = propTypes
export default CustomColorTheme
