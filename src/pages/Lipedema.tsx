import React from 'react';
import { Search, Activity, Scissors, Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const Lipedema: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-enhanced relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400/25 to-blue-600/25 morphing-3d blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-green-600/20 floating-3d blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-8 drop-shadow-2xl">
              Lipœdème : Révolution Thérapeutique
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-6xl mx-auto leading-relaxed font-light">
              Une approche révolutionnaire et ultra-personnalisée pour diagnostiquer, comprendre et traiter définitivement le lipœdème avec les technologies les plus avancées
            </p>
          </div>
        </div>
      </section>

      {/* Disease Section */}
      <section id="disease" className="py-32 section-enhanced overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-enhanced mb-10">
                Comprendre le Lipœdème en Profondeur
              </h2>
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <p>
                  Le lipœdème est une pathologie complexe et chronique caractérisée par une accumulation anormale, 
                  progressive et symétrique de tissu adipeux, affectant principalement les membres inférieurs et 
                  parfois les bras, créant une disproportion caractéristique du corps.
                </p>
                <p>
                  Cette condition médicale affecte quasi-exclusivement les femmes et peut engendrer des 
                  douleurs chroniques intenses, une hypersensibilité marquée, des limitations fonctionnelles 
                  significatives et un impact psychologique majeur sur la qualité de vie.
                </p>
                <div className="card-professional p-10 rounded-3xl border-l-8 border-blue-500">
                  <h3 className="font-black text-2xl text-blue-900 mb-8">Manifestations Cliniques Caractéristiques :</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <span>Accumulation symétrique et progressive de tissu adipeux</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <span>Douleurs chroniques et hypersensibilité au toucher</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <span>Tendance marquée aux ecchymoses spontanées</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <span>Résistance totale aux régimes alimentaires et à l'exercice physique</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <span>Sensation de lourdeur et fatigue des membres affectés</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <span>Impact psychologique et social significatif</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="floating-3d"><img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Consultation lipœdème"
                className="rounded-3xl shadow-2xl w-full h-[32rem] object-cover"
              /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section id="diagnostic" className="py-32 section-bg-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-black text-enhanced mb-10">
              Diagnostic Ultra-Précis de Nouvelle Génération
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Un diagnostic d'une précision absolue utilisant les technologies médicales les plus avancées est la clé d'un traitement révolutionnaire et de résultats exceptionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="card-professional p-10 rounded-3xl text-center">
              <div className="icon-3d w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-10 h-10 text-blue-800" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Évaluation Approfondie</h3>
              <p className="text-gray-600 leading-relaxed">Analyse exhaustive des symptômes, historique médical détaillé et évaluation psychosociale complète</p>
            </div>

            <div className="card-professional p-10 rounded-3xl text-center">
              <div className="icon-3d w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Activity className="w-10 h-10 text-blue-800" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Examen Clinique Expert</h3>
              <p className="text-gray-600 leading-relaxed">Examen physique ultra-spécialisé avec identification précise des signes pathognomoniques du lipœdème</p>
            </div>

            <div className="card-professional p-10 rounded-3xl text-center">
              <div className="icon-3d w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Imagerie Haute Définition</h3>
              <p className="text-gray-600 leading-relaxed">Technologies d'imagerie de pointe : échographie Doppler, IRM et techniques d'analyse tissulaire avancées</p>
            </div>

            <div className="card-professional p-10 rounded-3xl text-center">
              <div className="icon-3d w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-blue-800" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Stratégie Sur-Mesure</h3>
              <p className="text-gray-600 leading-relaxed">Conception d'un plan thérapeutique ultra-personnalisé adapté à votre profil unique et vos objectifs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section id="treatment" className="py-32 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Options de Traitement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Approche multimodale adaptée à chaque patient
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-3d p-8 rounded-2xl">
              <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traitement Conservateur</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Drainage lymphatique manuel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Compression médicale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Exercices adaptés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Gestion de la douleur</span>
                </li>
              </ul>
            </div>

            <div className="card-3d p-8 rounded-2xl">
              <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Scissors className="w-8 h-8 text-emerald-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Liposuccion WAL</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Technique Water-Assisted</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Moins invasive</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Récupération plus rapide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Résultats durables</span>
                </li>
              </ul>
            </div>

            <div className="card-3d p-8 rounded-2xl">
              <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suivi Post-Traitement</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Consultations régulières</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Surveillance des résultats</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Ajustements si nécessaire</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Support continu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WAL Section */}
      <section id="wal" className="py-32 section-enhanced relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-indigo-600/15 pulsing-3d blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-emerald-400/12 to-green-600/12 morphing-3d blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-enhanced mb-10">
                WAL : La Révolution Thérapeutique
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  La technique Water-Assisted Liposuction (WAL) représente une révolution absolue 
                  dans le traitement du lipœdème. Cette méthode révolutionnaire utilise un jet d'eau pulsé 
                  ultra-précis pour détacher délicatement et sélectivement les cellules graisseuses pathologiques, 
                  préservant intégralement les tissus sains environnants.
                </p>
                
                <div className="card-professional p-10 rounded-3xl">
                  <h3 className="font-black text-2xl text-gray-900 mb-8">Avantages Révolutionnaires de la WAL :</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Technique ultra-douce et respectueuse</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Traumatisme tissulaire minimal</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Récupération ultra-rapide</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Préservation totale des tissus sains</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Douleur post-opératoire minimale</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Résultats d'une beauté naturelle</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Précision chirurgicale inégalée</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span>Résultats durables et définitifs</span>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:05223-98689"
                  className="inline-flex items-center space-x-3 btn-professional px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-500"
                >
                  <span>Consultation WAL Exclusive</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="floating-3d"><img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Procédure WAL"
                className="rounded-3xl shadow-2xl w-full h-[32rem] object-cover"
              /></div>
              <div className="absolute -bottom-8 -right-8 card-professional p-8 rounded-3xl pulsing-3d">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-800">WAL</div>
                  <div className="text-base text-gray-600 font-bold">Révolution Médicale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 hero-enhanced text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/15 rounded-full floating-3d blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-cyan-400/25 rounded-full pulsing-3d blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black mb-10 drop-shadow-2xl">
            Libérez-vous du Lipœdème Définitivement
          </h2>
          <p className="text-lg lg:text-xl mb-12 opacity-95 leading-relaxed max-w-5xl mx-auto">
            Contactez-nous dès maintenant pour un diagnostic ultra-précis et un plan de traitement révolutionnaire qui transformera votre vie
          </p>
          <a
            href="tel:05223-98689"
            className="bg-white/98 backdrop-blur-md text-blue-800 px-12 py-6 rounded-2xl hover:bg-white transition-all duration-500 font-black text-lg inline-flex items-center space-x-4 card-professional shadow-2xl transform hover:scale-110"
          >
            <Phone className="w-8 h-8" />
            <span>Transformation Immédiate: 05223-98689</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Lipedema;