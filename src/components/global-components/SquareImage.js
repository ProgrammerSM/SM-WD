// Modules
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import React, { useContext } from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Components

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
  const { theme } = useContext(CurrentThemeContext)
  const ShapeStyles = styled.div`
    position: relative;
    display: inline-block;
    margin: 8px;
    background-color: ${theme.colors.primaryColor}40;

    .top-shape,
    .bottom-shape {
      position: absolute;
      width: 100%;
      height: 100%;
      max-height: 40%;

      &::before,
      &::after {
        position: absolute;
        content: '';
      }
    }

    .top-shape::after,
    .bottom-shape::before {
      width: 100%;
      max-width: 25%;
      height: 100%;
      max-height: 50%;
    }
    
    .top-shape::before,
    .bottom-shape::after {
      width: 100%;
      max-width: 50%;
    } 

    .top-shape {
      top: 0;
      right: 0;
      border-top: 2px solid ${theme.colors.primaryColor};
      border-right: 2px solid ${theme.colors.primaryColor};

      &::before {
        top: -10px;
        right: 30%;
        border-top: 5px solid ${theme.colors.accentColor2};
      }

      &::after {
        top: -10px;
        right: -10px;
        border-top: 5px solid ${theme.colors.accentColor1};
        border-right: 5px solid ${theme.colors.accentColor1};
      }

      .drop-shape {
        position: absolute;
        top: 0;
        left: 25px;
        width: 30%;
        height: 20px;
        border-bottom: 2px solid ${theme.colors.primaryColor};

        &::before,
        &::after {
          position: absolute;
          top: -3px;
          height: 25px;
          content: '';
        }

        &::before {
          left: -7px;
          border-left: 2px solid ${theme.colors.primaryColor};
          transform: rotate(-35deg);
        }

        &::after {
          right: -7px;
          border-right: 2px solid ${theme.colors.primaryColor};
          transform: rotate(35deg);
        }
      }
    }

    .bottom-shape {
      bottom: 0;
      left: 0;
      border-bottom: 2px solid ${theme.colors.primaryColor};
      border-left: 2px solid ${theme.colors.primaryColor};

      &::before {
        bottom: -10px;
        left: -10px;
        border-bottom: 5px solid ${theme.colors.accentColor1};
        border-left: 5px solid ${theme.colors.accentColor1};
      }

      &::after {
        bottom: -10px;
        left: 30%;
        border-bottom: 5px solid ${theme.colors.accentColor2};
      }

      .pop-shape {
        position: absolute;
        right: 25px;
        bottom: 0;
        width: 75%;
        height: 25px;
        border-top: 2px solid ${theme.colors.primaryColor};

        &::before,
        &::after {
          position: absolute;
          bottom: -5px;
          height: 32px;
          content: '';
        }

        &::before {
          left: 50%;
          border-left: 2px solid ${theme.colors.primaryColor};
          transform: rotate(35deg);
        }

        &::after {
          right: -10px;
          border-right: 2px solid ${theme.colors.primaryColor};
          transform: rotate(-35deg);
        }
      }
    }
  `

  return (
    <ShapeStyles>
      <div className='top-shape'>
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
      </div>
    </ShapeStyles>
  )
}

SquareImage.propTypes = propTypes
export default SquareImage
