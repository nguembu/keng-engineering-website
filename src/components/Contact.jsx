import React from 'react'
import { FiPhone, FiMapPin, FiMail, FiClock, FiUser } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Contactez-Nous
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et trouvons la meilleure solution ensemble
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <AnimatedSection delay={300}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Nos Coordonnées</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Téléphone</h4>
                      <p className="text-gray-600 dark:text-gray-300">(237) 676 32 56 05</p>
                      <p className="text-gray-600 dark:text-gray-300">(237) 654 25 72 06</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Adresse</h4>
                      <p className="text-gray-600 dark:text-gray-300">Douala PK 12</p>
                      <p className="text-gray-600 dark:text-gray-300">Cameroun</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-gray-800 group-hover:scale-110 transition-transform duration-300">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">keng_engineering@yahoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FiClock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Horaires</h4>
                      <p className="text-gray-600 dark:text-gray-300">Lundi - Vendredi: 8h00 - 18h00</p>
                      <p className="text-gray-600 dark:text-gray-300">Samedi: 8h00 - 13h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Informations légales et description */}
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-2xl border border-blue-500 hover:border-blue-300">
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <FiUser className="text-yellow-400" />
                    <span>Notre Engagement</span>
                  </h3>
                  <p className="text-lg mb-6">
                    Chez Keng Engineering, nous nous engageons à répondre à toutes vos demandes 
                    dans les plus brefs délais. Notre équipe est à votre écoute pour étudier 
                    votre projet et vous proposer la solution la plus adaptée.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>Réponse sous 24h</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>Devis personnalisé gratuit</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>Expertise technique garantie</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400">
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-4">Informations Légales</h4>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="font-medium">Contribuable N°:</span>
                      <span>P118312503923K</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="font-medium">RCDLA:</span>
                      <span>2016/1995</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Régime:</span>
                      <span>Impôt synthétique</span>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl text-white transition-all duration-300 hover:shadow-2xl">
                  <h4 className="text-xl font-bold mb-3">Besoin d'un devis urgent ?</h4>
                  <p className="mb-4">Appelez-nous directement</p>
                  <a 
                    href="tel:+237676325605"
                    className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    (237) 676 32 56 05
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact