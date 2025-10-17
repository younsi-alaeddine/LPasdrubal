import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { FileText, Building, Phone, Mail } from 'lucide-react';

export default function LegalTermsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Informations légales concernant le Lycée Privé Asdrubal
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {/* Éditeur */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="w-6 h-6 text-blue-600" />
                <span>Éditeur du Site</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Raison sociale :</h3>
                <p className="text-gray-700">Lycée Privé Asdrubal</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Forme juridique :</h3>
                <p className="text-gray-700">Établissement d'enseignement privé</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adresse :</h3>
                <p className="text-gray-700">132 Avenue du 20 Mars 2000, Le Bardo, 2000 Tunis, Tunisie</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Directeur de publication :</h3>
                <p className="text-gray-700">Mme. Fatma Ben Ali</p>
              </div>
            </CardContent>
          </Card>

          {/* Hébergement */}
          <Card>
            <CardHeader>
              <CardTitle>Hébergement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hébergeur :</h3>
                <p className="text-gray-700">Vercel Inc.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adresse :</h3>
                <p className="text-gray-700">340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-6 h-6 text-green-600" />
                <span>Contact</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">+216 71 66 03 33</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">lpasdrubal@gmail.com</span>
              </div>
            </CardContent>
          </Card>

          {/* Propriété intellectuelle */}
          <Card>
            <CardHeader>
              <CardTitle>Propriété Intellectuelle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                L'ensemble de ce site relève de la législation tunisienne et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </CardContent>
          </Card>

          {/* Protection des données */}
          <Card>
            <CardHeader>
              <CardTitle>Protection des Données Personnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Lycée Privé Asdrubal s'engage à protéger la vie privée de ses utilisateurs. 
                Les données personnelles collectées sont utilisées uniquement dans le cadre des services proposés.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Conformément à la loi tunisienne n° 2004-63 du 27 juillet 2004 relative à la protection des données à caractère personnel, 
                vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
              </p>
            </CardContent>
          </Card>

          {/* Responsabilité */}
          <Card>
            <CardHeader>
              <CardTitle>Limitation de Responsabilité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Le Lycée Privé Asdrubal ne peut être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur, 
                lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications requises, 
                soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </CardContent>
          </Card>

          {/* Droit applicable */}
          <Card>
            <CardHeader>
              <CardTitle>Droit Applicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Le présent site est régi par le droit tunisien. En cas de litige, les tribunaux tunisiens seront seuls compétents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
