// Modules
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import React, { useContext } from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Components
import Logo from './Logo'

// Data
import { mediumUp } from 'data/media-queries'

const Header = () => {
  const { theme } = useContext(CurrentThemeContext)
  const HeaderStyles = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    padding: ${theme.space.extraSmall};
    color: ${theme.colors.fontColor};
    text-align: center;

    .logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${theme.space.medium};

      span {
        font-family: ${theme.fontFamily.orbitron};
        font-size: 2.6vw;
        text-transform: uppercase;
        letter-spacing: 3px;
      
        ${mediumUp} { font-size: 1rem; }
      }
    }
  `

  return (
    <HeaderStyles>
      <Link to='/'>
        <div className='logo-wrapper'>
          <span>Sterling May</span>
          <Logo
            height={50}
            width={41}
          />
          <span>Web Developer</span>
        </div>
      </Link>
    </HeaderStyles>
  )
}

export default Header
