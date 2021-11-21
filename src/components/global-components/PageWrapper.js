// Modules
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import React, { useContext } from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// PropTypes
const propTypes = { children: PropTypes.node }
const PageWrapper = ({ children }) => {
  const { theme } = useContext(CurrentThemeContext)
  const PageWrapperStyles = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 68px ${theme.space.medium};
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.fontColor};
    text-shadow: 0 1px 3px ${theme.colors.fontColor};

    /* .page-border {
      height: 100%;
      padding: ${theme.space.large};
      border: 2px solid ${theme.colors.primaryColor};
    } */
  `

  return (
    <PageWrapperStyles>
      <div className='page-border'>
        {children}
      </div>
    </PageWrapperStyles>
  )
}

PageWrapper.propTypes = propTypes
export default PageWrapper
