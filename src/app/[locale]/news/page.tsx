'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, User, Tag, ArrowRight, Search, Filter } from 'lucide-react';
import { useState } from 'react';

export default function NewsPage() {
  const t = useTranslations('news');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: "Inscriptions ouvertes pour l'année scolaire 2024-2025",
      excerpt: "Les inscriptions pour la nouvelle année scolaire sont maintenant ouvertes. Découvrez nos programmes et réservez votre place dès maintenant.",
      content: "Le Lycée Privé Asdrubal ouvre ses portes pour les inscriptions de l'année scolaire 2024-2025. Nous proposons des programmes d'excellence du secondaire au supérieur, avec un accompagnement personnalisé pour chaque élève.",
      author: "Service Admissions",
      date: "2024-01-15",
      category: "Admissions",
      image: "/images/news/inscriptions-2024.jpg",
      tags: ["inscription", "2024-2025", "programmes"],
      featured: true
    },
    {
      id: 2,
      title: "Remise des diplômes 2024 : Félicitations à tous nos diplômés !",
      excerpt: "Cérémonie de remise des diplômes pour nos étudiants de terminale. Un moment émouvant et plein de fierté pour nos élèves et leurs familles.",
      content: "Le 15 juin 2024, nous avons célébré la réussite de nos élèves de terminale lors de la cérémonie de remise des diplômes. 98% de nos élèves ont obtenu leur baccalauréat avec mention.",
      author: "Direction",
      date: "2024-01-10",
      category: "Événements",
      image: "/images/news/remise-diplomes-2024.jpg",
      tags: ["diplômes", "baccalauréat", "réussite"],
      featured: true
    },
    {
      id: 3,
      title: "Nouveau programme d'activités extra-scolaires",
      excerpt: "Découvrez nos nouveaux clubs et activités pour cette année : robotique, théâtre, musique et bien plus encore.",
      content: "Cette année, nous enrichissons notre offre d'activités parascolaires avec de nouveaux clubs : robotique, théâtre, musique, sciences expérimentales et sport. Ces activités permettent aux élèves de développer leurs talents et passions.",
      author: "Vie Scolaire",
      date: "2024-01-05",
      category: "Activités",
      image: "/images/news/activites-extra.jpg",
      tags: ["activités", "clubs", "développement"],
      featured: false
    },
    {
      id: 4,
      title: "Partenariat avec l'Université de Sorbonne",
      excerpt: "Signature d'un nouveau partenariat pour faciliter l'accès de nos élèves aux études supérieures en France.",
      content: "Nous sommes fiers d'annoncer notre nouveau partenariat avec l'Université de Sorbonne. Ce partenariat permettra à nos élèves d'accéder plus facilement aux études supérieures en France.",
      author: "Direction",
      date: "2024-01-01",
      category: "Partenariats",
      image: "/images/news/partenariat-sorbonne.jpg",
      tags: ["partenariat", "France", "études supérieures"],
      featured: false
    },
    {
      id: 5,
      title: "Journée portes ouvertes : Venez découvrir notre établissement",
      excerpt: "Samedi 20 janvier, venez découvrir les installations et rencontrer notre équipe pédagogique.",
      content: "Nous organisons une journée portes ouvertes le samedi 20 janvier de 9h à 17h. Cette occasion unique de découvrir nos installations, nos méthodes pédagogiques et de rencontrer notre équipe.",
      author: "Communication",
      date: "2023-12-28",
      category: "Événements",
      image: "/images/news/portes-ouvertes.jpg",
      tags: ["portes ouvertes", "visite", "découverte"],
      featured: false
    },
    {
      id: 6,
      title: "Résultats exceptionnels aux Olympiades de Mathématiques",
      excerpt: "Nos élèves se distinguent une nouvelle fois aux Olympiades nationales de mathématiques avec 3 médailles d'or.",
      content: "Félicitations à nos élèves qui ont brillamment représenté le Lycée Asdrubal aux Olympiades nationales de mathématiques. Trois de nos élèves ont remporté des médailles d'or, confirmant l'excellence de notre enseignement.",
      author: "Département Mathématiques",
      date: "2023-12-20",
      category: "Réussites",
      image: "/images/news/olympiades-maths.jpg",
      tags: ["mathématiques", "olympiades", "réussite"],
      featured: false
    }
  ];

  const categories = [
    "Toutes les catégories",
    "Admissions",
    "Événements",
    "Activités",
    "Partenariats",
    "Réussites"
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Toutes les catégories' || 
                           article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Actualités & Événements
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Restez informé de toute l'actualité du Lycée Asdrubal : 
            événements, réussites, nouvelles activités et bien plus encore.
          </p>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtre par catégorie */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles en vedette */}
      {featuredArticles.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Articles en Vedette
              </h2>
              <p className="text-xl text-gray-600">
                Les dernières actualités importantes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} hover className="overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📰</div>
                      <p className="text-lg font-medium">Image de l'article</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </span>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    
                    <Button className="w-full" icon={<ArrowRight className="w-5 h-5" />}>
                      Lire la suite
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tous les articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Toutes les Actualités
            </h2>
            <p className="text-xl text-gray-600">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
            </p>
          </div>

          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} hover className="h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">📄</div>
                      <p className="text-sm font-medium">Image de l'article</p>
                    </div>
                  </div>
                  
                  <CardHeader className="flex-grow">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {article.category}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </span>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </span>
                      <Button size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                        Lire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou de filtre.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                variant="outline"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Restez Informé
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
            et événements du Lycée Asdrubal directement dans votre boîte mail.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3">
              S'abonner
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            Nous respectons votre vie privée. Désabonnement possible à tout moment.
          </p>
        </div>
      </section>
    </div>
  );
}