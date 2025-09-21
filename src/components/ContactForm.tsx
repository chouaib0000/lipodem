import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-20 bg-3d-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-indigo-600/15 morphing-3d blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-emerald-400/10 to-green-600/10 floating-3d blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-400/12 to-pink-600/12 pulsing-3d blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text-professional mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prenez rendez-vous ou posez vos questions. Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-3d p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="icon-3d p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Téléphone</h4>
                    <p className="text-gray-700 text-lg">05223-98689</p>
                    <p className="text-sm text-gray-500">Lundi - Vendredi: 9h00 - 18h00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="icon-3d p-4 rounded-2xl">
                    <Mail className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-700 text-lg">contact@drtawfiksefrioui.ma</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="icon-3d p-4 rounded-2xl">
                    <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Adresse</h4>
                    <p className="text-gray-700 text-lg">5 bd Abdellatif benkaddour racine</p>
                    <p className="text-gray-700">Premier étage, Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-3d p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires d'Ouverture</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Lundi - Vendredi</span>
                  <span className="text-blue-800 font-bold">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Samedi</span>
                  <span className="text-blue-800 font-bold">9h00 - 14h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-900">Dimanche</span>
                  <span className="text-red-600 font-bold">Fermé</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
                <p className="text-blue-800 font-semibold text-sm">
                  📅 Consultations sur rendez-vous uniquement
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-3d p-8 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Demande de Contact</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-800 font-semibold">Message envoyé avec succès ! Nous vous répondrons bientôt.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <p className="text-red-800 font-semibold">Erreur lors de l'envoi. Veuillez réessayer.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-3d w-full pl-12 pr-4 py-4 rounded-2xl font-medium"
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-3d w-full pl-12 pr-4 py-4 rounded-2xl font-medium"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-3d w-full pl-12 pr-4 py-4 rounded-2xl font-medium"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-3">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-3d w-full px-4 py-4 rounded-2xl font-medium"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="consultation">Demande de consultation</option>
                  <option value="information">Demande d'information</option>
                  <option value="rdv">Prise de rendez-vous</option>
                  <option value="urgence">Cas urgent</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-3d w-full pl-12 pr-4 py-4 rounded-2xl font-medium resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-3d w-full py-4 px-8 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3">Urgence médicale ?</h4>
              <p className="text-blue-800 mb-4">
                Pour les cas urgents, appelez directement notre ligne d'urgence.
              </p>
              <a
                href="tel:05223-98689"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all duration-300 font-bold"
              >
                <Phone className="w-5 h-5" />
                <span>Appel d'urgence</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;