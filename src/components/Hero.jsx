import React from 'react'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Leader en <span className="text-yellow-400">Ingénierie</span> et Services Électriques
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Plus de 15 ans d'expertise dans les réseaux électriques HT/MT/BT, 
            l'électricité industrielle et l'éclairage public
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Demander un Devis</span>
              <FiArrowRight />
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              En Savoir Plus
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center space-x-2">
              <FiCheckCircle className="text-yellow-400" size={24} />
              <span className="text-lg">Expertise Technique Reconnue</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FiCheckCircle className="text-yellow-400" size={24} />
              <span className="text-lg">Équipes Qualifiées</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FiCheckCircle className="text-yellow-400" size={24} />
              <span className="text-lg">Respect des Délais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero