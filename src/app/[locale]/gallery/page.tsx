'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, Camera, Play, Users, Award, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [selectedAlbum, setSelectedAlbum] = useState('');

  const albums = [
    {
      id: 'remise-diplomes',
      title: 'Remise des Diplômes 2024',
      description: 'Cérémonie de remise des diplômes pour nos élèves de terminale',
      imageCount: 45,
      videoCount: 3,
      date: '2024-06-15',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      featured: true
    },
    {
      id: 'activites-sportives',
      title: 'Activités Sportives',
      description: 'Compétitions et entraînements de nos équipes sportives',
      imageCount: 32,
      videoCount: 8,
      date: '2024-05-20',
      icon: Award,
      color: 'from-green-500 to-green-600',
      featured: true
    },
    {
      id: 'voyages-educatifs',
      title: 'Voyages Éducatifs',
      description: 'Sorties pédagogiques et voyages d\'études',
      imageCount: 67,
      videoCount: 5,
      date: '2024-04-10',
      icon: Camera,
      color: 'from-purple-500 to-purple-600',
      featured: false
    },
    {
      id: 'evenements-culturels',
      title: 'Événements Culturels',
      description: 'Théâtre, musique, expositions et spectacles',
      imageCount: 28,
      videoCount: 12,
      date: '2024-03-25',
      icon: Play,
      color: 'from-red-500 to-red-600',
      featured: false
    },
    {
      id: 'vie-quotidienne',
      title: 'Vie Quotidienne',
      description: 'Moments de la vie quotidienne au lycée',
      imageCount: 89,
      videoCount: 2,
      date: '2024-02-15',
      icon: Users,
      color: 'from-yellow-500 to-yellow-600',
      featured: false
    },
    {
      id: 'infrastructures',
      title: 'Nos Infrastructures',
      description: 'Découvrez nos salles de classe, laboratoires et espaces',
      imageCount: 24,
      videoCount: 1,
      date: '2024-01-30',
      icon: Camera,
      color: 'from-indigo-500 to-indigo-600',
      featured: false
    }
  ];

  const recentPhotos = [
    { id: 1, album: 'remise-diplomes', title: 'Cérémonie de remise des diplômes', type: 'image' },
    { id: 2, album: 'activites-sportives', title: 'Match de football', type: 'video' },
    { id: 3, album: 'voyages-educatifs', title: 'Visite du musée', type: 'image' },
    { id: 4, album: 'evenements-culturels', title: 'Spectacle de théâtre', type: 'video' },
    { id: 5, album: 'vie-quotidienne', title: 'Cours de sciences', type: 'image' },
    { id: 6, album: 'infrastructures', title: 'Nouveau laboratoire', type: 'image' },
    { id: 7, album: 'remise-diplomes', title: 'Félicitations aux diplômés', type: 'image' },
    { id: 8, album: 'activites-sportives', title: 'Championnat de natation', type: 'video' }
  ];

  const filteredAlbums = selectedAlbum ? albums.filter(album => album.id === selectedAlbum) : albums;
  const featuredAlbums = albums.filter(album => album.featured);
  const regularAlbums = albums.filter(album => !album.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Galerie Photos & Vidéos
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Découvrez la vie quotidienne du Lycée Asdrubal à travers nos photos et vidéos. 
            Moments de joie, réussites, activités et événements mémorables.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button
              variant={selectedAlbum === '' ? 'primary' : 'outline'}
              onClick={() => setSelectedAlbum('')}
            >
              Tous les albums
            </Button>
            {albums.map(album => (
              <Button
                key={album.id}
                variant={selectedAlbum === album.id ? 'primary' : 'outline'}
                onClick={() => setSelectedAlbum(album.id)}
              >
                {album.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Albums en vedette */}
      {!selectedAlbum && featuredAlbums.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Albums en Vedette
              </h2>
              <p className="text-xl text-gray-600">
                Nos moments les plus marquants
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredAlbums.map((album) => {
                const Icon = album.icon;
                return (
                  <Card key={album.id} hover className="overflow-hidden">
                    <div className={`h-64 bg-gradient-to-br ${album.color} flex items-center justify-center relative`}>
                      <div className="text-center text-white">
                        <Icon className="w-20 h-20 mx-auto mb-4" />
                        <p className="text-xl font-bold">{album.title}</p>
                      </div>
                      
                      {/* Badge contenu */}
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                          <Camera className="w-4 h-4" />
                          <span>{album.imageCount}</span>
                        </span>
                        {album.videoCount > 0 && (
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                            <Play className="w-4 h-4" />
                            <span>{album.videoCount}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(album.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                        {album.title}
                      </CardTitle>
                      
                      <CardDescription className="text-lg text-gray-600 leading-relaxed">
                        {album.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <Button 
                        className="w-full" 
                        onClick={() => setSelectedAlbum(album.id)}
                      >
                        Voir l'album ({album.imageCount + album.videoCount} médias)
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tous les albums */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedAlbum ? 'Contenu de l\'album' : 'Tous les Albums'}
            </h2>
            <p className="text-xl text-gray-600">
              {selectedAlbum ? 
                `${(albums.find(a => a.id === selectedAlbum)?.imageCount || 0) + (albums.find(a => a.id === selectedAlbum)?.videoCount || 0)} médias` :
                `${albums.reduce((total, album) => total + album.imageCount + album.videoCount, 0)} médias au total`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlbums.map((album) => {
              const Icon = album.icon;
              return (
                <Card key={album.id} hover className="overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${album.color} flex items-center justify-center relative`}>
                    <div className="text-center text-white">
                      <Icon className="w-16 h-16 mx-auto mb-3" />
                      <p className="text-lg font-bold">{album.title}</p>
                    </div>
                    
                    {/* Badge contenu */}
                    <div className="absolute top-3 right-3 flex space-x-1">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                        <Camera className="w-3 h-3" />
                        <span>{album.imageCount}</span>
                      </span>
                      {album.videoCount > 0 && (
                        <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                          <Play className="w-3 h-3" />
                          <span>{album.videoCount}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(album.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {album.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {album.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      className="w-full" 
                      size="sm"
                      onClick={() => setSelectedAlbum(album.id)}
                    >
                      Voir l'album
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photos récentes */}
      {!selectedAlbum && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Photos & Vidéos Récentes
              </h2>
              <p className="text-xl text-gray-600">
                Les derniers ajouts à notre galerie
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {recentPhotos.map((photo) => (
                <Card key={photo.id} hover className="aspect-square overflow-hidden">
                  <div className={`h-full bg-gradient-to-br ${
                    photo.type === 'video' ? 'from-red-500 to-red-600' : 'from-blue-500 to-purple-600'
                  } flex items-center justify-center relative`}>
                    <div className="text-center text-white">
                      {photo.type === 'video' ? (
                        <Play className="w-8 h-8 mx-auto mb-2" />
                      ) : (
                        <Camera className="w-8 h-8 mx-auto mb-2" />
                      )}
                      <p className="text-xs font-medium">{photo.title}</p>
                    </div>
                    
                    {/* Badge type */}
                    <div className="absolute top-2 right-2">
                      {photo.type === 'video' ? (
                        <Play className="w-4 h-4 text-white" />
                      ) : (
                        <Camera className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Partagez Vos Moments
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Vous avez des photos ou vidéos du lycée ? Partagez-les avec nous ! 
            Nous serions ravis de les ajouter à notre galerie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
            >
              Partager des médias
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4"
            >
              Télécharger nos photos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}