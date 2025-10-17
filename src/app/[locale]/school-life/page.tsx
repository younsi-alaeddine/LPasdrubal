'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Activity, 
  Bus, 
  Utensils, 
  Heart, 
  BookOpen, 
  Shield, 
  Users, 
  Award,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';

export default function SchoolLifePage() {
  const t = useTranslations('schoolLife');

  const activities = [
    {
      category: "Sports",
      icon: Activity,
      color: "from-green-500 to-green-600",
      items: [
        { name: "Football", description: "Entraînements et compétitions", schedule: "Lun-Mer-Ven 16h-18h" },
        { name: "Basketball", description: "Équipe masculine et féminine", schedule: "Mar-Jeu 16h-18h" },
        { name: "Natation", description: "Cours et compétitions", schedule: "Lun-Mer 15h-17h" },
        { name: "Tennis", description: "Cours individuels et collectifs", schedule: "Mar-Jeu-Sam 14h-16h" },
        { name: "Athlétisme", description: "Entraînements et championnats", schedule: "Lun-Ven 16h-18h" }
      ]
    },
    {
      category: "Arts & Culture",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      items: [
        { name: "Théâtre", description: "Ateliers et représentations", schedule: "Mar 16h-18h" },
        { name: "Musique", description: "Chorale et instruments", schedule: "Lun-Jeu 15h-17h" },
        { name: "Arts Plastiques", description: "Peinture, dessin, sculpture", schedule: "Mer 16h-18h" },
        { name: "Danse", description: "Danse moderne et traditionnelle", schedule: "Ven 16h-18h" },
        { name: "Cinéma", description: "Réalisation et analyse", schedule: "Sam 14h-17h" }
      ]
    },
    {
      category: "Sciences & Technologies",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      items: [
        { name: "Robotique", description: "Programmation et construction", schedule: "Mer 16h-18h" },
        { name: "Sciences Expérimentales", description: "Laboratoire et découvertes", schedule: "Lun-Jeu 15h-17h" },
        { name: "Astronomie", description: "Observation et étude du ciel", schedule: "Ven 19h-21h" },
        { name: "Informatique", description: "Programmation et développement", schedule: "Mar-Jeu 16h-18h" },
        { name: "Mathématiques", description: "Olympiades et concours", schedule: "Lun 16h-18h" }
      ]
    },
    {
      category: "Développement Personnel",
      icon: Heart,
      color: "from-red-500 to-red-600",
      items: [
        { name: "Débat & Éloquence", description: "Art oratoire et argumentation", schedule: "Mar 16h-18h" },
        { name: "Leadership", description: "Développement des compétences", schedule: "Mer 16h-18h" },
        { name: "Méditation", description: "Bien-être et concentration", schedule: "Lun-Jeu 7h-8h" },
        { name: "Bénévolat", description: "Actions solidaires", schedule: "Sam 9h-12h" },
        { name: "Langues", description: "Anglais, allemand, espagnol", schedule: "Lun-Mer-Ven 16h-17h" }
      ]
    }
  ];

  const services = [
    {
      title: "Transport Scolaire",
      icon: Bus,
      color: "from-green-500 to-green-600",
      description: "Service de transport sécurisé vers tous les quartiers de Tunis",
      details: [
        "12 lignes de bus couvrant Tunis et sa banlieue",
        "Bus climatisés et sécurisés",
        "Surveillance par des accompagnateurs qualifiés",
        "Horaires adaptés aux emplois du temps",
        "Tarif préférentiel pour les familles"
      ],
      price: "120 DT/mois",
      schedule: "7h30 - 8h30 et 16h30 - 17h30"
    },
    {
      title: "Cantine Scolaire",
      icon: Utensils,
      color: "from-orange-500 to-orange-600",
      description: "Repas équilibrés préparés sur place par notre équipe culinaire",
      details: [
        "Menus variés et équilibrés",
        "Respect des régimes alimentaires",
        "Ingrédients frais et de qualité",
        "Cuisine préparée sur place",
        "Surveillance nutritionnelle"
      ],
      price: "8 DT/repas",
      schedule: "12h00 - 13h30"
    },
    {
      title: "Services Médicaux",
      icon: Heart,
      color: "from-red-500 to-red-600",
      description: "Infirmerie et suivi médical pour tous nos élèves",
      details: [
        "Infirmerie ouverte 8h-17h",
        "Infirmière diplômée présente",
        "Suivi médical personnalisé",
        "Urgences médicales",
        "Campagnes de vaccination"
      ],
      price: "Inclus",
      schedule: "Lun-Ven 8h00-17h00"
    }
  ];

  const regulations = [
    {
      title: "Règlement Intérieur",
      description: "Les règles de vie au Lycée Asdrubal",
      icon: Shield,
      file: "reglement-interieur-2024.pdf",
      size: "2.3 MB"
    },
    {
      title: "Charte Éducative",
      description: "Nos valeurs et engagements",
      icon: BookOpen,
      file: "charte-educative.pdf",
      size: "1.8 MB"
    },
    {
      title: "Guide des Parents",
      description: "Informations pratiques pour les familles",
      icon: Users,
      file: "guide-parents-2024.pdf",
      size: "3.1 MB"
    },
    {
      title: "Programme des Activités",
      description: "Planning annuel des activités parascolaires",
      icon: Activity,
      file: "programme-activites.pdf",
      size: "1.5 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Vie Scolaire
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Découvrez la vie quotidienne au Lycée Asdrubal : activités parascolaires, 
            services, et tout ce qui fait la richesse de notre établissement.
          </p>
        </div>
      </section>

      {/* Activités Parascolaires */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Activités Parascolaires
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 20 activités pour l'épanouissement de vos enfants
            </p>
          </div>

          <div className="space-y-16">
            {activities.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((activity, activityIndex) => (
                      <Card key={activityIndex} hover>
                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {activity.name}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {activity.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{activity.schedule}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services Scolaires
            </h2>
            <p className="text-xl text-gray-600">
              Des services complets pour le confort et la sécurité de vos enfants
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hover className="h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">Tarif :</span>
                        <span className="text-green-600 font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{service.schedule}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Règlements et Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Documents & Règlements
            </h2>
            <p className="text-xl text-gray-600">
              Téléchargez les documents officiels de l'établissement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulations.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card key={index} hover>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="text-center space-y-3">
                      <div className="text-sm text-gray-500">
                        {doc.file} • {doc.size}
                      </div>
                      <Button className="w-full">
                        Télécharger
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Horaires et Informations Pratiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Horaires */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Horaires & Informations Pratiques
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🕒 Horaires de Cours</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Matin :</span>
                        <span>8h00 - 12h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Après-midi :</span>
                        <span>13h30 - 17h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Étude surveillée :</span>
                        <span>17h00 - 19h00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📅 Vacances Scolaires</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2 text-gray-700">
                      <div>Vacances d'hiver : 15-29 Décembre 2024</div>
                      <div>Vacances de printemps : 15-29 Mars 2025</div>
                      <div>Vacances d'été : 15 Juin - 15 Septembre 2025</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎒 Fournitures Scolaires</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2 text-gray-700">
                      <div>Liste fournie en début d'année</div>
                      <div>Possibilité d'achat groupé</div>
                      <div>Tarifs préférentiels négociés</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Vie Scolaire */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Vie Scolaire
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">📞 Responsable Vie Scolaire</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+216 71 66 03 33</span>
                      </div>
                      <div>Mme. Amina Khelil</div>
                      <div>vie-scolaire@asdrubal.edu.tn</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">🏫 Infirmerie</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+216 71 66 03 34</span>
                      </div>
                      <div>Mme. Fatma Ben Salem</div>
                      <div>infirmerie@asdrubal.edu.tn</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">🚌 Transport</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+216 71 66 03 35</span>
                      </div>
                      <div>M. Mohamed Khelil</div>
                      <div>transport@asdrubal.edu.tn</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Questions sur la Vie Scolaire ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre équipe vie scolaire est là pour vous accompagner et répondre 
            à toutes vos questions concernant la vie quotidienne de votre enfant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
            >
              Contacter la Vie Scolaire
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4"
            >
              Demander un rendez-vous
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}