'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';
import { Brain, Cpu, Globe, Rocket, Shield, Zap } from 'lucide-react';

const InnovationSection = () => {
  const innovations = [
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Apprentissage personnalisé avec l'IA pour chaque élève",
      color: "from-purple-500 to-purple-600",
      stats: "95% d'amélioration"
    },
    {
      icon: Cpu,
      title: "Technologies Immersives",
      description: "Réalité virtuelle et augmentée pour un apprentissage révolutionnaire",
      color: "from-blue-500 to-blue-600",
      stats: "300% plus engageant"
    },
    {
      icon: Globe,
      title: "Classes Internationales",
      description: "Échanges virtuels avec 50+ pays et programmes bilingues",
      color: "from-green-500 to-green-600",
      stats: "50+ partenaires"
    },
    {
      icon: Rocket,
      title: "Innovation Pédagogique",
      description: "Méthodes d'apprentissage basées sur les neurosciences",
      color: "from-orange-500 to-orange-600",
      stats: "Pionnier en Tunisie"
    },
    {
      icon: Shield,
      title: "Sécurité 4.0",
      description: "Surveillance intelligente et environnement ultra-sécurisé",
      color: "from-red-500 to-red-600",
      stats: "100% sécurisé"
    },
    {
      icon: Zap,
      title: "Énergie Verte",
      description: "Campus 100% écologique avec panneaux solaires",
      color: "from-yellow-500 to-yellow-600",
      stats: "0% empreinte carbone"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Rocket className="w-5 h-5 text-purple-500" />
            <span className="text-purple-700 font-semibold">🚀 Innovations 2024</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              L'École du Futur
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Découvrez les technologies révolutionnaires qui transforment l'éducation de vos enfants
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card hover className="h-full group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating stats badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${innovation.color} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {innovation.stats}
                  </div>
                  
                  <CardHeader className="relative z-10 pt-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${innovation.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {innovation.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-600 leading-relaxed text-center text-lg">
                      {innovation.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à découvrir l'éducation du futur ?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 1200 familles qui ont choisi l'excellence et l'innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Réserver une visite
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105">
                Télécharger le prospectus
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;
