'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPageSimple() {
  const t = useTranslations('contact');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire de contact soumis:', formData);
    alert('Message envoyé avec succès !');
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: ''
    });
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

      {/* Formulaire de contact */}
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
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Carte Google Maps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Notre Localisation</CardTitle>
                <CardDescription>
                  Visitez notre établissement au cœur du Bardo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      132 Avenue du 20 Mars 2000<br />
                      Le Bardo, 2000 Tunis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
