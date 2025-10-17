'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Calendar, FileText, CreditCard, CheckCircle, Clock, Users } from 'lucide-react';
import { useState } from 'react';

export default function AdmissionsPage() {
  const t = useTranslations('admissions');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    niveau: '',
    message: ''
  });

  const steps = [
    {
      number: 1,
      title: "Demande d'information",
      description: "Contactez-nous ou demandez une brochure détaillée",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "Visite de l'établissement",
      description: "Planifiez une visite pour découvrir nos installations",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      number: 3,
      title: "Dossier d'inscription",
      description: "Remplissez le formulaire et fournissez les documents",
      icon: FileText,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 4,
      title: "Entretien et test",
      description: "Évaluation des compétences et motivation de l'élève",
      icon: CheckCircle,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 5,
      title: "Décision d'admission",
      description: "Réponse dans les 48h suivant l'entretien",
      icon: CheckCircle,
      color: "from-green-500 to-green-600"
    },
    {
      number: 6,
      title: "Inscription définitive",
      description: "Paiement des frais et finalisation de l'inscription",
      icon: CreditCard,
      color: "from-red-500 to-red-600"
    }
  ];

  const fees = [
    {
      level: "7ème - 9ème (Secondaire)",
      tuition: "4500",
      registration: "500",
      total: "5000",
      features: ["Classes limitées", "Suivi personnalisé", "Activités incluses"]
    },
    {
      level: "1ère - 3ème (Lycée)",
      tuition: "5000",
      registration: "750",
      total: "5750",
      features: ["Orientation personnalisée", "Préparation au Bac", "Projets de fin d'études"]
    },
    {
      level: "Classes Préparatoires",
      tuition: "6000",
      registration: "1000",
      total: "7000",
      features: ["Concours blancs", "Tutorat spécialisé", "Partenariats universitaires"]
    }
  ];

  const scholarships = [
    {
      name: "Bourse d'Excellence",
      percentage: "50%",
      criteria: "Moyenne ≥ 16/20 et situation sociale",
      icon: "🏆"
    },
    {
      name: "Bourse Sociale",
      percentage: "30%",
      criteria: "Situation financière difficile",
      icon: "💝"
    },
    {
      name: "Bourse Sportive",
      percentage: "25%",
      criteria: "Talent sportif reconnu",
      icon: "⚽"
    },
    {
      name: "Bourse Artistique",
      percentage: "25%",
      criteria: "Talent artistique démontré",
      icon: "🎨"
    }
  ];

  const documents = [
    "Copie de l'acte de naissance",
    "Bulletins des 2 dernières années",
    "Certificat de scolarité",
    "4 photos d'identité récentes",
    "Copie de la carte d'identité du tuteur",
    "Justificatifs de revenus (pour bourses)",
    "Certificat médical",
    "Dossier d'orientation (pour lycée)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre demande a été envoyée avec succès !');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Admissions 2024-2025
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Rejoignez la famille Asdrubal ! Inscriptions ouvertes 
            pour tous les niveaux du secondaire au supérieur.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
            >
              Inscription en ligne
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4"
            >
              Demander une brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Processus d'admission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processus d'Admission
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours simple et transparent en 6 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} hover className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  
                  <CardHeader className="pt-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-center">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tarifs et Frais de Scolarité
            </h2>
            <p className="text-xl text-gray-600">
              Des tarifs transparents et compétitifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fees.map((fee, index) => (
              <Card key={index} hover className="text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {fee.level}
                  </CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {fee.total} DT
                  </div>
                  <div className="text-sm text-gray-600">
                    Scolarité: {fee.tuition} DT • Inscription: {fee.registration} DT
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-2 mb-6">
                    {fee.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Choisir ce niveau
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              * Frais de transport et cantine en option
            </p>
            <p className="text-sm text-gray-500">
              Possibilité de paiement échelonné sur 10 mois
            </p>
          </div>
        </div>
      </section>

      {/* Bourses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bourses et Aides Financières
            </h2>
            <p className="text-xl text-gray-600">
              Nous croyons que l'excellence doit être accessible à tous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} hover className="text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{scholarship.icon}</div>
                  <CardTitle className="text-lg font-bold">{scholarship.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {scholarship.percentage}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {scholarship.criteria}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents requis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Documents Requis
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Rassemblez ces documents pour finaliser votre inscription
              </p>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulaire de contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Demande d'Information</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour recevoir plus d'informations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Prénom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  
                  <Input
                    type="tel"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    required
                  />
                  
                  <Select
                    value={formData.niveau}
                    onChange={(e) => setFormData({...formData, niveau: e.target.value})}
                    options={[
                      { value: "7eme", label: "7ème année" },
                      { value: "8eme", label: "8ème année" },
                      { value: "9eme", label: "9ème année" },
                      { value: "1ere", label: "1ère année" },
                      { value: "2eme", label: "2ème année" },
                      { value: "3eme", label: "3ème année" },
                      { value: "prepa", label: "Classes préparatoires" }
                    ]}
                    placeholder="Niveau souhaité"
                    required
                  />
                  
                  <Textarea
                    placeholder="Message (optionnel)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                  
                  <Button type="submit" className="w-full">
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact direct */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Besoin d'Aide ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre équipe d'admission est là pour vous accompagner dans votre démarche.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-2">📞 Téléphone</h3>
              <p>+216 71 66 03 33</p>
              <p className="text-blue-100 text-sm">Lun-Ven 8h-17h</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">📧 Email</h3>
              <p>lpasdrubal@gmail.com</p>
              <p className="text-blue-100 text-sm">Réponse sous 24h</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">📍 Visite</h3>
              <p>132 Avenue du 20 Mars 2000</p>
              <p className="text-blue-100 text-sm">Le Bardo, Tunis</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
            >
              Appeler maintenant
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4"
            >
              Planifier une visite
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}