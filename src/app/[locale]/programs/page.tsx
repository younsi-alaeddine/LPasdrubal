import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { BookOpen, Users, Clock, Award, Globe, Brain } from 'lucide-react';

export default async function ProgramsPage() {
  const t = await getTranslations('programs');

  const programs = [
    {
      level: "Secondaire (7ème - 9ème)",
      title: "Cycle Secondaire Fondamental",
      duration: "3 années",
      description: "Acquisition des bases solides dans toutes les matières fondamentales avec introduction aux sciences et aux langues.",
      subjects: [
        "Mathématiques", "Français", "Arabe", "Anglais", "Sciences Physiques", 
        "Sciences Naturelles", "Histoire-Géographie", "Éducation Civique", "Informatique"
      ],
      features: [
        "Classes limitées à 25 élèves maximum",
        "Suivi personnalisé de chaque élève",
        "Activités parascolaires variées",
        "Préparation aux examens nationaux"
      ],
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      level: "Lycée (1ère - 3ème)",
      title: "Cycle Secondaire Supérieur",
      duration: "3 années",
      description: "Spécialisation progressive avec orientation vers les filières scientifiques, littéraires ou économiques.",
      subjects: [
        "Spécialités scientifiques", "Langues vivantes", "Philosophie", "Économie", 
        "Gestion", "Sciences de l'ingénieur", "Arts plastiques", "Éducation physique"
      ],
      features: [
        "Orientation personnalisée",
        "Préparation intensive au Baccalauréat",
        "Projets de fin d'études",
        "Accompagnement vers les études supérieures"
      ],
      icon: Brain,
      color: "from-purple-500 to-purple-600"
    },
    {
      level: "Préparation Supérieure",
      title: "Classes Préparatoires",
      duration: "2 années",
      description: "Préparation intensive aux concours des grandes écoles et universités françaises et tunisiennes.",
      subjects: [
        "Mathématiques avancées", "Physique-Chimie", "Français-Philosophie", 
        "Langues vivantes", "Informatique", "Sciences économiques"
      ],
      features: [
        "Concours blancs réguliers",
        "Tutorat par d'anciens élèves",
        "Partenariats avec des universités",
        "Suivi psychologique spécialisé"
      ],
      icon: Award,
      color: "from-green-500 to-green-600"
    }
  ];

  const specializations = [
    {
      name: "Scientifique",
      description: "Mathématiques, Physique, Chimie, SVT",
      icon: "🔬",
      subjects: ["Mathématiques", "Physique-Chimie", "Sciences de la Vie et de la Terre", "Sciences de l'Ingénieur"],
      careers: ["Ingénieur", "Médecin", "Pharmacien", "Chercheur"]
    },
    {
      name: "Littéraire",
      description: "Lettres, Philosophie, Langues",
      icon: "📚",
      subjects: ["Littérature", "Philosophie", "Histoire-Géographie", "Langues vivantes"],
      careers: ["Professeur", "Journaliste", "Avocat", "Écrivain"]
    },
    {
      name: "Économique",
      description: "Économie, Gestion, Droit",
      icon: "💼",
      subjects: ["Économie", "Gestion", "Droit", "Mathématiques appliquées"],
      careers: ["Économiste", "Gestionnaire", "Comptable", "Banquier"]
    }
  ];

  const languages = [
    {
      name: "Français",
      level: "Langue principale d'enseignement",
      description: "Toutes les matières scientifiques et littéraires en français",
      icon: "🇫🇷"
    },
    {
      name: "Arabe",
      level: "Langue maternelle",
      description: "Littérature arabe, éducation civique, histoire",
      icon: "🇹🇳"
    },
    {
      name: "Anglais",
      level: "Langue vivante obligatoire",
      description: "Préparation aux certifications internationales (TOEFL, IELTS)",
      icon: "🇬🇧"
    },
    {
      name: "Allemand/Espagnol",
      level: "Langue vivante optionnelle",
      description: "Cours optionnels pour l'ouverture internationale",
      icon: "🇩🇪"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Programmes Éducatifs
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Des parcours d'excellence du secondaire au supérieur, 
            conçus pour préparer nos élèves aux défis de demain.
          </p>
        </div>
      </section>

      {/* Programmes Principaux */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Cycles d'Études
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours éducatif complet et progressif
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} hover className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Image/Icon */}
                    <div className={`bg-gradient-to-br ${program.color} p-8 flex items-center justify-center`}>
                      <Icon className="w-24 h-24 text-white" />
                    </div>
                    
                    {/* Contenu */}
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {program.level}
                        </span>
                        <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {program.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {program.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Matières principales :</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.subjects.slice(0, 6).map((subject, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Particularités :</h4>
                          <ul className="space-y-2">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spécialisations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Filières de Spécialisation
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez votre voie d'excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} hover className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{spec.icon}</div>
                  <CardTitle className="text-2xl font-bold">{spec.name}</CardTitle>
                  <CardDescription className="text-lg">{spec.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Matières :</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {spec.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Débouchés :</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {spec.careers.map((career, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Langues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programme Linguistique
            </h2>
            <p className="text-xl text-gray-600">
              Une ouverture internationale grâce aux langues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} hover className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-3">{lang.icon}</div>
                  <CardTitle className="text-xl font-bold">{lang.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {lang.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {lang.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activités Parascolaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Activités Parascolaires
            </h2>
            <p className="text-xl text-gray-600">
              Développement personnel et épanouissement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Club de Robotique", icon: "🤖", desc: "Programmation et innovation technologique" },
              { name: "Théâtre et Arts", icon: "🎭", desc: "Expression artistique et créativité" },
              { name: "Sports", icon: "⚽", desc: "Football, basketball, tennis et natation" },
              { name: "Débat et Éloquence", icon: "🎤", desc: "Développement de l'esprit critique" },
              { name: "Musique", icon: "🎵", desc: "Chorale et instruments de musique" },
              { name: "Sciences Expérimentales", icon: "🔬", desc: "Expériences et découvertes scientifiques" }
            ].map((activity, index) => (
              <Card key={index} hover className="text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{activity.icon}</div>
                  <CardTitle className="text-xl font-bold">{activity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {activity.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Prêt à Commencer Votre Parcours ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez nos programmes et trouvez celui qui correspond aux aspirations de votre enfant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/admissions" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Demander une brochure
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Planifier une visite
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}