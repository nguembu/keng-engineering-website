import React from 'react'
import { FiExternalLink, FiZap, FiSun, FiGlobe } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Réseau HT 90 kV Logbaba-Koumassi",
      client: "SONATREL",
      year: "2021",
      description: "Renforcement des armements de la ligne haute tension 90 kV avec mise aux normes internationales.",
      category: "Réseaux HT/MT",
      image: "/api/placeholder/600/400",
      technologies: ["Lignes aériennes", "Pylônes métalliques", "Protections"],
      features: ["15 km de ligne", "25 pylônes", "Système de monitoring"]
    },
    {
      id: 2,
      title: "Alimentation 15 kV Centrale SONARA",
      client: "SONARA",
      year: "2020",
      description: "Alimentation électrique 15 kV depuis la centrale thermique jusqu'au poste de transformation principal.",
      category: "Électricité Industrielle",
      image: "/api/placeholder/600/400",
      technologies: ["Postes source", "Câbles HT", "Automates"],
      features: ["Poste 15 kV", "Protections différentielles", "SCADA"]
    },
    {
      id: 3,
      title: "Éclairage Public Urbain",
      client: "Ville de Douala",
      year: "2022",
      description: "Modernisation de l'éclairage public avec des technologies LED et systèmes de gestion intelligente.",
      category: "Éclairage Public",
      image: "/api/placeholder/600/400",
      technologies: ["LED Haute performance", "Gestion à distance", "Énergie solaire"],
      features: ["1200 points lumineux", "Gestion centralisée", "Économie d'énergie 60%"]
    },
    {
      id: 4,
      title: "Réseau Fibre Optique Camtel",
      client: "Camtel/SOCEMIC",
      year: "2023",
      description: "Implantation de 1200 supports béton pour le déploiement du réseau fibre optique en zone urbaine.",
      category: "Télécommunications",
      image: "/api/placeholder/600/400",
      technologies: ["Supports béton", "Câbles optiques", "Splicing"],
      features: ["1200 supports", "50 km de fibre", "Connexion FTTH"]
    },
    {
      id: 5,
      title: "Réhabilitation Ligne 225 kV",
      client: "SONATREL",
      year: "2025",
      description: "Réhabilitation de 08 pylônes sur la ligne très haute tension Songloulou-Logbaba.",
      category: "Réseaux THT",
      image: "/api/placeholder/600/400",
      technologies: ["Pylônes 225 kV", "Isolateurs", "Conducteurs"],
      features: ["8 pylônes réhabilités", "Renforcement structurel", "Mise en sécurité"]
    },
    {
      id: 6,
      title: "Bâtiment Technique ITS",
      client: "ITS",
      year: "2025",
      description: "Construction du poste source 90 kV Bonassama et création du départ 15 kV vers le poste MAYA.",
      category: "Bâtiments Techniques",
      image: "/api/placeholder/600/400",
      technologies: ["Génie civil", "Équipements HT", "Automatisme"],
      features: ["Poste source 90 kV", "Départ 15 kV", "Building management"]
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Réseaux HT/MT":
        return <FiZap className="text-blue-500" />
      case "Éclairage Public":
        return <FiSun className="text-yellow-500" />
      case "Télécommunications":
        return <FiGlobe className="text-green-500" />
      default:
        return <FiZap className="text-gray-500" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez nos projets les plus marquants réalisés pour des clients prestigieux
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                {/* Image du projet */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 text-white text-sm font-medium bg-blue-600 px-2 py-1 rounded">
                    {project.year}
                  </div>
                </div>

                {/* Contenu du projet */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <FiExternalLink className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.client}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies utilisées */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Caractéristiques */}
                  <div className="border-t dark:border-gray-600 pt-4">
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Statistiques */}
        <AnimatedSection delay={600}>
          <div className="mt-20 bg-white dark:bg-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Chiffres Clés
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projets Réalisés</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Ans d'Expérience</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Clients Satisfaits</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-600 dark:text-gray-300">Support Technique</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Projects