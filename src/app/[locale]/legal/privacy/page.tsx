'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Shield, Eye, Lock, Database, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comment nous protégeons et utilisons vos données personnelles
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>Introduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Le Lycée Privé Asdrubal s'engage à protéger votre vie privée et vos données personnelles. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez notre site web et nos services.
              </p>
            </CardContent>
          </Card>

          {/* Collecte des données */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-green-600" />
                <span>Données Collectées</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données personnelles :</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Informations sur l'élève (pour les parents)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données techniques :</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Utilisation des données */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-purple-600" />
                <span>Utilisation des Données</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Traiter vos demandes d'inscription et d'information</li>
                <li>Vous envoyer des informations sur nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
                <li>Communiquer avec vous concernant l'éducation de votre enfant</li>
              </ul>
            </CardContent>
          </Card>

          {/* Protection des données */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-red-600" />
                <span>Protection des Données</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Chiffrement SSL/TLS pour toutes les transmissions</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation du personnel sur la protection des données</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </CardContent>
          </Card>

          {/* Partage des données */}
          <Card>
            <CardHeader>
              <CardTitle>Partage des Données</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos prestataires de services (sous contrat de confidentialité)</li>
                <li>En cas de fusion ou d'acquisition de l'établissement</li>
              </ul>
            </CardContent>
          </Card>

          {/* Vos droits */}
          <Card>
            <CardHeader>
              <CardTitle>Vos Droits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément à la loi tunisienne n° 2004-63, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Corriger les données inexactes</li>
                <li><strong>Droit de suppression :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement</li>
                <li><strong>Droit de portabilité :</strong> Récupérer vos données</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-blue-600" />
                <span>Contact</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                contactez-nous :
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Email :</strong> privacy@asdrubal.edu.tn</p>
                <p className="text-gray-700"><strong>Téléphone :</strong> +216 71 66 03 33</p>
                <p className="text-gray-700"><strong>Adresse :</strong> 132 Avenue du 20 Mars 2000, Le Bardo, Tunis</p>
              </div>
            </CardContent>
          </Card>

          {/* Mise à jour */}
          <Card>
            <CardHeader>
              <CardTitle>Mise à Jour</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Cette politique de confidentialité peut être mise à jour périodiquement. 
                La version actuelle est datée du 1er janvier 2024. Nous vous informerons de tout changement 
                significatif par email ou via notre site web.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
