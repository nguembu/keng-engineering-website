import React, { useState } from 'react'
import { FiPhone, FiMapPin, FiMail, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous intégrerez le service d'envoi d'email (EmailJS, Netlify Forms, etc.)
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre message! Nous vous recontacterons rapidement.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Discutons de votre projet et trouvons la meilleure solution ensemble
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Nos Coordonnées</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Téléphone</h4>
                    <p className="text-gray-600">(237) 676 32 56 05</p>
                    <p className="text-gray-600">(237) 654 25 72 06</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Adresse</h4>
                    <p className="text-gray-600">Douala PK 12</p>
                    <p className="text-gray-600">Cameroun</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-dark">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Email</h4>
                    <p className="text-gray-600">keng_engineering@yahoo.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-light rounded-xl p-6">
                <h4 className="font-bold text-dark mb-4">Informations Légales</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Contribuable N°:</strong> P118312503923K
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>RCDLA/2016/1995</strong> - Régime de l'impôt synthétique
                </p>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Envoyer le message</span>
                  <FiSend size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact