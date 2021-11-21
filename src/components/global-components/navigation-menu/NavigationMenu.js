/** @jsx jsx */
import {
  css,
  jsx,
} from '@emotion/react'

// Modules
import { useContext } from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

const NavigationMenu = () => {
  const { theme } = useContext(CurrentThemeContext)

  return (
    <div
      css={css`
      position: absolute;
      bottom: 0;
      left: 0;
      color: ${theme.colors.fontColor};
    `}
    >NavigationMenu</div>
  )
}

export default NavigationMenu
