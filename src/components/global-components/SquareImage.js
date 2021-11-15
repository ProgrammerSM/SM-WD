// Modules
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

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
  const ShapeStyles = styled.div`
    position: relative;
    display: inline-block;

    .top-shape,
    .bottom-shape {
      position: absolute;
      width: calc(100% + 2px);
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
      top: -2px;
      right: -2px;
      border-top: 2px solid dodgerblue;
      border-right: 2px solid dodgerblue;

      &::before {
        top: -8px;
        right: 30%;
        border-top: 5px solid dodgerblue;
      }

      &::after {
        top: -8px;
        right: -8px;
        border-top: 5px solid dodgerblue;
        border-right: 5px solid dodgerblue;
      }

      .drop-shape {
        position: absolute;
        top: 0;
        left: 25px;
        width: 30%;
        height: 20px;
        border-bottom: 2px solid dodgerblue;

        &::before,
        &::after {
          position: absolute;
          top: -3px;
          height: 25px;
          content: '';
        }

        &::before {
          left: -7px;
          border-left: 2px solid dodgerblue;
          transform: rotate(-35deg);
        }

        &::after {
          right: -7px;
          border-right: 2px solid dodgerblue;
          transform: rotate(35deg);
        }
      }
    }

    .bottom-shape {
      bottom: -2px;
      left: -2px;
      border-bottom: 2px solid dodgerblue;
      border-left: 2px solid dodgerblue;

      &::before {
        bottom: -8px;
        left: -8px;
        border-bottom: 5px solid dodgerblue;
        border-left: 5px solid dodgerblue;
      }

      &::after {
        bottom: -8px;
        left: 30%;
        border-bottom: 5px solid dodgerblue;
      }

      .pop-shape {
        position: absolute;
        right: 25px;
        bottom: 25px;
        width: 75%;
        height: 25px;
        border-bottom: 2px solid dodgerblue;

        &::before,
        &::after {
          position: absolute;
          bottom: -30px;
          height: 32px;
          content: '';
        }

        &::before {
          left: 50%;
          border-left: 2px solid dodgerblue;
          transform: rotate(35deg);
        }

        &::after {
          right: -10px;
          border-right: 2px solid dodgerblue;
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
