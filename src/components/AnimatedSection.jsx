import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
        ${className}
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection