// Modules
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import React, { useContext } from 'react'

// Components
import BackgroundSVG from './BackgroundSVG'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Data
import { mediumUp } from 'data/media-queries'

// PropTypes
const propTypes = { children: PropTypes.node }
const PageWrapper = ({ children }) => {
  const { theme } = useContext(CurrentThemeContext)
  const PageWrapperStyles = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 70px ${theme.space.medium} 54px;
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.fontColor};
    text-shadow: 0 1px 3px ${theme.colors.fontColor};

    .page-border-box {
      position: relative;
      height: 100%;
      padding: ${theme.space.medium} ${theme.space.small} 80px;

      @media screen and (min-width: 430px) { padding-bottom: 50px; }
      ${mediumUp} { padding: 65px; }

      .left-border,
      .right-border {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 60%;
        width: ${theme.space.medium};
      }

      .left-border {
        left: -${theme.space.medium};
        border-right: 2px solid ${theme.colors.primaryColor};
        box-shadow: inset -5px 0 5px -5px ${theme.colors.primaryColor};
      }

      .right-border {
        right: -${theme.space.medium};
        border-left: 2px solid ${theme.colors.primaryColor};
        box-shadow: inset 5px 0 5px -5px ${theme.colors.primaryColor};
      }

      .left-border::before,
      .right-border::before,
      .left-border::after,
      .right-border::after {
        position: absolute;
        width: 23px;
        height: ${theme.space.medium};
        border-top: 2px solid ${theme.colors.primaryColor};
        content: '';
      }

      .left-border::before,
      .right-border::before {
        top: -8px;
      }

      .left-border::after,
      .right-border::after {
        bottom: -8px;
      }

      .left-border::before,
      .left-border::after {
        left: -8px;
      }

      .right-border::before,
      .right-border::after {
        right: -8px;
      }

      .left-border::before { transform: rotate(35deg); }
      .left-border::after { transform: rotate(145deg); }
      .right-border::after { transform: rotate(-145deg); }
      .right-border::before { transform: rotate(-35deg); }      
    }

    .overflow {
      position: relative;
      height: 100%;
      padding: 0 ${theme.space.extraSmall};
      background-color: ${theme.colors.backgroundColor}80;
      overflow: hidden auto;
      z-index: 1;

      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background-color: ${theme.colors.accentColor1}26;
      }
      
      &::-webkit-scrollbar-thumb { background-color: ${theme.colors.accentColor1}; }
    }
  `

  return (
    <PageWrapperStyles>
      <div className='page-border-box'>
        <div className='left-border' />
        <div className='overflow'>
          {/* {children} */}
        </div>
        <BackgroundSVG />
        <div className='right-border' />
      </div>
    </PageWrapperStyles>
  )
}

PageWrapper.propTypes = propTypes
export default PageWrapper
