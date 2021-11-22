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
    display: grid;
    grid-template-columns: 1fr 100% 1fr;
    width: 100%;
    color: ${theme.colors.fontColor};
    text-shadow: 0 1px 3px ${theme.colors.fontColor};

    ${mediumUp} {
      grid-template-columns: 1fr 550px 1fr;
      gap: 48px;
    }

    .header-border {
      position: relative;
      border-top: 2px solid ${theme.colors.primaryColor};
      
      &:first-of-type::after,
      &:last-of-type::after {
        position: absolute;
        top: 0;
        width: 60%;
        height: 8px;
        border-bottom: 4px solid ${theme.colors.accentColor1};
        box-shadow: inset 0 -5px 5px -5px ${theme.colors.accentColor1};
        content: '';
      }

      &:first-of-type::after { left: 0; }
      &:last-of-type::after { right: 0; }
    }

    .logo-shape {
      position: relative;
      display: flex;
      justify-content: center;
      padding: ${theme.space.extraSmall} 0;
      border-bottom: 2px solid ${theme.colors.primaryColor};
      box-shadow: inset 0 -5px 5px -5px ${theme.colors.primaryColor};

      &::before,
      &::after {
        position: absolute;
        top: -10px;
        height: 87px;
        content: '';
      }

      &::before {
        left: -26px;
        transform: rotate(-35deg);
        border-left: 2px solid ${theme.colors.primaryColor};
      }
      
      &::after {
        right: -26px;
        transform: rotate(35deg);
        border-right: 2px solid ${theme.colors.primaryColor};
      }
    }

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
        &:first-of-type { text-align: right; }
        &:last-of-type { text-align: left; }
      }
    }
  `

  return (
    <HeaderStyles>
      <div className='header-border' />
      <div className='logo-shape'>
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
      </div>
      <div className='header-border' />
    </HeaderStyles>
  )
}

export default Header
