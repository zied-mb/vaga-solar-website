import React, { useState } from 'react';
import { FiCheck, FiUsers, FiAward, FiShield, FiZap, FiSun, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { 
      icon: <FiCheck size={24} />, 
      title: 'Qualité Premium', 
      description: 'Matériaux de première qualité certifiés Tier 1 avec garantie de performance' 
    },
    { 
      icon: <FiUsers size={24} />, 
      title: 'Équipe Certifiée', 
      description: 'Ingénieurs et techniciens certifiés avec 10+ ans d\'expérience' 
    },
    { 
      icon: <FiAward size={24} />, 
      title: 'Certifications', 
      description: 'Certifiés par les leaders mondiaux du solaire (REC, SunPower)' 
    },
    { 
      icon: <FiShield size={24} />, 
      title: 'Garantie Étendue', 
      description: 'Jusqu\'à 30 ans de garantie produit et 25 ans sur les performances' 
    }
  ];

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 transform -skew-y-6 -translate-y-24"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-yellow-500/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-yellow-400/5 to-yellow-500/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/30 rounded-full dark:bg-yellow-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full text-sm font-semibold text-yellow-700 dark:text-yellow-400 border border-yellow-400/20 tracking-wide"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(234, 179, 8, 0.1)" }}
          >
            <FiSun className="mr-2" />
            NOTRE EXPERTISE
          </motion.span>
          
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Photovoltaïques</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            VagaSolar transforme l'énergie solaire en solutions concrètes depuis 2008. Notre expertise technique et notre engagement durable font de nous le partenaire idéal pour votre transition énergétique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Visual element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Glass morphism container */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
              {/* Solar panel grid with 3D effect */}
              <div className="grid grid-cols-4 grid-rows-3 gap-4 perspective-1000">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-300 dark:border-gray-700/50 flex items-center justify-center relative overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
                    whileHover={{ y: -5, rotateX: 5, rotateY: 5 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Animated sun */}
              <motion.div 
                className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg shadow-yellow-400/20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiSun className="text-white text-4xl" />
              </motion.div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-2xl p-5 w-64 border border-yellow-400/30 backdrop-blur-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <FiTrendingUp className="text-white w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold">15+ ANS</p>
                    <p className="text-yellow-100 text-sm">D'EXPERTISE SOLAIRE</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Stats badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-4 w-60 border border-gray-200 dark:border-white/10"
                initial={{ opacity: 0, y: 20, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 dark:bg-yellow-500/20 p-2 rounded-lg">
                    <FiZap className="text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300 text-sm">INSTALLATIONS RÉALISÉES</p>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">850+</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Features grid */}
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:border-yellow-500/30 transition-all transform hover:-translate-y-1"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(234, 179, 8, 0.15)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors tracking-wide">{feature.title}</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
{/* Partner section */}
<motion.div 
  className="mt-12 bg-yellow-100 dark:bg-yellow-500/10 backdrop-blur-md rounded-2xl p-6 border border-yellow-200 dark:border-yellow-500/20"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
>
  <div className="flex items-center">
    <div className="relative">
  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
    <img 
      src="/Partenaire.jpg" 
      alt="Zied Meddeb" 
      className="w-full h-full object-cover"
    />
  </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-sm">
        <FiSun className="text-yellow-600 w-3 h-3" />
      </div>
    </div>
    <div className="ml-5">
      <p className="font-bold text-gray-900 dark:text-white text-lg">ZIED MEDDEB</p>
      <p className="text-yellow-600 dark:text-yellow-400">Partenaire Officiel</p>
      <p className="text-gray-600 dark:text-gray-300 text-[13px] mt-2 italic leading-snug">
        "Accompagner nos clients vers une transition énergétique durable"
      </p>
    </div>
  </div>
</motion.div>
            
            {/* CTA buttons */}
<div className="mt-8 flex justify-center">
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250,204,21,0.5)" }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const element = document.getElementById('projects');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }}
    className="px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium shadow-md transition-all"
  >
    NOS RÉALISATIONS
  </motion.button>
</div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { value: "25 MWc", label: "Capacité installée", icon: <FiZap /> },
            { value: "98%", label: "Clients satisfaits", icon: <FiSun /> },
            { value: "30+", label: "Techniciens experts", icon: <FiUsers /> },
            { value: "70%", label: "Économies moyennes", icon: <FiTrendingUp /> }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-gray-200 dark:border-white/10 group hover:border-yellow-500/30 transition-all transform hover:-translate-y-2"
              whileHover={{ y: -8, boxShadow: "0 25px 40px -15px rgba(234, 179, 8, 0.15)" }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform mb-5">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="mt-14 bg-gradient-to-r from-yellow-100 to-yellow-100 dark:from-yellow-500/10 dark:to-yellow-600/10 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-yellow-200 dark:border-yellow-500/20 overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background pattern */}
<div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-yellow-400/5 to-yellow-500/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

<div className="max-w-4xl mx-auto text-center relative z-10">
  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
    Prêt à passer à l'énergie solaire?
  </h3>
  <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
    Rejoignez les centaines de clients satisfaits et commencez à économiser sur vos factures d'électricité dès aujourd'hui.
  </p>
  <div className="mt-10 flex justify-center">
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(234, 179, 8, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }}
      className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all tracking-wide"
    >
      DEMANDER UN DEVIS GRATUIT
    </motion.button>
  </div>
</div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {playVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setPlayVideo(false)}>
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-3xl p-5 max-w-4xl w-full shadow-2xl border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
              {/* Video player would go here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-900 dark:text-white text-xl">Video presentation would play here</p>
              </div>
            </div>
            <button className="mt-5 text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setPlayVideo(false)}>
              FERMER
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;