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
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.fontColor};
    overflow-y: auto;
  `

  return (
    <PageWrapperStyles>
      {children}
    </PageWrapperStyles>
  )
}

PageWrapper.propTypes = propTypes
export default PageWrapper
