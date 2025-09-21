import React from 'react';
import { MapPin, Shield, Star, Users, CheckCircle, Award, Heart, Clock } from 'lucide-react';

const Center: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Notre Centre Médical
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Un environnement moderne et sécurisé pour votre traitement du lipœdème
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Section */}
      <section id="clinic" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                La Clinique
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Notre clinique, située au cœur de Casablanca, offre un cadre moderne et 
                  professionnel pour le diagnostic et le traitement du lipœdème. Équipée des 
                  dernières technologies médicales.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-800" />
                    <h3 className="font-bold text-blue-900">Adresse</h3>
                  </div>
                  <p className="text-gray-700 font-medium">
                    5 bd Abdellatif benkaddour racine<br />
                    Premier étage, Casablanca, Maroc
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Équipements de pointe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Bloc opératoire moderne</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Salles de consultation privées</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Espace de récupération</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clinique moderne"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comfort & Security Section */}
      <section id="comfort" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Confort & Sécurité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre bien-être et votre sécurité sont nos priorités absolues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sécurité Maximale</h3>
              <p className="text-gray-600">
                Protocoles de sécurité stricts et équipements de surveillance avancés
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-emerald-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confort Optimal</h3>
              <p className="text-gray-600">
                Environnement chaleureux et accueillant pour votre bien-être
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standards Élevés</h3>
              <p className="text-gray-600">
                Respect des normes internationales de qualité et d'hygiène
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Disponibilité</h3>
              <p className="text-gray-600">
                Équipe disponible et réactive pour répondre à vos besoins
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Certifications et Accréditations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-800" />
                    <span className="font-semibold">Certification ISO 9001</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-800" />
                    <span className="font-semibold">Accréditation Ministère de la Santé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-800" />
                    <span className="font-semibold">Normes européennes de sécurité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-800" />
                    <span className="font-semibold">Certification équipements médicaux</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Équipements médicaux"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Services sur Mesure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche personnalisée pour chaque patient
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation Personnalisée</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Évaluation complète individuelle</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Plan de traitement sur mesure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Suivi post-opératoire adapté</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accompagnement Complet</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Support psychologique</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Conseils nutritionnels</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Programme de récupération</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexibilité Horaire</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Rendez-vous adaptés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Urgences prises en charge</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Suivi à distance possible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Témoignages Patients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'expérience de nos patients au centre médical
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Amina R.</div>
                  <div className="text-sm text-gray-600">Casablanca</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Un centre exceptionnel avec un personnel très professionnel. 
                L'environnement est rassurant et moderne. Je me suis sentie en sécurité 
                tout au long de mon traitement."
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Khadija M.</div>
                  <div className="text-sm text-gray-600">Rabat</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "L'accueil est chaleureux et l'équipe est très attentionnée. 
                Les installations sont impeccables et j'ai été impressionnée 
                par le niveau de confort offert."
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-800" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Leila B.</div>
                  <div className="text-sm text-gray-600">Marrakech</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Un centre qui allie parfaitement technologie moderne et approche humaine. 
                Le suivi post-opératoire est exceptionnel. Je recommande vivement !"
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              </div>
              <p className="text-gray-600">
                Note moyenne basée sur plus de 200 avis patients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Visitez Notre Centre
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez nos installations modernes et rencontrez notre équipe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05223-98689"
              className="bg-white text-blue-800 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg"
            >
              Prendre rendez-vous: 05223-98689
            </a>
            <a
              href="https://www.facebook.com/lipedem"
              target="_blank"
              rel="noopener noreferrer"
              className="border-3 border-white/60 text-white px-10 py-5 rounded-2xl hover:bg-white/25 backdrop-blur-md transition-all duration-500 font-bold text-xl shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              Voir plus sur Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Center;