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
import { SettingsContext } from 'context/SettingsContext'

// PropTypes
const propTypes = {
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}

const SquareImage = ({
  height,
  image,
  imageAlt,
  width,
}) => {
  const imageContainerRef = useRef()
  const { isAnimationActive } = useContext(SettingsContext)
  useEffect(() => {
    const imageContainter = imageContainerRef.current

    if (imageContainter) {
      const topShape = imageContainter.querySelector('.top-shape')
      const bottomShape = imageContainter.querySelector('.bottom-shape')
      const topCorner = imageContainter.querySelector('.top-corner')
      const bottomCorner = imageContainter.querySelector('.bottom-corner')
      const topLine = imageContainter.querySelector('.top-line')
      const bottomLine = imageContainter.querySelector('.bottom-line')
      const dropShape = imageContainter.querySelector('.drop-shape')
      const popShape = imageContainter.querySelector('.pop-shape')

      if (isAnimationActive) {
        setTimeout(() => {
          imageContainter.classList.add('animate')
        }, 200)

        setTimeout(() => {
          topShape.classList.add('animate')
          bottomShape.classList.add('animate')
        }, 800)

        setTimeout(() => {
          dropShape.classList.add('animate')
          popShape.classList.add('animate')
          topCorner.classList.add('animate')
          bottomCorner.classList.add('animate')
          topLine.classList.add('animate')
          bottomLine.classList.add('animate')
        }, 1000)
      } else {
        imageContainter.classList.add('animate')
        topShape.classList.add('animate')
        bottomShape.classList.add('animate')
        dropShape.classList.add('animate')
        popShape.classList.add('animate')
        topCorner.classList.add('animate')
        bottomCorner.classList.add('animate')
        topLine.classList.add('animate')
        bottomLine.classList.add('animate')
      }
    }
  })

  const { theme } = useContext(CurrentThemeContext)
  const ShapeStyles = styled.div`
    position: relative;
    display: inline-block;
    margin: calc(1.38rem + 8px) 8px;
    background-color: ${theme.colors.primaryColor}26;
    opacity: 0;
    ${isAnimationActive && 'transition: opacity .5s linear;'}

    &.animate { opacity: 1; }
    .top-shape,
    .top-line,
    .top-corner,
    .bottom-shape,
    .bottom-line,
    .bottom-corner {
      position: absolute;
    }

    .top-shape,
    .bottom-shape {
      width: 0;
      height: 0;
      ${isAnimationActive && 'transition: width .2s linear, height .2s .2s linear;'}

      &.animate {
        width: 100%;
        height: 60%;
      }
    }

    .top-line,
    .bottom-line {
      width: 0;
      height: 40%;
      ${isAnimationActive && 'transition: width .2s linear .3s;'}

      &.animate {
        width: 50%;
      }
    } 

    .top-corner,
    .bottom-corner {
      width: 0;
      height: 0;
      ${isAnimationActive && 'transition: width .2s linear, height .2s linear .1s;'}

      &.animate {
        width: 25%;
        height: 75%;
      }
    }

    .top-shape.animate,
    .top-corner.animate {
      box-shadow: inset 5px 5px 5px -5px ${theme.colors.primaryColor};
    }

    .bottom-shape.animate,
    .bottom-corner.animate {
      box-shadow: inset -5px -5px 5px -5px ${theme.colors.primaryColor};
    }

    .drop-shape,
    .pop-shape {
      ${isAnimationActive && 'transition: width .2s linear;'}

      &::before {
        ${isAnimationActive && 'transition: height .2s linear;'}
      }
      
      &::after {
        ${isAnimationActive && 'transition: height .2s linear .2s;'}
      }
    }

    .top-shape {
      top: 0;
      right: 0;
      
      &.animate {
        border-top: 2px solid ${theme.colors.primaryColor};
        border-left: 2px solid ${theme.colors.primaryColor};
      }

      .top-line {
        top: -10px;
        left: 30%;
        border-top: 4px solid ${theme.colors.accentColor2};

        &.animate { box-shadow: inset 0 5px 5px -5px ${theme.colors.accentColor2}; }
      }

      .top-corner {
        top: -10px;
        left: -10px;
        
        &.animate {
          border-top: 4px solid ${theme.colors.accentColor1};
          border-left: 4px solid ${theme.colors.accentColor1};
        }
      }

      .drop-shape {
        position: absolute;
        top: 0;
        right: 25px;
        width: 0;
        height: 20px;
        
        &::before,
        &::after {
          position: absolute;
          top: -3px;
          height: 0;
          content: '';
        }
        
        &::before {
          left: -7px;
          transform: rotate(-35deg);
        }
        
        &::after {
          right: -7px;
          transform: rotate(35deg);
        }
        
        &.animate {
          width: 30%;
          border-bottom: 2px solid ${theme.colors.primaryColor};
          box-shadow: inset 0 -5px 5px -5px ${theme.colors.primaryColor};

          &::before,
          &::after {
            height: 25px;
          }

          &::before { border-left: 2px solid ${theme.colors.primaryColor}; }
          &::after { border-right: 2px solid ${theme.colors.primaryColor}; }
        }
      }
    }

    .bottom-shape {
      bottom: 0;
      right: 0;
      
      &.animate {
        border-bottom: 2px solid ${theme.colors.primaryColor};
        border-right: 2px solid ${theme.colors.primaryColor};
      }

      .bottom-line {
        bottom: -10px;
        right: 30%;
        border-bottom: 4px solid ${theme.colors.accentColor2};

        &.animate { box-shadow: inset 0 -5px 5px -5px ${theme.colors.accentColor2}; }
      }
      
      .bottom-corner {
        bottom: -10px;
        right: -10px;

        &.animate {
          border-bottom: 4px solid ${theme.colors.accentColor1};
          border-right: 4px solid ${theme.colors.accentColor1};
        }
      }

      .pop-shape {
        position: absolute;
        left: 25px;
        bottom: 1px;
        width: 0;
        height: 25px;
        
        &::before,
        &::after {
          position: absolute;
          bottom: -5px;
          height: 0;
          content: '';
        }
        
        &::before {
          left: -10px;
          border-right: 2px solid ${theme.colors.primaryColor};
          transform: rotate(35deg);
        }
        
        &::after {
          right: 50%;
          border-left: 2px solid ${theme.colors.primaryColor};
          transform: rotate(-35deg);
        }
        
        &.animate {
          width: 75%;
          border-top: 2px solid ${theme.colors.primaryColor};
          box-shadow: inset 0 5px 5px -5px ${theme.colors.primaryColor};

          &::before,
          &::after {
            height: 32px;
          }

          &::before { border-right: 2px solid ${theme.colors.primaryColor}; }
          &::after { border-left: 2px solid ${theme.colors.primaryColor}; }
        }
      }
    }
  `

  return (
    <ShapeStyles ref={imageContainerRef}>
      <div className='top-shape'>
        <div className='top-line' />
        <div className='top-corner' />
        <div className='drop-shape' />
      </div>
      <img
        alt={imageAlt}
        height={height}
        src={image}
        width={width}
      />
      <div className='bottom-shape'>
        <div className='pop-shape' />
        <div className='bottom-line' />
        <div className='bottom-corner' />
      </div>
    </ShapeStyles>
  )
}

SquareImage.propTypes = propTypes
export default SquareImage
