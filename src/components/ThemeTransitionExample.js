/** @jsx jsx */
import {
  css,
  jsx,
  useTheme,
} from '@emotion/react'

// Modules
import { useContext } from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

const ThemeTransitionExample = () => {
  const theme = useTheme()
  const [themeName, setThemeName] = useContext(CurrentThemeContext)
  return (
    <div
      css={css`
        background-color: ${theme.colors.backgroundColor};
        color: ${theme.colors.fontColor};
        transition-duration: 1s;
        transition-property: background-color, color;
      `}
    >
      <h1>Testing Header</h1>
      <p>Testing Paragraph</p>

      <button onClick={() => setThemeName(themeName === 'light' ? 'dark' : 'light')}>switch</button>
    </div>
  )
}

export default ThemeTransitionExample
