import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-600/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12 relative z-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3">Dr. Tawfik Sefrioui</h3>
              <p className="text-blue-300 font-medium text-lg">Spécialiste Lipœdème à Casablanca</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light">
              Expert en traitement du Lipœdème, offrant des solutions personnalisées et innovantes 
              avec les dernières techniques comme la liposuccion WAL. Votre bien-être est notre priorité.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/lipedem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-2xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-2xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-2xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Liens Rapides</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#accueil"
                  className="text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium hover:translate-x-2 inline-block"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#diagnostic"
                  className="text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium hover:translate-x-2 inline-block"
                >
                  Diagnostic
                </a>
              </li>
              <li>
                <a
                  href="#traitements"
                  className="text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium hover:translate-x-2 inline-block"
                >
                  Traitements
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium hover:translate-x-2 inline-block"
                >
                  Galerie Vidéo
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium hover:translate-x-2 inline-block"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium hover:translate-x-2 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">5 bd Abdellatif benkaddour racine</p>
                  <p className="text-gray-300 font-medium">Premier étage, Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                </div>
                <p className="text-gray-300 font-medium">05223-98689</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                </div>
                <p className="text-gray-300 font-medium">contact@drtawfiksefrioui.ma</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-bold mb-4 text-white">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                />
                <button className="bg-gradient-to-r from-blue-800 to-blue-900 px-6 py-3 rounded-r-2xl hover:from-blue-900 hover:to-indigo-900 transition-all duration-300 font-semibold">
                  S'abonner
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3 font-light">
                Recevez nos dernières actualités et conseils santé
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Heart className="w-5 h-5 text-red-400" />
              <p className="text-gray-300 font-medium">
                © 2025 Dr. Tawfik Sefrioui - Lipœdème | Tous droits réservés
              </p>
            </div>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition-all duration-300 font-medium"
              >
                Politique de Confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition-all duration-300 font-medium"
              >
                Mentions Légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition-all duration-300 font-medium"
              >
                Conditions d'Utilisation
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4 rounded-2xl shadow-2xl hover:from-blue-900 hover:to-indigo-900 transition-all duration-300 transform hover:scale-110 border border-blue-700/50"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;