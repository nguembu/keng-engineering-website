import React from 'react'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">KE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Keng Engineering</h3>
                <p className="text-gray-400">Ingénierie & Services Électriques</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leader en ingénierie et services électriques avec plus de 15 ans d'expérience 
              dans les réseaux électriques HT/MT/BT et l'électricité industrielle.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-blue-400" />
                <span className="text-gray-400">(237) 676 32 56 05</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-blue-400" />
                <span className="text-gray-400">Douala PK 12</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-blue-400" />
                <span className="text-gray-400">keng_engineering@yahoo.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Informations Légales</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Contribuable N°: P118312503923K</p>
              <p>RCDLA/2016/1995</p>
              <p>Régime de l'impôt synthétique</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Keng Engineering. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer