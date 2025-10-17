'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const SocialProofSection = () => {
  const stats = [
    { number: "98%", label: "Taux de réussite au Bac", icon: TrendingUp, color: "text-green-500" },
    { number: "1200+", label: "Élèves inscrits", icon: Users, color: "text-blue-500" },
    { number: "25+", label: "Années d'excellence", icon: Award, color: "text-yellow-500" },
    { number: "95%", label: "Satisfaction parents", icon: CheckCircle, color: "text-purple-500" }
  ];

  const testimonials = [
    {
      name: "Dr. Fatma Ben Ali",
      role: "Mère de 3 enfants diplômés",
      content: "Le Lycée Asdrubal a transformé mes enfants. L'approche innovante avec l'IA et les technologies immersives les a préparés parfaitement pour leurs études supérieures. Je recommande vivement !",
      rating: 5,
      image: "/images/testimonial-1.jpg",
      achievement: "Fils admis à Polytechnique Paris"
    },
    {
      name: "Mohamed Trabelsi",
      role: "Père d'élève",
      content: "L'encadrement est exceptionnel et les résultats parlent d'eux-mêmes. Mon fils a gagné en confiance et en autonomie grâce aux méthodes pédagogiques révolutionnaires.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
      achievement: "Fille boursière à Harvard"
    },
    {
      name: "Amina Khelil",
      role: "Ancienne élève",
      content: "Mes années au Lycée Asdrubal m'ont préparée parfaitement pour mes études supérieures. L'enseignement bilingue et les échanges internationaux ont été un vrai plus.",
      rating: 5,
      image: "/images/testimonial-3.jpg",
      achievement: "Ingénieure chez Google"
    }
  ];

  const achievements = [
    "🏆 École la plus innovante de Tunisie 2024",
    "🥇 Meilleur taux de réussite au Bac",
    "🌟 Certification internationale ISO 9001",
    "🎯 Partenaire officiel de 50+ universités mondiales",
    "💡 Labellisé 'École Numérique' par le Ministère",
    "🌍 Membre du réseau UNESCO"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Des Résultats qui Parlent
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">Nos Reconnaissances</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-lg font-medium">{achievement}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Ce Que Disent Nos Familles
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:scale-105 relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-blue-500/20 absolute top-6 right-6" />
                
                {/* Achievement badge */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                  {testimonial.achievement}
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">
              Rejoignez la Famille Asdrubal
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Plus de 1200 familles nous font confiance. Découvrez pourquoi nous sommes l'école privée #1 en Tunisie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Inscrire mon enfant
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105">
                Demander un entretien
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
