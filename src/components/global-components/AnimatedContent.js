// Modules
import PropTypes from 'prop-types'
import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

// PropTypes
const propTypes = {}
const AnimatedContent = ({
  animate,
  as: ElementType,
  children,
  show,
  sound,
}) => {
  let currentAnimationFrame = null
  const animateRef = useRef(animate)
  const childrenRef = useRef(children)
  const showRef = useRef(show)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentContent, setCurrentContent] = useState('')
  const cancelNextAnimation = () => {
    window.cancelAnimationFrame(currentAnimationFrame)
  }

  const stopAnimation = () => {
    cancelNextAnimation()
    setIsAnimating(false)

    if (animate)
      sound && sound.stop()

  }

  const startAnimation = isIn => {
    if (children.length === 0)
      return

    if (animate)
      sound && sound.play()

    const interval = 1000 / 60
    const printTime = interval * children.length
    const timeout = 500
    const duration = Math.min(printTime, timeout)

    cancelNextAnimation()
    setIsAnimating(true)
    setHasAnimated(true)
    setCurrentContent(isIn ? '' : children)

    const { length } = children
    let start = performance.now()
    let progress = null
    const nextAnimation = timestamp => {
      if (!start)
        start = timestamp

      progress = Math.max(timestamp - start, 0)
      if (!isIn)
        progress = duration - progress

      const newLength = Math.round((progress * length) / duration)
      const text = children.substring(0, newLength)

      setCurrentContent(text)

      const continueAnimation = isIn
        ? newLength <= length
        : newLength > 0

      if (continueAnimation)
        currentAnimationFrame = window.requestAnimationFrame(nextAnimation)
      else
        stopAnimation()
    }

    currentAnimationFrame = window.requestAnimationFrame(nextAnimation)
  }

  const animateIn = () => {
    cancelNextAnimation()
    startAnimation(true)
  }

  const animateOut = () => {
    cancelNextAnimation()
    startAnimation(false)
  }

  useEffect(() => {
    if (animate)
      animateIn()

    const animateChanged = animate !== animateRef.current
    const showChanged = show !== showRef.current
    const childrenChanged = children !== childrenRef.current

    // Animation changed
    if (animate)
      if (showChanged)
        show ? animateIn() : animateOut()

      else if (childrenChanged)
        animateIn()

    // Not animated anymore
    if (!animate && animateChanged)
      stopAnimation()

    return () => {
      stopAnimation()
    }
  }, [
    animate,
    children,
    show,
  ])

  if (isAnimating)
    return <ElementType>{currentContent}</ElementType>

  if (!isAnimating && hasAnimated)
    return <ElementType>{children}</ElementType>

  return ''

}

AnimatedContent.propTypes = propTypes
export default AnimatedContent
