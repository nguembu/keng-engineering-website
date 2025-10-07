import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

const Missions = () => {
  const references = [
    "Alimentation 15 kV depuis la centrale thermique jusqu'au poste SONARA (Primelec)",
    "Renforcement armements ligne 90 kV Logbaba-Koumassi (SONATREL, 2021)",
    "Réhabilitation ligne 90 kV Mangombe-Logbaba (SONATREL)",
    "Réhabilitation de 08 pylônes ligne 225 kV Songloulou-Logbaba (SONATREL, 2025)",
    "Création départ 15 kV poste Source 90 kV Bonassama – poste MAYA (ITS, 2025)",
    "Implantation de 1200 supports béton à Douala (Camtel/SOCEMIC)"
  ]

  return (
    <section id="missions" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
              Références Prestigieuses
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
              Quelques-uns de nos projets récents avec des partenaires de confiance
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 md:p-12 text-white transition-all duration-300 hover:shadow-2xl border border-blue-500 hover:border-blue-300 group">
              <h3 className="text-2xl font-bold mb-8 text-center group-hover:scale-105 transition-transform duration-300">
                Projets Réalisés
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {references.map((reference, index) => (
                  <div key={index} className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <FiCheckCircle className="text-yellow-400 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                    <p className="text-lg group-hover/item:text-yellow-100 transition-colors duration-300">{reference}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="group/number hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-yellow-400 group-hover/number:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-sm group-hover/number:text-yellow-200 transition-colors duration-300">Ans d'expérience</div>
                </div>
                <div className="group/number hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-yellow-400 group-hover/number:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-sm group-hover/number:text-yellow-200 transition-colors duration-300">Projets réalisés</div>
                </div>
                <div className="group/number hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-yellow-400 group-hover/number:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm group-hover/number:text-yellow-200 transition-colors duration-300">Satisfaction client</div>
                </div>
                <div className="group/number hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-yellow-400 group-hover/number:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-sm group-hover/number:text-yellow-200 transition-colors duration-300">Support technique</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Missions