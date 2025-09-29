// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiCheck, FiSun, FiBarChart2, FiShield, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ButtonSimulateur from './ButtonSimulateur';

const stats = [
  { value: "70%", label: "Économies d'énergie", icon: <FiBarChart2 /> },
  { value: "25 ans", label: "Garantie produit", icon: <FiShield /> },
  { value: "4.8/5", label: "Satisfaction client", icon: <FiSun /> }
];

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background & sun rays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              width: `${100 + i * 5}%`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        ))}

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Floating solar panels */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gray-800 rounded-lg shadow-xl transform rotate-12 opacity-10 dark:opacity-5"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-40 left-24 w-24 h-24 bg-gray-800 rounded-lg shadow-xl transform -rotate-6 opacity-10 dark:opacity-5"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            {/* Solar badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm rounded-full mb-6 border border-yellow-400/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mr-2 p-1 bg-yellow-500 rounded-full">
                <FiSun className="text-white w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">
                Solution énergétique durable
              </p>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Énergie solaire
              </span> pour votre indépendance énergétique
            </h1>

            <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              Solutions photovoltaïques haut de gamme pour particuliers et entreprises. Réduisez vos factures tout en contribuant à un avenir plus vert.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Installation professionnelle certifiée",
                "Financement et aides de l'État",
                "Suivi de production en temps réel",
                "Maintenance et garantie incluses"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-green-100 dark:bg-green-900/30 w-6 h-6 rounded-full flex items-center justify-center">
                    <FiCheck className="text-green-600 dark:text-green-400 w-3 h-3" />
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
<motion.button
  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.3)" }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-xl transition-all flex items-center justify-center group"
  onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // adjust offset if needed
        behavior: "smooth"
      });
    }
  }}
>
  <span>Devis gratuit en 24h</span>
  <motion.span
    className="ml-2"
    animate={{ x: [0, 4, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  >
    <FiArrowRight />
  </motion.span>
</motion.button>

              {/* Simulateur button */}
              <ButtonSimulateur />
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {/* Solar panel grid */}
            <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden transform rotate-3">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1.5 p-3">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-600/5"></div>
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full opacity-80"></div>
                  </motion.div>
                ))}
              </div>

              {/* Sun graphic */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg shadow-yellow-400/30"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 30px rgba(234, 179, 8, 0.3)",
                    "0 0 50px rgba(234, 179, 8, 0.5)",
                    "0 0 30px rgba(234, 179, 8, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Stats panel */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-72 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-xl">
                    {stats[currentStat].icon}
                  </div>
                  <div className="ml-4">
                    <motion.p key={currentStat} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats[currentStat].value}
                    </motion.p>
                    <motion.p key={currentStat + 'label'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-600 dark:text-gray-400">
                      {stats[currentStat].label}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Energy production card */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 w-64 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center mb-2">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <FiZap className="text-green-600 dark:text-green-400" />
                </div>
                <p className="ml-3 text-gray-500 dark:text-gray-400 text-sm">Production énergétique</p>
              </div>
              <div className="flex items-end space-x-1 h-12 mb-2">
                <div className="w-3 bg-gradient-to-t from-green-400 to-green-600 rounded-t h-4"></div>
                <div className="w-3 bg-gradient-to-t from-green-400 to-green-600 rounded-t h-8"></div>
                <div className="w-3 bg-gradient-to-t from-green-400 to-green-600 rounded-t h-6"></div>
                <div className="w-3 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t h-10"></div>
                <div className="w-3 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t h-12"></div>
                <div className="w-3 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t h-9"></div>
                <div className="w-3 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t h-11"></div>
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                <span className="text-green-600">+42%</span> ce mois-ci
              </p>
            </motion.div>

            {/* CO2 Savings card */}
            <motion.div
              className="absolute bottom-16 left-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl shadow-lg p-5 w-56 backdrop-blur-sm"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-sm mb-1">Réduction CO₂</p>
              <p className="text-2xl font-bold">3.2T</p>
              <p className="text-xs opacity-80 mt-1">Équivalent annuel</p>
              <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
