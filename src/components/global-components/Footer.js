// Modules
import styled from '@emotion/styled'
import React, { useContext } from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Data
import { mediumUp } from 'data/media-queries'

const Footer = () => {
  const copyrightDate = new Date().getFullYear() > 2021
    ? `2021 - ${new Date().getFullYear()}`
    : '2021'

  const { theme } = useContext(CurrentThemeContext)
  const FooterStyles = styled.footer`
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 265px 1fr;
    gap: 36px;
    width: 100%;
    color: ${theme.colors.fontColor};
    text-align: center;

    ${mediumUp} { grid-template-columns: 1fr 365px 1fr; }

    .footer-border {
      position: relative;
      border-bottom: 2px solid ${theme.colors.primaryColor};
      
      &:first-of-type::after,
      &:last-of-type::after {
        position: absolute;
        bottom: 0;
        width: 60%;
        height: 8px;
        border-top: 4px solid ${theme.colors.accentColor1};
        box-shadow: inset 0 5px 5px -5px ${theme.colors.accentColor1};
        content: '';
      }

      &:first-of-type::after { left: 0; }
      &:last-of-type::after { right: 0; }
    }

    .copyright-shape {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 54px;
      padding: ${theme.space.extraSmall} 0;
      border-top: 2px solid ${theme.colors.primaryColor};
      box-shadow: inset 0 5px 5px -5px ${theme.colors.primaryColor};

      &::before,
      &::after {
        position: absolute;
        top: -7px;
        height: 66px;
        content: '';
      }

      &::before {
        left: -19px;
        transform: rotate(35deg);
        border-left: 2px solid ${theme.colors.primaryColor};
      }
      
      &::after {
        right: -19px;
        transform: rotate(-35deg);
        border-right: 2px solid ${theme.colors.primaryColor};
      }
    }

    .copyright {
      margin: 0;
      font-size: .75rem;

      span {
        white-space: nowrap;
      }
    }
  `

  return (
    <FooterStyles>
      <div className='footer-border' />
      <div className='copyright-shape'>
        <p className='copyright'>
          <span>Copyright &copy; {copyrightDate} Sterling May.</span>
          {' '}
          <span>All rights reserved.</span>
        </p>
      </div>
      <div className='footer-border' />
    </FooterStyles>
  )
}

export default Footer
