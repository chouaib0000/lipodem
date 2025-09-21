import React from 'react';
import { Calendar, FileText, Scissors, Heart, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const PatientJourney: React.FC = () => {
  const journeySteps = [
    {
      id: 'consultation',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Consultation Initiale',
      description: 'Première rencontre pour évaluer votre situation',
      details: [
        'Évaluation complète de vos symptômes',
        'Examen clinique détaillé',
        'Discussion des options de traitement',
        'Réponses à toutes vos questions'
      ]
    },
    {
      id: 'preop',
      icon: <FileText className="w-8 h-8" />,
      title: 'Bilans Pré-opératoires',
      description: 'Examens nécessaires avant l\'intervention',
      details: [
        'Analyses sanguines complètes',
        'Évaluation cardiaque',
        'Imagerie médicale si nécessaire',
        'Consultation anesthésiste'
      ]
    },
    {
      id: 'surgery',
      icon: <Scissors className="w-8 h-8" />,
      title: 'Intervention Chirurgicale',
      description: 'Traitement par liposuccion WAL',
      details: [
        'Technique WAL mini-invasive',
        'Anesthésie adaptée',
        'Surveillance continue',
        'Durée selon l\'étendue'
      ]
    },
    {
      id: 'postop',
      icon: <Heart className="w-8 h-8" />,
      title: 'Post-opératoire',
      description: 'Suivi et récupération personnalisés',
      details: [
        'Surveillance immédiate',
        'Gestion de la douleur',
        'Conseils de récupération',
        'Rendez-vous de contrôle'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Parcours Patient
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Un accompagnement personnalisé à chaque étape de votre traitement
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <div key={step.id} id={step.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-800">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
                        Étape {index + 1}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-8">{step.description}</p>
                  
                  <div className="space-y-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {index < journeySteps.length - 1 && (
                    <div className="mt-8">
                      <div className="flex items-center text-blue-800 font-semibold">
                        <span>Étape suivante</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={`https://images.pexels.com/photos/${4386466 + index}/pexels-photo-${4386466 + index}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={step.title}
                    className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Organization */}
      <section id="stay" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Organisez votre Séjour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous vous accompagnons dans l'organisation de votre séjour médical
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <MapPin className="w-8 h-8 text-blue-800" />
                  <h3 className="text-2xl font-bold text-gray-900">Localisation</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Adresse :</strong> 5 bd Abdellatif benkaddour racine, Premier étage, Casablanca
                  </p>
                  <p className="text-gray-700">
                    <strong>Accès :</strong> Centre-ville, facilement accessible en transport
                  </p>
                  <p className="text-gray-700">
                    <strong>Parking :</strong> Places disponibles à proximité
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <Clock className="w-8 h-8 text-emerald-800" />
                  <h3 className="text-2xl font-bold text-gray-900">Horaires</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Lundi - Vendredi :</strong> 9h00 - 18h00</p>
                  <p className="text-gray-700"><strong>Samedi :</strong> 9h00 - 14h00</p>
                  <p className="text-gray-700"><strong>Dimanche :</strong> Fermé</p>
                  <p className="text-sm text-blue-800 font-semibold mt-4">
                    Consultations sur rendez-vous uniquement
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Services d'Accompagnement</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Aide à la réservation d'hébergement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Informations transport</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Coordination avec votre médecin traitant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Suivi à distance post-opératoire</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Patients de l'étranger</h3>
                <p className="text-blue-800">
                  Nous accueillons régulièrement des patients internationaux. 
                  Notre équipe peut vous assister dans l'organisation de votre séjour médical 
                  au Maroc, incluant les formalités administratives et l'hébergement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Chronologie Type
            </h2>
            <p className="text-xl text-gray-600">
              Exemple de planning pour un traitement complet
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start space-x-6">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J-7
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation initiale</h3>
                  <p className="text-gray-600">Première rencontre, diagnostic et planification</p>
                </div>
              </div>

              <div className="relative flex items-start space-x-6">
                <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J-3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bilans pré-opératoires</h3>
                  <p className="text-gray-600">Examens médicaux et préparation à l'intervention</p>
                </div>
              </div>

              <div className="relative flex items-start space-x-6">
                <div className="bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J0
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Intervention</h3>
                  <p className="text-gray-600">Liposuccion WAL et surveillance post-opératoire</p>
                </div>
              </div>

              <div className="relative flex items-start space-x-6">
                <div className="bg-orange-800 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J+7
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premier contrôle</h3>
                  <p className="text-gray-600">Évaluation de la cicatrisation et des résultats</p>
                </div>
              </div>

              <div className="relative flex items-start space-x-6">
                <div className="bg-pink-800 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J+30
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Suivi à 1 mois</h3>
                  <p className="text-gray-600">Évaluation des résultats et ajustements si nécessaire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Commencez votre Parcours
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Prenez rendez-vous pour votre consultation initiale
          </p>
          <a
            href="tel:05223-98689"
            className="bg-white text-blue-800 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg inline-flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Réserver: 05223-98689</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PatientJourney;