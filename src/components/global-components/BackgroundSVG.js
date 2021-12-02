// Modules
import styled from '@emotion/styled'
import React, { useContext } from 'react'

// Context
import { CurrentThemeContext } from 'context/CurrentThemeContext'

// Data
import { mediumUp } from 'data/media-queries'

const BackgroundSVG = () => {
  const { theme } = useContext(CurrentThemeContext)
  const BackgroundSVGStyles = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 80vw;
    z-index: 0;

    ${mediumUp} {
      max-width: 675px;
      max-height: 675px;
    }

    circle {
      transform-origin: center center;
    }

    .circle1,
    .circle2,
    .circle3,
    .circle4,
    .circle5,
    .circle6,
    .circle7,
    .circle8,
    .circle9,
    .circle10,
    .circle11,
    .circle12,
    .circle13 {
      fill: transparent;
    }

    .circle1,
    .circle3,
    .circle4,
    .circle5,
    .circle7,
    .circle9,
    .circle12 {
      stroke: ${theme.colors.primaryColor}40;
    }

    .circle2,
    .circle11,
    .circle13 {
      stroke: ${theme.colors.accentColor1};
    }

    .circle1,
    .circle4,
    .circle5,
    .circle7,
    .circle10,
    .circle12 {
      stroke-width: 2px;
    }

    .circle2,
    .circle6,
    .circle8,
    .circle11 {
      stroke-width: 4px;
    }

    .circle5,
    .circle6 {
      stroke-dasharray: 23%;
    }

    .circle2 {
      stroke-dasharray: 10%, 1%;
      transform: rotate(2deg);
    }

    .circle3 {
      stroke-width: 1.5%;
      stroke-dasharray: 1%;

      ${mediumUp} { stroke-dasharray: .3%; }
    }

    .circle5 {
      transform: rotate(-51deg);
    }

    .circle6 {
      stroke: ${theme.colors.primaryColor};
    }

    .circle8 {
      stroke: ${theme.colors.accentColor2};
      stroke-dasharray: 21%;
    }
    
    .circle9 {
      stroke-width: 5%;
      stroke-dasharray: .8%;

      ${mediumUp} { stroke-dasharray: .48%; }
    }

    .circle10 {
      stroke: ${theme.colors.accentColor1}40;
    }

    .circle11 {
      stroke-dasharray: 8% 82%;
    }

    .circle12 {
      stroke-dasharray: 35% 75%;
      transform: rotate(61deg);
    }
    
    .circle13 {
      stroke-width: 2%;
      stroke-dasharray: 15% 96%;
      transform: rotate(-13deg);
    }
  `

  return (
    <BackgroundSVGStyles>
      <defs>
        <radialGradient id='highlightGradient'>
          <stop
            offset='0%'
            stopColor={`${theme.colors.primaryColor}33`}
          />
          <stop
            offset='100%'
            stopColor='transparent'
          />
        </radialGradient>
      </defs>

      <circle
        cx='50%'
        cy='50%'
        fill='url(#highlightGradient)'
        r='48%'
      />

      <circle
        className='circle1'
        cx='50%'
        cy='50%'
        r='5%'
      />

      <circle
        className='circle2'
        cx='50%'
        cy='50%'
        r='7%'
      />

      <circle
        className='circle3'
        cx='50%'
        cy='50%'
        r='9%'
      />

      <circle
        className='circle4'
        cx='50%'
        cy='50%'
        r='11%'
      />

      <circle
        className='circle5'
        cx='50%'
        cy='50%'
        r='14%'
      />

      <circle
        className='circle6'
        cx='50%'
        cy='50%'
        r='14%'
      />

      <circle
        className='circle7'
        cx='50%'
        cy='50%'
        r='20%'
      />

      <circle
        className='circle8'
        cx='50%'
        cy='50%'
        r='20%'
      />

      <circle
        className='circle9'
        cx='50%'
        cy='50%'
        r='24%'
      />

      <circle
        className='circle10'
        cx='50%'
        cy='50%'
        r='28%'
      />

      <circle
        className='circle11'
        cx='50%'
        cy='50%'
        r='28%'
      />

      <circle
        className='circle12'
        cx='50%'
        cy='50%'
        r='35%'
      />

      <circle
        className='circle13'
        cx='50%'
        cy='50%'
        r='35%'
      />
    </BackgroundSVGStyles>
  )
}

export default BackgroundSVG
