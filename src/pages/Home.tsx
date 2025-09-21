import React from 'react';
import { ArrowRight, Award, Clock, Users, Star, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-enhanced relative overflow-hidden" id="accueil">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/25 to-indigo-600/25 morphing-3d blur-3xl"></div>
          <div className="absolute bottom-32 left-32 w-[28rem] h-[28rem] bg-gradient-to-tr from-emerald-400/20 to-green-600/20 floating-3d blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/18 to-pink-600/18 pulsing-3d blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-bl from-cyan-400/15 to-blue-500/15 glowing-3d blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tl from-rose-400/12 to-pink-500/12 rotating-3d blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 w-full">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-white/30 backdrop-blur-md text-white px-10 py-5 rounded-full text-base font-bold border border-white/50 floating-3d shadow-2xl">
                  <Star className="w-4 h-4" />
                  <span>Expert Reconnu Internationalement</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight animate-slide-in-3d">
                  Traitement du <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">Lipœdème</span>
                </h1>
                <p className="text-base lg:text-xl text-blue-100 leading-relaxed font-light animate-fade-in-up drop-shadow-lg">
                  Solutions <span className="font-bold text-cyan-200 drop-shadow-md">personnalisées</span> et techniques <span className="font-bold text-blue-200 drop-shadow-md">révolutionnaires</span> pour traiter efficacement le Lipœdème. 
                  <br /><span className="text-cyan-300 font-semibold">Dr. Tawfik Sefrioui</span>, pionnier de la technique WAL au Maroc.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 w-full">
                <a
                  href="tel:05223-98689"
                  className="btn-3d px-6 lg:px-8 py-4 rounded-2xl flex items-center justify-center space-x-3 font-bold text-base lg:text-lg shadow-2xl transform hover:scale-105 transition-all duration-500 w-full"
                >
                  <Phone className="w-6 h-6" />
                  <span className="text-center">Consultation Immédiate: 05223-98689</span>
                </a>
                <Link
                  to="/lipedema"
                  className="border-3 border-white/70 text-white px-6 lg:px-8 py-4 rounded-2xl hover:bg-white/30 backdrop-blur-md transition-all duration-500 font-bold text-base lg:text-lg text-center shadow-lg hover:shadow-2xl transform hover:scale-105 w-full"
                >
                  Découvrir nos Solutions
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 lg:pt-12 w-full">
                <div className="text-center">
                  <div className="bg-white/30 backdrop-blur-md w-16 h-16 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl border border-white/50 floating-3d">
                    <Award className="w-6 h-6 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-xl lg:text-3xl font-black text-white drop-shadow-2xl">15+</div>
                  <div className="text-xs lg:text-base text-blue-200 font-bold">Années d'Excellence</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/30 backdrop-blur-md w-16 h-16 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl border border-white/50 floating-3d" style={{animationDelay: '1s'}}>
                    <Users className="w-6 h-6 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-xl lg:text-3xl font-black text-white drop-shadow-2xl">1500+</div>
                  <div className="text-xs lg:text-base text-blue-200 font-bold">Patients Transformés</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/30 backdrop-blur-md w-16 h-16 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl border border-white/50 floating-3d" style={{animationDelay: '2s'}}>
                    <Clock className="w-6 h-6 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-xl lg:text-3xl font-black text-white drop-shadow-2xl">99%</div>
                  <div className="text-xs lg:text-base text-blue-200 font-bold">Satisfaction Totale</div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full mt-8 lg:mt-0">
              <div className="bg-gradient-to-tr from-white/30 via-white/20 to-white/30 backdrop-blur-md rounded-3xl p-12 transform rotate-3 shadow-2xl border border-white/50 floating-3d">
                <img
                  src="/327132820_1208378803427752_8336301115681957749_n.png"
                  alt="Dr. Tawfik Sefrioui"
                  className="rounded-3xl w-full h-64 lg:h-[28rem] object-cover transform -rotate-3 hover:-rotate-1 transition-all duration-700 shadow-2xl"
                  style={{ filter: 'none !important', animation: 'none !important' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white/98 backdrop-blur-md p-6 lg:p-10 rounded-3xl shadow-2xl border border-white/70 pulsing-3d">
                <div className="text-center">
                  <div className="text-2xl lg:text-5xl font-black text-blue-800 drop-shadow-sm">Certifié</div>
                  <div className="text-xs lg:text-base text-gray-600 font-bold">Expert International</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 section-enhanced overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-enhanced mb-8">
              Excellence Médicale & Innovation
            </h2>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto font-light leading-relaxed">
              Une approche <span className="font-black text-blue-800">révolutionnaire</span> et <span className="font-black text-emerald-800">sur-mesure</span> pour transformer votre qualité de vie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/lipedema" className="group card-professional p-12 rounded-3xl transform hover:scale-105 transition-all duration-500">
              <div className="icon-3d w-24 h-24 rounded-3xl flex items-center justify-center mb-10">
                <svg className="w-12 h-12 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-8">Diagnostic de Pointe</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Évaluation ultra-précise et diagnostic différentiel du lipœdème avec les technologies médicales les plus avancées au monde</p>
              <div className="flex items-center text-blue-800 font-bold text-lg">
                <span>Découvrir notre expertise</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-500" />
              </div>
            </Link>

            <Link to="/lipedema#wal" className="group card-professional p-12 rounded-3xl transform hover:scale-105 transition-all duration-500">
              <div className="icon-3d w-24 h-24 rounded-3xl flex items-center justify-center mb-10">
                <svg className="w-12 h-12 text-emerald-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-8">WAL Révolutionnaire</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Technique Water-Assisted Liposuction de dernière génération, ultra-précise, minimalement invasive avec des résultats spectaculaires</p>
              <div className="flex items-center text-emerald-800 font-bold text-lg">
                <span>Explorer la technologie</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-500" />
              </div>
            </Link>

            <Link to="/patient-journey" className="group card-professional p-12 rounded-3xl transform hover:scale-105 transition-all duration-500">
              <div className="icon-3d w-24 h-24 rounded-3xl flex items-center justify-center mb-10">
                <Users className="w-12 h-12 text-purple-800" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-8">Accompagnement VIP</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Suivi ultra-personnalisé et accompagnement d'exception à chaque étape de votre transformation, avec une équipe dédiée</p>
              <div className="flex items-center text-purple-800 font-bold text-lg">
                <span>Votre parcours sur-mesure</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-500" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 section-bg-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-enhanced mb-12">
                L'Excellence qui Change des Vies
              </h2>
              <div className="space-y-10">
                <div className="flex items-start space-x-8 card-professional p-8 rounded-3xl">
                  <div className="icon-3d p-4 rounded-2xl flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-4">Expertise Mondiale</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Plus de 15 ans d'excellence dans le traitement du lipœdème avec des résultats qui dépassent toutes les attentes internationales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 card-professional p-8 rounded-3xl">
                  <div className="icon-3d p-4 rounded-2xl flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-4">Innovation Révolutionnaire</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Pionnier de la liposuccion WAL au Maroc, maîtrise absolue des technologies les plus avancées au monde</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 card-professional p-8 rounded-3xl">
                  <div className="icon-3d p-4 rounded-2xl flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-4">Sur-Mesure Absolu</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Chaque traitement est méticuleusement conçu et adapté aux besoins spécifiques de chaque patient pour des résultats optimaux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 card-professional p-8 rounded-3xl">
                  <div className="icon-3d p-4 rounded-2xl flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-4">Excellence Totale</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Accompagnement d'exception et suivi ultra-personnalisé du premier contact jusqu'à votre transformation complète</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="floating-3d"><img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Consultation médicale"
                className="rounded-3xl shadow-2xl w-full h-[32rem] object-cover transform hover:scale-105 transition-all duration-700"
              /></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 hero-enhanced text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-48 h-48 bg-white/20 rounded-full floating-3d blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-400/30 rounded-full pulsing-3d blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-emerald-400/25 rounded-full glowing-3d blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black mb-12 drop-shadow-2xl">
            Transformez Votre Vie Aujourd'hui
          </h2>
          <p className="text-xl mb-16 opacity-95 font-light leading-relaxed max-w-5xl mx-auto">
            Prenez rendez-vous dès maintenant pour une <span className="font-bold text-cyan-200 drop-shadow-md">consultation d'exception</span> et découvrez comment notre expertise peut révolutionner votre qualité de vie
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="tel:05223-98689"
              className="bg-white/98 backdrop-blur-md text-blue-800 px-12 py-6 rounded-2xl hover:bg-white transition-all duration-500 font-black text-lg flex items-center justify-center space-x-4 card-3d shadow-2xl transform hover:scale-110"
            >
              <Phone className="w-8 h-8" />
              <span>Consultation Immédiate</span>
            </a>
            <Link
              to="/patient-journey"
              className="border-3 border-white/70 text-white px-12 py-6 rounded-2xl hover:bg-white/30 backdrop-blur-md transition-all duration-500 font-black text-lg shadow-lg hover:shadow-2xl transform hover:scale-110"
            >
              Votre Parcours VIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;