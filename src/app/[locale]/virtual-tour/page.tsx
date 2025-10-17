'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  Map, 
  Camera, 
  Play, 
  ArrowRight, 
  Users, 
  BookOpen, 
  Activity,
  Utensils,
  Shield
} from 'lucide-react';

export default function VirtualTourPage() {
  const t = useTranslations('virtualTour');

  const tourSections = [
    {
      id: 'entrance',
      title: 'Entrée Principale',
      description: 'Bienvenue au Lycée Asdrubal. Découvrez notre hall d\'accueil moderne et sécurisé.',
      image: '/images/tour/entrance.jpg',
      icon: Map,
      highlights: ['Accueil sécurisé', 'Hall moderne', 'Informations pratiques']
    },
    {
      id: 'classrooms',
      title: 'Salles de Classe',
      description: 'Nos salles de classe équipées des dernières technologies pour un apprentissage optimal.',
      image: '/images/tour/classrooms.jpg',
      icon: BookOpen,
      highlights: ['Équipement moderne', 'Tableaux interactifs', 'Climatisation']
    },
    {
      id: 'laboratories',
      title: 'Laboratoires',
      description: 'Laboratoires de sciences équipés pour les expériences et découvertes.',
      image: '/images/tour/laboratories.jpg',
      icon: Activity,
      highlights: ['Chimie', 'Physique', 'Sciences naturelles']
    },
    {
      id: 'library',
      title: 'Bibliothèque',
      description: 'Espace de lecture et de recherche avec plus de 10 000 ouvrages.',
      image: '/images/tour/library.jpg',
      icon: BookOpen,
      highlights: ['10 000+ livres', 'Espace numérique', 'Salle d\'étude']
    },
    {
      id: 'cafeteria',
      title: 'Cantine',
      description: 'Cantine spacieuse avec cuisine préparée sur place.',
      image: '/images/tour/cafeteria.jpg',
      icon: Utensils,
      highlights: ['Cuisine sur place', 'Menus équilibrés', '500 places']
    },
    {
      id: 'sports',
      title: 'Installations Sportives',
      description: 'Gymnase, terrain de sport et piscine pour l\'épanouissement physique.',
      image: '/images/tour/sports.jpg',
      icon: Activity,
      highlights: ['Gymnase', 'Terrain de sport', 'Piscine']
    },
    {
      id: 'security',
      title: 'Sécurité',
      description: 'Système de sécurité avancé pour la protection de nos élèves.',
      image: '/images/tour/security.jpg',
      icon: Shield,
      highlights: ['Surveillance 24h/24', 'Contrôle d\'accès', 'Sécurité renforcée']
    },
    {
      id: 'courtyard',
      title: 'Cour de Récréation',
      description: 'Espace de détente et d\'activités pour nos élèves.',
      image: '/images/tour/courtyard.jpg',
      icon: Users,
      highlights: ['Espace vert', 'Aires de jeux', 'Zone de détente']
    }
  ];

  const virtualTourFeatures = [
    {
      title: "Vue 360° Interactive",
      description: "Explorez chaque espace avec une vue panoramique à 360°",
      icon: Camera
    },
    {
      title: "Visite Guidée Audio",
      description: "Écoutez les explications détaillées de chaque section",
      icon: Play
    },
    {
      title: "Informations Détaillées",
      description: "Découvrez les équipements et services de chaque espace",
      icon: ArrowRight
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Visite Virtuelle 360°
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Découvrez le Lycée Asdrubal depuis chez vous ! Explorez nos installations 
            modernes et nos espaces éducatifs avec notre visite virtuelle interactive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4"
              icon={<Play className="w-6 h-6" />}
            >
              Commencer la visite
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4"
              icon={<Camera className="w-6 h-6" />}
            >
              Galerie photos
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités de la Visite
            </h2>
            <p className="text-xl text-gray-600">
              Une expérience immersive et interactive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {virtualTourFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tour Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explorez Nos Espaces
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez chaque zone de notre établissement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} hover className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                    <div className="text-center text-white">
                      <Icon className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-bold">{section.title}</p>
                    </div>
                    <Button 
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      size="sm"
                      icon={<Play className="w-4 h-4" />}
                    >
                      Visiter
                    </Button>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {section.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tour */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Visite Interactive Complète
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Plongez-vous dans l'ambiance du Lycée Asdrubal avec notre visite virtuelle 
                complète. Naviguez librement entre les différents espaces et découvrez 
                tous nos équipements et services.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Sélectionnez un espace à visiter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Explorez avec la vue 360°</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Écoutez les explications audio</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4"
                icon={<Play className="w-6 h-6" />}
              >
                Lancer la visite complète
              </Button>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <Camera className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-xl font-bold">Visite 360° Interactive</p>
                  <p className="text-blue-100">Cliquez pour commencer</p>
                </div>
              </div>
              <p className="text-gray-600">
                Interface de visite virtuelle en cours de développement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Prêt à Visiter en Personne ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            La visite virtuelle vous a plu ? Planifiez une visite réelle de notre établissement 
            pour rencontrer notre équipe et découvrir l'ambiance du Lycée Asdrubal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4"
            >
              Planifier une visite
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
