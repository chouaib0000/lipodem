import React from 'react';
import { GraduationCap, Award, BookOpen, Users, Star, CheckCircle } from 'lucide-react';

const Doctor: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-3d-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 morphing-3d blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-emerald-400/25 to-green-600/25 floating-3d blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Dr. Tawfik Sefrioui
              </h1>
              <p className="text-2xl text-cyan-300 font-semibold mb-6">
                Spécialiste en Traitement du Lipœdème
              </p>
              <p className="text-lg text-blue-100 mb-8">
                Expert reconnu avec plus de 15 ans d'expérience dans le diagnostic et 
                le traitement du lipœdème. Pionnier de la technique WAL au Maroc.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-blue-200">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-sm text-blue-200">Patients traités</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-blue-200">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-white/20 via-white/10 to-white/20 backdrop-blur-md rounded-3xl p-6 transform rotate-2 shadow-2xl border border-white/30 floating-3d">
                <img
                  src="/327132820_1208378803427752_8336301115681957749_n.png"
                  alt="Dr. Tawfik Sefrioui"
                  className="rounded-2xl w-full h-96 object-cover transform -rotate-2"
                  style={{ filter: 'none !important', animation: 'none !important' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 card-3d p-6 rounded-2xl pulsing-3d">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-blue-800" />
                  <div>
                    <div className="font-bold text-gray-900">Certifié</div>
                    <div className="text-sm text-gray-600">Expert Lipœdème</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Parcours Professionnel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une formation d'excellence et une expertise reconnue internationalement
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="icon-3d p-3 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Formation Médicale</h3>
                    <p className="text-gray-700 mb-4">
                      Diplômé de la Faculté de Médecine avec spécialisation en chirurgie plastique 
                      et reconstructrice. Formation complémentaire en traitement du lipœdème en Europe.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Doctorat en Médecine</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Spécialisation Chirurgie Plastique</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Formation Lipœdème - Europe</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="floating-3d"><img
                  src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Formation médicale"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                /></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="floating-3d"><img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Expertise technique"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                /></div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="icon-3d p-3 rounded-xl">
                    <Award className="w-8 h-8 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Expertise Technique</h3>
                    <p className="text-gray-700 mb-4">
                      Maîtrise des techniques les plus avancées, notamment la liposuccion WAL 
                      (Water-Assisted Liposuction), technique de référence pour le traitement du lipœdème.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Certification WAL</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Techniques mini-invasives</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Formation continue internationale</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 section-bg-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Publications Scientifiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contribution à la recherche et au développement des techniques de traitement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-3d p-8 rounded-2xl">
              <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "Traitement du Lipœdème par WAL"
              </h3>
              <p className="text-gray-600 mb-4">
                Étude comparative sur l'efficacité de la liposuccion assistée par eau 
                dans le traitement du lipœdème.
              </p>
              <div className="text-sm text-blue-800 font-semibold">
                Journal de Chirurgie Plastique - 2023
              </div>
            </div>

            <div className="card-3d p-8 rounded-2xl">
              <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-emerald-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "Diagnostic Précoce du Lipœdème"
              </h3>
              <p className="text-gray-600 mb-4">
                Protocole de diagnostic différentiel pour une identification précoce 
                et précise du lipœdème.
              </p>
              <div className="text-sm text-emerald-800 font-semibold">
                Revue Médicale Internationale - 2022
              </div>
            </div>

            <div className="card-3d p-8 rounded-2xl">
              <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-purple-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "Qualité de Vie Post-Traitement"
              </h3>
              <p className="text-gray-600 mb-4">
                Analyse de l'amélioration de la qualité de vie des patients 
                après traitement du lipœdème.
              </p>
              <div className="text-sm text-purple-800 font-semibold">
                Annales de Médecine - 2021
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="card-3d p-8 rounded-2xl inline-block">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Star className="w-8 h-8 text-blue-800" />
                <span className="text-2xl font-bold text-blue-800">Recherche Active</span>
              </div>
              <p className="text-gray-700 max-w-2xl">
                Dr. Sefrioui participe activement à la recherche internationale sur le lipœdème 
                et contribue régulièrement aux congrès médicaux spécialisés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Résultats et Témoignages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats exceptionnels qui transforment la vie de nos patients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Statistiques de Réussite
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 card-3d rounded-xl">
                  <span className="font-semibold text-gray-900">Satisfaction des patients</span>
                  <span className="text-2xl font-bold text-blue-800">98%</span>
                </div>
                <div className="flex items-center justify-between p-4 card-3d rounded-xl">
                  <span className="font-semibold text-gray-900">Amélioration de la douleur</span>
                  <span className="text-2xl font-bold text-emerald-800">95%</span>
                </div>
                <div className="flex items-center justify-between p-4 card-3d rounded-xl">
                  <span className="font-semibold text-gray-900">Amélioration mobilité</span>
                  <span className="text-2xl font-bold text-purple-800">92%</span>
                </div>
                <div className="flex items-center justify-between p-4 card-3d rounded-xl">
                  <span className="font-semibold text-gray-900">Recommandation</span>
                  <span className="text-2xl font-bold text-orange-800">99%</span>
                </div>
              </div>
            </div>
            <div>
              <div className="floating-3d"><img
                src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Résultats patients"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              /></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-3d p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-600">Patiente depuis 2022</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Après des années de souffrance, Dr. Sefrioui a changé ma vie. 
                La technique WAL a été révolutionnaire pour moi. Je recommande vivement !"
              </p>
              <div className="flex items-center space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="card-3d p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Fatima K.</div>
                  <div className="text-sm text-gray-600">Patiente depuis 2021</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Un professionnel exceptionnel avec une approche humaine. 
                Les résultats dépassent mes attentes. Merci Dr. Sefrioui !"
              </p>
              <div className="flex items-center space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-3d-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full floating-3d blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-400/20 rounded-full pulsing-3d blur-2xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Consultez un Expert Reconnu
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bénéficiez de l'expertise du Dr. Sefrioui pour votre traitement du lipœdème
          </p>
          <a
            href="tel:05223-98689"
            className="bg-white/95 backdrop-blur-md text-blue-800 px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 font-bold text-lg inline-flex items-center space-x-2 card-3d"
          >
            <span>Prendre rendez-vous: 05223-98689</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Doctor;