/** @jsx jsx */
import {
  css,
  jsx,
} from '@emotion/react'

// Modules
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import {
  HexColorInput,
  HexColorPicker,
} from 'react-colorful'
import React, {
  useContext,
  useRef,
  useState,
} from 'react'

// Components
import Button from 'components/global-components/Button'
// Import ColorThemeSelector from './setting-menu-components/ColorThemeSelector'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'
import { SettingsContext } from 'context/SettingsContext'

// Data
import themeColorGroups from 'data/themeColorGroups'
import {
  largeUp,
  mediumUp,
} from 'data/media-queries'

// PropTypes
const propTypes = {}
const SettingsMenu = () => {
  const {
    isAnimationActive,
    isSoundActive,
    setIsAnimationActive,
    setIsSoundActive,
  } = useContext(SettingsContext)

  const {
    customTheme,
    theme,
    themeName,
    setCustomTheme,
    setThemeName,
  } = useContext(CurrentThemeContext)

  const previousCustomColorThemeRef = useRef(customTheme)
  const [isCustomThemeSelected, setIsCustomThemeSelected] = useState(themeName === 'custom')
  const [settingsColorTheme, setSettingsColorTheme] = useState(theme.colors)
  const [selectedCustomColorObject, setSelectedCustomColorObject] = useState({
    color: customTheme.colors.primaryColor,
    colorName: 'primaryColor',
  })

  const {
    handleSubmit,
    register,
    setValue,
  } = useForm({
    defaultValues: {
      appAnimation: isAnimationActive,
      appSound: isSoundActive,
      colorTheme: themeName,
      customColorTheme: customTheme,
    },
  })

  const themeChangeHandler = event => {
    const selectedThemeName = event.target.value

    if (selectedThemeName === 'custom') {
      setSettingsColorTheme(customTheme.colors)
      setIsCustomThemeSelected(true)
      return
    }

    if (isCustomThemeSelected)
      setIsCustomThemeSelected(false)

    setSettingsColorTheme(themeColorGroups[selectedThemeName].colors)
  }

  const customColorSelectionHandler = (color, colorName) => {
    const uppercaseColor = color.toUpperCase()
    const updatedCustomThemeObject = {
      ...settingsColorTheme,
      [colorName]: uppercaseColor,
    }

    setSettingsColorTheme(updatedCustomThemeObject)
    setValue('customColorTheme', { colors: { ...settingsColorTheme }})
  }

  const resetCustomThemeHandler = () => {
    setSettingsColorTheme(previousCustomColorThemeRef.current.colors)
    setSelectedCustomColorObject({
      ...selectedCustomColorObject,
      color: previousCustomColorThemeRef.current.colors[selectedCustomColorObject.colorName],
    })
  }

  const settingsSaveHandler = data => {
    const {
      appSound,
      appAnimation,
      colorTheme,
      customColorTheme,
    } = data

    if (appSound !== isSoundActive)
      setIsSoundActive(appSound)

    if (appAnimation !== isAnimationActive)
      setIsAnimationActive(appAnimation)

    if (colorTheme !== themeName)
      setThemeName(colorTheme)

    if (customColorTheme !== customTheme)
      setCustomTheme(customColorTheme)
  }

  return (
    <div
      css={
        css`
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          padding: ${theme.space.extraSmall} 0;

          .settings-wrapper {
            height: 100%;
          }

          form {
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            gap: ${theme.space.jumbo};
            height: 100%;
          }

          fieldset {
            flex-grow: 1; 
            width: 100%;
            padding: 0 ${theme.space.extraSmall} ${theme.space.extraSmall};
            border: 2px solid ${theme.colors.primaryColor};
            box-shadow: inset 0 0 5px 1px ${theme.colors.primaryColor};

            ${mediumUp} {
              width: calc(50% - ${theme.space.jumbo});
            }

            &.accessibility {
              ${largeUp} {
                width: calc(10vw - ${theme.space.jumbo});
              }
            }

            &.color-selection {
              ${largeUp} {
                width: calc(50vw - ${theme.space.jumbo});
              }
            }
            
            legend {
              width: auto;
              margin: 0 auto;
              background-color: ${theme.colors.backgroundColor};
              font-family: ${theme.fontFamily.orbitron};
              text-shadow: 0 1px 3px ${theme.colors.fontColor};
              text-transform: uppercase;
            }
          }

          .color-selection-wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: ${theme.space.jumbo};
            height: 100%;
            padding: ${theme.space.jumbo};

            ${largeUp} {
              flex-direction: row;
            }
          }

          .color-selection-preview,
          .color-selection-fields {
            width: 100%;
            height: 50%;
            min-height: 100px;

            ${largeUp} {
              min-width: 50%;
              height: auto;
            }
          }

          .color-selection-preview {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${settingsColorTheme.backgroundColor};
            border: 2px solid ${theme.colors.accentColor1};
            box-shadow: inset 0 0 5px 1px ${theme.colors.accentColor1};
          }

          .color-selection-fields {

            .react-colorful {
              width: 100%;

              ${largeUp} {
                width: calc(100% - ${theme.space.jumbo});
              }
            }
          }

          .primary-color {
            position: relative;
            width: 50%;
            height: 50%;
            min-height: 80px;
            border: 5px solid ${settingsColorTheme.primaryColor};
          }

          .accent-color-1,
          .accent-color-2,
          .accent-color-3 {
            position: absolute;
            top: 50%;
            right: -15px;
            left: -15px;
            transform: translateY(-50%);
            height: 75%;
            border-right: 5px solid;
            border-left: 5px solid;
          }

          .accent-color-1 { border-color: ${settingsColorTheme.accentColor1}; }
          .accent-color-2 { border-color: ${settingsColorTheme.accentColor2}; }
          .accent-color-3 {
            display: flex;
            justify-content: center;
            align-items: center;
            border-color: ${settingsColorTheme.accentColor3};
          }
          
          .font-color {
            margin: 0;
            width: calc(100% - 75px);
            color: ${settingsColorTheme.fontColor};
            text-align: center;
            font-weight: bold;
            text-shadow: 0 1px 3px ${settingsColorTheme.fontColor};
          }

          .save-button-wrapper {
            width: 100%;
            height: 53px;
          }

          .save-button {
            margin: 0 auto;
          }
        `
      }
    >
      <div className='settings-wrapper'>
        <form>
          <fieldset className='accessibility'>
            <legend>accessibility</legend>
            <label htmlFor='app-sound'>Sound</label>
            <input
              id='app-sound'
              type='checkbox'
              {...register('appSound')}
            />
            <label htmlFor='app-sound'>Animation</label>
            <input
              id='app-animation'
              type='checkbox'
              {...register('appAnimation')}
            />
          </fieldset>
          <fieldset className='color-selection'>
            <legend>color selection</legend>

            <div className='color-selection-wrapper'>

              <div className='color-selection-preview'>
                <div className='primary-color'>
                  <div className='accent-color-1'>
                    <div className='accent-color-2'>
                      <div className='accent-color-3'>
                        <p className='font-color'>Font Color</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='color-selection-fields'>
                <input
                  id='custom-colors'
                  type='hidden'
                  {...register('customColorTheme')}
                />

                <select {...register('colorTheme', { onChange: themeChangeHandler })} >
                  {
                    Object.keys(themeColorGroups).map(key => {
                      const optionName = key.split(/(?=[A-Z])/).join(' ').toUpperCase()

                      return (
                        <option
                          key={`theme-option-${key}`}
                          value={key}
                        >
                          {optionName}
                        </option>
                      )
                    })
                  }

                  <option value='custom'>CUSTOM</option>
                </select>

                {isCustomThemeSelected && (
                  <>
                    <button
                      type='button'
                      onClick={resetCustomThemeHandler}
                    >Reset</button>
                    {
                    Object.keys(settingsColorTheme).map((key, index) => {
                      const colorName = key.split('Color').join(' ')
                      const formattedColorName = colorName.charAt(0).toUpperCase() + colorName.slice(1)

                      return (
                        <button
                          key={`custom-color-button-${index}`}
                          type='button'
                          onClick={() => setSelectedCustomColorObject({
                            color: settingsColorTheme[key],
                            colorName: key,
                          })}
                        >{formattedColorName}</button>
                      )
                    })
                  }

                    <HexColorPicker
                      color={settingsColorTheme[selectedCustomColorObject.colorName]}
                      onChange={color => customColorSelectionHandler(color, selectedCustomColorObject.colorName)}
                    />
                    <HexColorInput
                      color={settingsColorTheme[selectedCustomColorObject.colorName]}
                      onChange={color => customColorSelectionHandler(color, selectedCustomColorObject.colorName)}
                    />
                  </>
                )}
              </div>

            </div>
          </fieldset>
          <div className='save-button-wrapper'>
            <Button
              className='save-button'
              onClickHandler={handleSubmit(settingsSaveHandler)}
            >Save Settings</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

SettingsMenu.propTypes = propTypes
export default SettingsMenu