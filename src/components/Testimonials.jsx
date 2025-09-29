import React, { useState } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight, FiSun, FiZap, FiShield, FiHeart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mohamed Ali',
      role: 'Propriétaire de villa',
      content: "L'installation solaire de VagaSolar a réduit ma facture d'électricité de 70%. L'équipe était professionnelle et le service après-vente est excellent. Je recommande vivement!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Samira Ben Ammar',
      role: 'Directrice d\'usine',
      content: "Nous avons installé un système solaire 250kW dans notre usine. En un an, économies notables, retour rapide sur investissement et une équipe très compétente.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Karim Jlassi',
      role: 'Gérant d\'hôtel',
      content: "Solution parfaite pour notre hôtel en bord de mer. Malgré les conditions difficiles, les panneaux fonctionnent parfaitement. Service impeccable et installation rapide.",
      rating: 4,
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'Leila Trabelsi',
      role: 'Propriétaire agricole',
      content: "Grâce à VagaSolar, notre exploitation est maintenant énergétiquement autonome. L'installation a été rapide et le système nécessite très peu d'entretien.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants for testimonial transitions
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Solar background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-amber-400/10 via-yellow-500/5 to-transparent transform -skew-y-2 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-amber-400/8 to-transparent rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.span
            className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full text-sm font-semibold text-amber-700 dark:text-amber-400 border border-amber-400/30 tracking-wide shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.1)" }}
          >
            <FiHeart className="mr-2" />
            Témoignages
          </motion.span>
          <motion.h2
            className="mt-6 text-5xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ce que disent <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">nos clients</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Des centaines de clients satisfaits à travers la Tunisie partagent leur expérience avec VagaSolar.
          </motion.p>
        </div>

        <div className="mt-20 relative">
          <div className="max-w-5xl mx-auto">
             <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 relative border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
               {/* Decorative elements */}
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>
               <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full"></div>
               <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-yellow-500/10 to-amber-400/10 rounded-full"></div>

               <div className="mt-12">
                 <AnimatePresence custom={direction} mode="wait">
                   <motion.div
                     key={currentIndex}
                     custom={direction}
                     variants={variants}
                     initial="enter"
                     animate="center"
                     exit="exit"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     className="text-center"
                   >
                     <div className="flex justify-center mb-8">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FiStar
                            className={`w-7 h-7 ${i < testimonials[currentIndex].rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-gray-300 dark:text-gray-600'
                              }`}
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.p 
                      className="text-2xl md:text-3xl italic text-gray-800 dark:text-gray-200 leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.p>

                    <motion.div 
                      className="mt-12 flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-amber-400/30 shadow-xl ring-4 ring-amber-400/10">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-6 text-left">
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-amber-600 dark:text-amber-400 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <motion.button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 shadow-lg hover:shadow-xl transition-all border border-amber-400/30"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft size={28} />
            </motion.button>

            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`rounded-full transition-all ${index === currentIndex
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 w-8 h-3'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-amber-400 w-3 h-3'
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 shadow-lg hover:shadow-xl transition-all border border-amber-400/30"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight size={28} />
            </motion.button>
          </div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "500+", label: "Projets réalisés", icon: <FiSun /> },
            { value: "85%", label: "Économie moyenne", icon: <FiZap /> },
            { value: "25 ans", label: "Garantie produits", icon: <FiShield /> },
            { value: "98%", label: "Clients satisfaits", icon: <FiHeart /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 rounded-2xl shadow-xl p-6 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group"
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px -12px rgba(245, 158, 11, 0.25)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400/20 to-yellow-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-lg group-hover:shadow-xl transition-shadow">
                    <div className="scale-110">{stat.icon}</div>
                  </div>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;