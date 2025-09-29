import React, { useState } from 'react';
import { FiHome, FiBriefcase, FiBatteryCharging, FiTool, FiZap, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SolarPanel from './SolarPanel'; // Custom SVG component

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 'residential',
      icon: <FiHome size={36} />,
      title: 'Installation Résidentielle',
      description: 'Solutions solaires sur mesure pour maisons et appartements avec intégration architecturale parfaite.',
      features: [
        'Toitures et façades solaires',
        'Systèmes intégrés au bâti',
        'Optimisation pour autoconsommation',
        'Monitoring intelligent'
      ],
      stats: ['Jusqu\'à 70% d\'économies', 'ROI en 6-8 ans', 'Garantie 25 ans']
    },
    {
      id: 'industrial',
      icon: <FiBriefcase size={36} />,
      title: 'Solutions Industrielles',
      description: 'Centrales solaires pour entreprises avec solutions clés en main pour réduire vos coûts énergétiques.',
      features: [
        'Centrales au sol et ombrières',
        'Solutions pour grandes surfaces',
        'Audit énergétique complet',
        'Contrats de performance'
      ],
      stats: ['Réduction CO₂ jusqu\'à 80%', 'Temps de retour <5 ans', 'Maintenance incluse']
    },
    {
      id: 'storage',
      icon: <FiBatteryCharging size={36} />,
      title: 'Stockage Intelligent',
      description: 'Systèmes de stockage haute performance pour maximiser votre indépendance énergétique.',
      features: [
        'Batteries lithium-ion',
        'Gestion intelligente de l\'énergie',
        'Backup de secours',
        'Intégration véhicule électrique'
      ],
      stats: ['Autonomie jusqu\'à 72h', 'Durée de vie 10+ ans', '90% d\'autoconsommation']
    },
    {
      id: 'maintenance',
      icon: <FiTool size={36} />,
      title: 'Maintenance Premium',
      description: 'Services sur mesure pour garantir les performances optimales de votre installation solaire.',
      features: [
        'Nettoyage automatique des panneaux',
        'Surveillance 24/7',
        'Contrats de maintenance',
        'Assistance technique rapide'
      ],
      stats: ['99% de disponibilité', 'Intervention sous 24h', 'Rapports de performance']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 120,
        damping: 15
      } 
    }
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Solar flare background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] max-w-[2000px] h-[800px] bg-radial-gradient(ellipse_at_center, rgba(234,179,8,0.05) 0%, rgba(0,0,0,0) 70%)"></div>
      
      {/* Floating solar elements */}
      <div className="absolute top-20 right-5 w-24 h-24 opacity-5">
        <SolarPanel />
      </div>
      <div className="absolute bottom-1/4 left-10 w-20 h-20 opacity-5">
        <SolarPanel />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm rounded-full border border-yellow-500/20"
            whileHover={{ scale: 1.05 }}
          >
            <FiSun className="text-yellow-500 mr-2" />
            <span className="text-yellow-700 dark:text-yellow-400 font-medium">Expertise Solaire</span>
          </motion.div>
          <h2 className="mt-8 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Énergétiques</span> Complètes
          </h2>
          <p className="mt-5 text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            Des services photovoltaïques haut de gamme pour maximiser votre indépendance énergétique et vos économies.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardItem}
              className={`relative h-full rounded-3xl overflow-hidden group ${
                activeService === service.id ? 'shadow-2xl' : 'shadow-xl'
              }`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 z-0"></div>
              
              {/* Solar panel effect */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-4 gap-1 w-full h-full">
                  {[...Array(32)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-sm"
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Animated sun */}
              {activeService === service.id && (
                <motion.div 
                  className="absolute -top-20 -right-20 w-60 h-60 bg-radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(0,0,0,0) 70%) rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="p-8 flex-1">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white shadow-lg">
                      {service.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                      <p className="mt-3 text-gray-700 dark:text-gray-300">{service.description}</p>
                      
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 bg-green-100 dark:bg-green-900/30 w-5 h-5 rounded-full flex items-center justify-center">
                              <FiZap className="text-green-600 dark:text-green-400 w-3 h-3" />
                            </div>
                            <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats bar */}
                  <div className="mt-8 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-700/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                    <div className="flex flex-wrap gap-3">
                      {service.stats.map((stat, i) => (
                        <div 
                          key={i} 
                          className="px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-full text-sm font-medium text-yellow-700 dark:text-yellow-400"
                        >
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
<div className="mt-12 flex justify-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const button = document.getElementById("contact-btn");
      if (button) {
        // Glow + Pulse أطول
        button.animate(
          [
            { boxShadow: "0 0 0px rgba(234,179,8, 0)", transform: "scale(1)" },
            { boxShadow: "0 0 30px rgba(234,179,8, 0.9)", transform: "scale(1.12)" },
            { boxShadow: "0 0 50px rgba(234,179,8, 1)", transform: "scale(1.2)" },
            { boxShadow: "0 0 30px rgba(234,179,8, 0.9)", transform: "scale(1.1)" },
            { boxShadow: "0 0 40px rgba(234,179,8, 0.7)", transform: "scale(1.15)" },
            { boxShadow: "0 0 0px rgba(234,179,8, 0)", transform: "scale(1)" }
          ],
          { duration: 1200, easing: "ease-in-out" }
        );
      }
      // بعد glow يهبط للـcontact
      setTimeout(() => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      }, 1200);
    }}
    id="contact-btn"
    className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium shadow-lg transition-all"
  >
    Contactez-nous
  </motion.button>
</div>

        {/* Stats section */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "850+", label: "Projets réalisés", icon: <FiHome /> },
            { value: "25 MWc", label: "Capacité installée", icon: <FiZap /> },
            { value: "98%", label: "Clients satisfaits", icon: <FiSun /> },
            { value: "70%", label: "Économies moyennes", icon: <FiBatteryCharging /> }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-white/80 to-white/50 dark:from-gray-800/80 dark:to-gray-900/50 rounded-2xl shadow-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;