// Modules
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import React, {
  useContext,
  useEffect,
  useRef,
} from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Components
import AnimatedContent from './AnimatedContent'

// PropTypes
const propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  isCenter: PropTypes.bool,
  isRight: PropTypes.bool,
}

const Heading = ({
  as: Element,
  children,
  isCenter,
  isRight,
}) => {
  const headingRef = useRef()
  useEffect(() => {
    const heading = headingRef.current

    if (heading) {
      const bottomBorder = heading.querySelector('.bottom-border')

      setTimeout(() => {
        heading.classList.add('animate')
      }, 200)

      setTimeout(() => {
        bottomBorder.classList.add('animate')
      }, 800)
    }
  })

  const { theme } = useContext(CurrentThemeContext)
  const HeadingStyles = styled.div`
    position: relative;
    margin-bottom: calc(1.38rem + 10px);
    text-align: left;
    opacity: 0;
    transition: opacity .5s linear;

    &.animate { opacity: 1; }
    &.center {
      text-align: center;
      
      .bottom-border {
        left: 50%;
        right: 50%;
        transition: all .4s linear;

        &::after {
          left: 50%;
          right: 50%;
          transition: all .6s .2s linear;
        }

        &.animate {
          left: 0;
          right: 0;
          
          &::after {
            left: 20%;
            right: 20%;
          }
        }
      }
    }

    &.right {
      text-align: right;
      
      .bottom-border {
        left: 100%;
        right: 0;
        transition: all .4s linear;
        
        &::after {
          right: 0;
          transition: all .6s .2s linear;
        }

        &.animate {
          left: 0;
        }
      }
    }

    .bottom-border {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      border-bottom: 2px solid ${theme.colors.primaryColor};
      box-shadow: inset 0 -5px 5px -5px ${theme.colors.primaryColor};
      transition: width .4s linear;

      &::after {
        position: absolute;
        bottom: -10px;
        width: 0;
        height: 10px;
        border-bottom: 4px solid ${theme.colors.accentColor1};
        box-shadow: inset 0 -5px 5px -5px ${theme.colors.accentColor1};
        transition: width .6s .2s linear;
        content: '';
      }

      &.animate {
        width: 100%;

        &::after { width: 60%; }
      }
    }

    h1, h2, h3, h4, h5 { margin-bottom: 0; }
  `

  return (
    <HeadingStyles
      className={`
        ${isCenter ? 'center' : ''}
        ${isRight ? 'right' : ''}
      `}
      ref={headingRef}
    >
      <AnimatedContent
        animate
        as={Element}
      >{children}</AnimatedContent>
      <div className='bottom-border' />
    </HeadingStyles>
  )
}

Heading.propTypes = propTypes
export default Heading
