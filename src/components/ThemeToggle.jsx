import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full 
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isDark ? 'bg-blue-600' : 'bg-gray-300'}
      `}
      aria-label="Changer le thème"
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out
          ${isDark ? 'translate-x-6' : 'translate-x-1'}
        `}
      >
        <div className="flex items-center justify-center h-full">
          {isDark ? (
            <FiMoon className="h-3 w-3 text-blue-600" />
          ) : (
            <FiSun className="h-3 w-3 text-yellow-500" />
          )}
        </div>
      </span>
    </button>
  )
}

export default ThemeToggle