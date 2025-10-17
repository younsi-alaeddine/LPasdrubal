import dynamic from 'next/dynamic';
import HeroTop from '@/components/ui/HeroTop';
import InnovationSection from '@/components/ui/InnovationSection';
import SocialProofSection from '@/components/ui/SocialProofSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { AnimatedSection, AnimatedCard, AnimatedList } from '@/components/ui/PageTransition';
import { GraduationCap, Shield, Activity, Trophy, Users, Star } from 'lucide-react';
import Link from 'next/link';

// Lazy loading pour les composants lourds
const Carousel = dynamic(() => import('@/components/ui/Carousel'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

export default function HomePage() {

  // Données d'exemple pour les actualités
  const newsItems = [
    {
      id: 1,
      title: 'Inscription ouverte pour l\'année 2024-2025',
      excerpt: 'Les inscriptions pour la nouvelle année scolaire sont maintenant ouvertes. Réservez votre place dès maintenant.',
      date: '2024-01-15',
      image: '/images/news-1.jpg',
    },
    {
      id: 2,
      title: 'Remise des diplômes 2024',
      excerpt: 'Cérémonie de remise des diplômes pour nos étudiants de terminale. Félicitations à tous nos diplômés !',
      date: '2024-01-10',
      image: '/images/news-2.jpg',
    },
    {
      id: 3,
      title: 'Nouveau programme d\'activités extra-scolaires',
      excerpt: 'Découvrez nos nouveaux clubs et activités pour cette année : robotique, théâtre, et bien plus.',
      date: '2024-01-05',
      image: '/images/news-3.jpg',
    },
  ];

  // Témoignages
  const testimonials = [
    {
      id: 1,
      name: 'Fatma Ben Ali',
      role: 'Mère d\'élève',
      content: 'Le Lycée Asdrubal a transformé mon fils. L\'encadrement est exceptionnel et les résultats parlent d\'eux-mêmes.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mohamed Trabelsi',
      role: 'Père d\'élève',
      content: 'Une école qui allie excellence académique et valeurs humaines. Je recommande vivement.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amina Khelil',
      role: 'Ancienne élève',
      content: 'Mes années au Lycée Asdrubal m\'ont préparée parfaitement pour mes études supérieures.',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: 'Pédagogie Innovante',
      description: 'Méthodes d\'enseignement modernes et personnalisées pour un apprentissage optimal.',
      color: 'bg-blue-500',
    },
    {
      icon: Shield,
      title: 'Sécurité & Bien-être',
      description: 'Environnement sécurisé et bienveillant pour l\'épanouissement de chaque élève.',
      color: 'bg-green-500',
    },
    {
      icon: Activity,
      title: 'Activités Enrichissantes',
      description: 'Programme d\'activités variées pour développer les talents et la créativité.',
      color: 'bg-purple-500',
    },
    {
      icon: Trophy,
      title: 'Excellence Académique',
      description: 'Résultats exceptionnels avec un taux de réussite de 98% au baccalauréat.',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Moderne */}
      <HeroTop
        title="Lycée Privé Asdrubal — L'École du Futur"
        subtitle="Intelligence Artificielle • Technologies Immersives • Excellence Internationale. Inscrivez votre enfant dans l'école la plus innovante de Tunisie."
        primaryCta={{
          text: "Inscrire Maintenant",
          href: '/admissions',
        }}
        secondaryCta={{
          text: "Visite Virtuelle 360°",
          href: '/virtual-tour',
        }}
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Section Innovations */}
      <InnovationSection />

      {/* Section Preuves Sociales */}
      <SocialProofSection />

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Nos Atouts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les innovations qui font la différence
            </p>
          </div>

          <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                >
                  <Card hover className="text-center h-full group relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.color === 'bg-blue-500' ? 'from-blue-500 to-blue-600' : 
                        feature.color === 'bg-green-500' ? 'from-green-500 to-green-600' :
                        feature.color === 'bg-purple-500' ? 'from-purple-500 to-purple-600' :
                        'from-yellow-500 to-yellow-600'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              );
            })}
          </AnimatedList>
        </div>
      </AnimatedSection>

      {/* News Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Actualités & Événements
              </h2>
            </div>
            <Link
              href="/news"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Voir tout →
            </Link>
          </div>

          <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <AnimatedCard
                key={item.id}
                delay={index * 0.1}
              >
                <Card hover className="h-full">
                  <div className="h-48 bg-gray-200 rounded-t-lg mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">Image</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </AnimatedList>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de nos Familles
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez pourquoi nos familles nous font confiance
            </p>
          </div>

          <Carousel
            items={testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-8 py-12">
                <Card className="max-w-2xl mx-auto text-center">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-3">
                      <Users className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            autoPlay={true}
            autoPlayInterval={6000}
            showIndicators={true}
            showArrows={true}
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
