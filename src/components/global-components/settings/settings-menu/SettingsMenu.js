/** @jsx jsx */
import {
  css,
  jsx,
} from '@emotion/react'

// Modules
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

// Components
import Button from 'components/global-components/Button'
// Import ColorThemeSelector from './setting-menu-components/ColorThemeSelector'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'
import { SettingsContext } from 'context/SettingsContext'

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
  } = useContext(CurrentThemeContext)

  const {
    handleSubmit,
    register,
    watch,
  } = useForm({
    defaultValues: {
      appAnimation: isAnimationActive,
      appSound: isSoundActive,
      customPrimaryColor: customTheme,
    },
  })

  const settingsSaveHandler = data => {
    const {
      appSound,
      appAnimation,
      customPrimaryColor,
    } = data

    if (appSound !== isSoundActive)
      setIsSoundActive(appSound)

    if (appAnimation !== isAnimationActive)
      setIsAnimationActive(appAnimation)

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
          border: 2px solid ${theme.colors.primaryColor};
          overflow: hidden;
        `
      }
    >
      <div className='settings-wrapper'>
        <form>
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
          <input
            id='custom-colors'
            type='hidden'
            {...register('customPrimaryColor')}
          />
          <Button
            onClickHandler={handleSubmit(settingsSaveHandler)}
          >Save Settings</Button>
        </form>
      </div>
    </div>
  )
}

SettingsMenu.propTypes = propTypes
export default SettingsMenu
