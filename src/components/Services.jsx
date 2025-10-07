import React from 'react'
import { FiZap, FiHome, FiSun, FiGrid, FiGlobe } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

const Services = () => {
  const services = [
    {
      icon: <FiZap className="text-3xl" />,
      title: "Réseaux électriques HT/MT/BT",
      description: "Conception, réalisation et maintenance de réseaux haute, moyenne et basse tension"
    },
    {
      icon: <FiHome className="text-3xl" />,
      title: "Électricité industrielle et bâtiment",
      description: "Solutions électriques complètes pour industries et bâtiments"
    },
    {
      icon: <FiSun className="text-3xl" />,
      title: "Éclairage public",
      description: "Routes, parkings, jardins - solutions d'éclairage efficaces et durables"
    },
    {
      icon: <FiHome className="text-3xl" />,
      title: "Construction de bâtiments techniques",
      description: "Réalisation d'infrastructures techniques spécialisées"
    },
    {
      icon: <FiGrid className="text-3xl" />,
      title: "Construction de galeries",
      description: "Conception et construction de galeries techniques"
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Installation de réseaux à fibre optique",
      description: "Déploiement d'infrastructures de communication modernes"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Nos Domaines d'Expertise
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Des solutions complètes en ingénierie électrique et construction technique
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              {/* ⬇️ C'EST ICI QUE VOUS METTEZ VOTRE CODE ⬇️ */}
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
              {/* ⬆️ FIN DE VOTRE CODE ⬆️ */}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services