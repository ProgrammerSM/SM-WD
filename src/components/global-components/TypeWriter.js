// Modules
import PropTypes from 'prop-types'
import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

// PropTypes
const propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  delayTime: PropTypes.number,
  speed: PropTypes.number,
}

const TypeWriter = ({
  as: ElementType,
  children: text,
  delayTime = 500,
  minHeight,
  speed = 10,
}) => {
  const index = useRef(0)
  const [currentText, setCurrentText] = useState('')
  const [isDelayed, setIsDelayed] = useState(true)

  useEffect(() => {
    const delay = setTimeout(() => {
      if (isDelayed) {
        setIsDelayed(false)
      }
    }, delayTime)
  
    return () => {
      clearTimeout(delay)
    }
  }, [])
  
  useEffect(() => {
    index.current = 0
    setCurrentText('')
  }, [text])
  
  useEffect(() => {
    let handTyping
    if (!isDelayed) {
      handTyping = setTimeout(() => {
        setCurrentText(value => value + text.charAt(index.current))
        index.current += 1
      }, speed)
    }

    return () => {
      clearTimeout(handTyping)
    }
  }, [currentText, isDelayed])

  return (
    <ElementType style={{ minHeight: minHeight && minHeight }} >
      {currentText}
    </ElementType>
  )
}

TypeWriter.propTypes = propTypes
export default TypeWriter
