import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Users, Award, Globe, BookOpen, Shield, Heart } from 'lucide-react';

export default function AboutPage() {

  const team = [
    {
      name: "Mme. Fatma Ben Ali",
      role: "Directrice Générale",
      bio: "Docteure en Sciences de l'Éducation, 20 ans d'expérience dans l'enseignement privé.",
      image: "/images/team/directrice.jpg"
    },
    {
      name: "M. Mohamed Trabelsi",
      role: "Directeur Pédagogique",
      bio: "Professeur agrégé de Mathématiques, spécialisé dans les méthodes d'enseignement innovantes.",
      image: "/images/team/directeur-pedagogique.jpg"
    },
    {
      name: "Mme. Amina Khelil",
      role: "Responsable Vie Scolaire",
      bio: "Psychologue scolaire, experte en accompagnement des adolescents.",
      image: "/images/team/vie-scolaire.jpg"
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Excellence Académique",
      description: "Programmes d'enseignement rigoureux et méthodes pédagogiques éprouvées pour assurer la réussite de chaque élève."
    },
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Un environnement chaleureux et sécurisé où chaque élève peut s'épanouir et développer sa personnalité."
    },
    {
      icon: Globe,
      title: "Ouverture Internationale",
      description: "Programmes bilingues, échanges culturels et préparation aux études supérieures à l'international."
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Infrastructures modernes et sécurisées, encadrement bienveillant et protocoles de sécurité stricts."
    }
  ];

  const stats = [
    { number: "25+", label: "Années d'excellence", icon: Award },
    { number: "98%", label: "Taux de réussite au Bac", icon: Award },
    { number: "1200+", label: "Élèves inscrits", icon: Users },
    { number: "50+", label: "Partenaires internationaux", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            À Propos du Lycée Asdrubal
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Depuis 1999, nous formons les leaders de demain avec excellence, 
            bienveillance et innovation au cœur du Bardo.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Fondé en 1999 au cœur du Bardo, le Lycée Privé Asdrubal s'est imposé 
                  comme un établissement de référence en Tunisie. Situé Avenue du 20 Mars 2000, 
                  notre établissement bénéficie d'un emplacement stratégique dans la banlieue de Tunis.
                </p>
                <p>
                  Depuis plus de 25 ans, nous nous efforçons de fournir une éducation de qualité 
                  qui allie excellence académique et développement personnel. Notre mission est 
                  de préparer nos élèves aux défis du monde moderne tout en préservant les valeurs 
                  fondamentales de respect, d'intégrité et de persévérance.
                </p>
                <p>
                  Aujourd'hui, avec plus de 1200 élèves et un taux de réussite de 98% au 
                  baccalauréat, le Lycée Asdrubal continue d'innover et d'exceller dans 
                  l'éducation privée en Tunisie.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Offrir une éducation de qualité accessible à tous</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Développer le potentiel de chaque élève</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Préparer aux études supérieures et à la vie active</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Inculquer les valeurs de citoyenneté et d'ouverture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600">
              Des chiffres qui témoignent de notre excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-4">
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold">{stat.number}</div>
                  </div>
                  <div className="text-lg font-medium text-gray-900">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action éducative
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des professionnels dévoués à l'excellence éducative
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Rejoignez la Famille Asdrubal
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez pourquoi plus de 1200 familles nous font confiance pour l'éducation de leurs enfants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-2">Adresse</h3>
              <p>132 Avenue du 20 Mars 2000<br />Le Bardo, Tunis</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Téléphone</h3>
              <p>+216 71 66 03 33</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p>lpasdrubal@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/admissions" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Demander une visite
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}