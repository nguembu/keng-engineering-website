import React from 'react'
import { FiStar } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

const Testimonials = () => {
  const testimonials = [
    {
      company: "SONATREL",
      project: "Renforcement ligne 90 kV",
      text: "Professionalisme et expertise remarquable dans l'exécution des travaux de renforcement de nos lignes haute tension.",
      rating: 5
    },
    {
      company: "SONARA",
      project: "Alimentation 15 kV",
      text: "Keng Engineering a su respecter les délais et normes de sécurité les plus strictes sur notre projet critique.",
      rating: 5
    },
    {
      company: "Camtel/SOCEMIC",
      project: "Implantation supports béton",
      text: "Un partenaire fiable pour des projets d'envergure nécessitant précision et rigueur technique.",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar 
        key={i} 
        className={`transition-transform duration-300 hover:scale-110 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`} 
        size={20}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Témoignages Clients
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Ce que disent nos partenaires et clients de notre collaboration
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 group">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  "{testimonial.text}"
                </p>
                <div className="border-t dark:border-gray-600 pt-4 group-hover:border-blue-200 dark:group-hover:border-blue-400 transition-colors">
                  <div className="font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials