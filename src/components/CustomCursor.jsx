import React, { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.closest('button') || 
          e.target.closest('a') ||
          e.target.style.cursor === 'pointer') {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Cacher le curseur par défaut après un délai
    const timer = setTimeout(() => {
      document.body.style.cursor = 'none'
    }, 1000)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.body.style.cursor = 'default'
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Curseur principal */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      />
      
      {/* Effet de traînée */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out ${
          isPointer 
            ? 'w-12 h-12 bg-blue-400/30 mix-blend-difference' 
            : 'w-8 h-8 bg-blue-600/20'
        }`}
        style={{
          transform: `translate(${position.x - (isPointer ? 24 : 16)}px, ${position.y - (isPointer ? 24 : 16)}px)`,
        }}
      />
    </>
  )
}

export default CustomCursor