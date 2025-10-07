import React from 'react'
import { FiUser, FiAward, FiTarget } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
              À Propos de Keng Engineering
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
              Créée en 2016 par Monsieur KENGNE Guy Roger, ingénieur électricien
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={300}>
              <div className="text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FiUser className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Fondateur
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monsieur KENGNE Guy Roger, ingénieur électricien avec plus de 15 ans d'expérience
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FiAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Plus de 15 ans d'expérience dans le domaine des réseaux électriques
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FiTarget className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conception, réalisation et maintenance de solutions électriques innovantes
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={600}>
            <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-2xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl border border-blue-500 hover:border-blue-300">
              <h3 className="text-2xl font-bold mb-6 text-center">Notre Approche</h3>
              <p className="text-lg mb-6 text-center">
                Nous intégrons des paramètres de gestion scientifique des projets, y compris la gestion 
                de l'information sur l'ensemble du chantier. La sécurité du personnel et du public est 
                au cœur de nos actions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"></div>
                  <p className="group-hover:translate-x-1 transition-transform duration-300">Expertise technique reconnue</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"></div>
                  <p className="group-hover:translate-x-1 transition-transform duration-300">Équipes qualifiées et dédiées</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"></div>
                  <p className="group-hover:translate-x-1 transition-transform duration-300">Respect strict des délais et normes</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"></div>
                  <p className="group-hover:translate-x-1 transition-transform duration-300">Proximité avec nos clients</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About