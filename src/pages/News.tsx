import React from 'react';
import { Calendar, ExternalLink, Facebook, ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      date: '15 Janvier 2025',
      title: 'Nouvelle technique WAL : Résultats exceptionnels',
      excerpt: 'Dr. Sefrioui présente les dernières avancées en liposuccion WAL avec des résultats encore plus précis.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Innovation'
    },
    {
      date: '8 Janvier 2025',
      title: 'Congrès International du Lipœdème 2025',
      excerpt: 'Participation au congrès européen avec présentation des cas cliniques marocains.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Congrès'
    },
    {
      date: '2 Janvier 2025',
      title: 'Témoignage patient : Une nouvelle vie',
      excerpt: 'Découvrez l\'histoire inspirante de Fatima, transformée par le traitement du lipœdème.',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Témoignage'
    }
  ];

  const facebookPosts = [
    {
      date: '20 Janvier 2025',
      content: 'Nouvelle vidéo éducative sur les signes précoces du lipœdème. Partagez pour sensibiliser ! 🩺',
      likes: 45,
      comments: 12
    },
    {
      date: '18 Janvier 2025',
      content: 'Résultats exceptionnels avec la technique WAL. Merci à nos patients pour leur confiance 💙',
      likes: 78,
      comments: 23
    },
    {
      date: '15 Janvier 2025',
      content: 'Consultation gratuite ce samedi pour les cas complexes. Appelez pour réserver votre place !',
      likes: 92,
      comments: 34
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Actualités
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Restez informé des dernières avancées et actualités du traitement du lipœdème
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Dernières Actualités
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovations, recherches et témoignages
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-800 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <button className="flex items-center text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-300">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Suivez-nous sur Facebook
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Restez connecté avec notre communauté pour les dernières nouvelles et conseils
            </p>
            <a
              href="https://www.facebook.com/lipedem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-3d px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl"
            >
              <Facebook className="w-5 h-5" />
              <span>Visiter notre page Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facebookPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Dr. Tawfik Sefrioui</div>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.content}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <span>❤️ {post.likes} J'aime</span>
                  <span>💬 {post.comments} Commentaires</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contenu Éducatif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ressources pour mieux comprendre le lipœdème
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guides Pratiques</h3>
              <p className="text-gray-700 mb-6">
                Téléchargez nos guides complets sur le lipœdème, ses symptômes et traitements.
              </p>
              <button className="text-blue-800 hover:text-blue-900 font-semibold flex items-center">
                <span>Télécharger</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Webinaires</h3>
              <p className="text-gray-700 mb-6">
                Participez à nos sessions éducatives en ligne avec questions-réponses.
              </p>
              <button className="text-emerald-800 hover:text-emerald-900 font-semibold flex items-center">
                <span>S'inscrire</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recherches</h3>
              <p className="text-gray-700 mb-6">
                Accédez aux dernières publications scientifiques sur le lipœdème.
              </p>
              <button className="text-purple-800 hover:text-purple-900 font-semibold flex items-center">
                <span>Consulter</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Restez Informé
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-800 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold">
              S'abonner
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Pas de spam, désabonnement facile à tout moment
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;