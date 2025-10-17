'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { ToastContainer, useToast } from '@/components/ui/Toast';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const { toasts, removeToast, success, error } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "132 Avenue du 20 Mars 2000\nLe Bardo, 2000 Tunis",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+216 71 66 03 33\nLun-Ven 8h00-17h00",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "lpasdrubal@gmail.com\nRéponse sous 24h",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h00-17h00\nSam: 8h00-12h00",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const services = [
    {
      title: "Admissions",
      description: "Informations sur les inscriptions et les programmes",
      contact: "admissions@asdrubal.edu.tn"
    },
    {
      title: "Vie Scolaire",
      description: "Questions sur la vie quotidienne et les activités",
      contact: "vie-scolaire@asdrubal.edu.tn"
    },
    {
      title: "Administration",
      description: "Facturation, paiements et documents officiels",
      contact: "admin@asdrubal.edu.tn"
    },
    {
      title: "Direction",
      description: "Questions générales et réclamations",
      contact: "direction@asdrubal.edu.tn"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          phone: formData.telephone,
          subject: formData.sujet,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        success(
          'Message envoyé !',
          'Nous vous répondrons dans les plus brefs délais.'
        );
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: ''
        });
      } else {
        error(
          'Erreur d\'envoi',
          result.error || 'Une erreur est survenue. Veuillez réessayer.'
        );
      }
    } catch (err) {
      error(
        'Erreur de connexion',
        'Impossible de contacter le serveur. Vérifiez votre connexion.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contactez-Nous
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Notre équipe est à votre écoute pour répondre à toutes vos questions 
            et vous accompagner dans votre démarche.
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Coordonnées
            </h2>
            <p className="text-xl text-gray-600">
              Plusieurs moyens de nous contacter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} hover className="text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 whitespace-pre-line">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire de contact et services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <span>Envoyez-nous un message</span>
                </CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous répondrons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Votre nom complet"
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    required
                  />
                  
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  
                  <Input
                    type="tel"
                    placeholder="Votre téléphone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  />
                  
                  <Select
                    value={formData.sujet}
                    onChange={(e) => setFormData({...formData, sujet: e.target.value})}
                    options={[
                      { value: "admissions", label: "Admissions et inscriptions" },
                      { value: "programmes", label: "Programmes éducatifs" },
                      { value: "vie-scolaire", label: "Vie scolaire" },
                      { value: "tarifs", label: "Tarifs et paiements" },
                      { value: "visite", label: "Demande de visite" },
                      { value: "autre", label: "Autre" }
                    ]}
                    placeholder="Sélectionnez un sujet"
                    required
                  />
                  
                  <Textarea
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    required
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    icon={<Send className="w-5 h-5" />}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Services et contacts spécialisés */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Services Spécialisés
              </h3>
              <p className="text-gray-600 mb-8">
                Pour des questions spécifiques, contactez directement le service concerné :
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} hover>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {service.description}
                      </p>
                      <a 
                        href={`mailto:${service.contact}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {service.contact}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte et localisation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Localisation
            </h2>
            <p className="text-xl text-gray-600">
              Venez nous rendre visite au cœur du Bardo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations pratiques */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations Pratiques
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">📍 Adresse complète</h4>
                  <p className="text-gray-600">
                    132 Avenue du 20 Mars 2000<br />
                    Le Bardo, 2000 Tunis<br />
                    Tunisie
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">🚗 Accès en voiture</h4>
                  <p className="text-gray-600">
                    Parking disponible sur place<br />
                    Accès facile depuis le centre-ville<br />
                    Proche de l'Avenue Habib Bourguiba
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">🚌 Transport public</h4>
                  <p className="text-gray-600">
                    Bus : Lignes 10, 15, 28<br />
                    Métro : Station Bardo (5 min à pied)<br />
                    Taxi : Accessible 24h/24
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">⏰ Horaires de visite</h4>
                  <p className="text-gray-600">
                    Lundi - Vendredi : 8h00 - 17h00<br />
                    Samedi : 8h00 - 12h00<br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>

            {/* Carte Google Maps intégrée */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Carte Interactive
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Localisation du Lycée Asdrubal
                  </p>
                  <Button 
                    onClick={() => window.open('https://maps.google.com/?q=132+Avenue+du+20+Mars+2000+Le+Bardo+Tunis', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Ouvrir dans Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Réponses rapides aux questions les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Quels sont les délais d'inscription ?",
                answer: "Les inscriptions sont ouvertes toute l'année. Pour la rentrée de septembre, nous recommandons de s'inscrire avant juin."
              },
              {
                question: "Proposez-vous des visites de l'établissement ?",
                answer: "Oui, nous organisons des visites guidées sur rendez-vous. Contactez-nous pour planifier votre visite."
              },
              {
                question: "Y a-t-il des bourses disponibles ?",
                answer: "Oui, nous proposons plusieurs types de bourses : excellence, sociale, sportive et artistique. Renseignez-vous auprès de notre service admissions."
              },
              {
                question: "Quels sont les moyens de paiement acceptés ?",
                answer: "Nous acceptons les virements bancaires, les chèques et les paiements échelonnés sur 10 mois."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Prêt à Nous Rejoindre ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir tout ce que le Lycée Asdrubal peut offrir à votre enfant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
            >
              Demander une visite
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4"
            >
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}