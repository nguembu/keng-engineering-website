import React from 'react'

const TestTailwind = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h1 className="text-5xl font-bold mb-4 text-white">🎨 Tailwind Test</h1>
          <p className="text-2xl mb-6">Si vous voyez ce style, Tailwind fonctionne !</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-500 p-4 rounded-lg">Blue</div>
            <div className="bg-red-500 p-4 rounded-lg">Red</div>
            <div className="bg-yellow-500 p-4 rounded-lg">Yellow</div>
          </div>
          
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Bouton de test
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestTailwind