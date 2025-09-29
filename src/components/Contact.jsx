import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSun, FiSend, FiClock, FiFacebook, } from 'react-icons/fi';
import { motion } from 'framer-motion';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Formulaire soumis avec succès ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Solar background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-amber-400/15 via-yellow-500/10 to-transparent transform -skew-y-2 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-amber-400/8 to-transparent rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-gradient-to-l from-yellow-400/5 to-transparent rounded-full transform translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.span
            className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full text-sm font-semibold text-amber-700 dark:text-amber-400 border border-amber-400/30 tracking-wide shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.1)" }}
          >
            <FiMail className="mr-2" />
            Contactez-nous
          </motion.span>
          <motion.h2
            className="mt-6 text-5xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Discutons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">projet solaire</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre transition énergétique.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 h-full border border-amber-100/50 dark:border-amber-900/30 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Nos coordonnées</h3>

              <div className="space-y-8">
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiMapPin size={22} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Adresse</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
                      Tunis, Tunisie
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiMail size={22} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
                      contact@vagasolar.tn
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiPhone size={22} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Téléphone</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
                      +216 40 018 523
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiClock size={22} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Horaires</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
                      Lun-Ven: 8h-18h<br />
                      Sam: 8h-13h
                    </p>
                  </div>
                </motion.div>
              </div>

<div className="mt-10 pt-8 border-t border-amber-100 dark:border-amber-900/30"> 
  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Suivez-nous</h4>
  <div className="flex space-x-4">
    <motion.a
      href="https://www.facebook.com/Vaga.Solar.Tunisie/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center text-xl shadow-lg"
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(245, 158, 11, 0.3)', boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)" }}
      whileTap={{ scale: 0.95 }}
    >
      <FiFacebook />
    </motion.a>
  </div>
</div>

            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 h-full border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full"></div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Envoyez-nous un message</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all shadow-sm hover:shadow-md focus:shadow-lg resize-none"
                    placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex justify-center items-center px-8 py-5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white font-semibold rounded-2xl transition-all shadow-xl hover:shadow-2xl text-lg"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer le message
                  <FiSend className="ml-3" size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional info section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-3xl p-10 border border-amber-100/50 dark:border-amber-900/30 relative overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>
          <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-yellow-500/10 to-amber-400/10 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <FiClock size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Réponse rapide</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Nous répondons à toutes les demandes dans un délai de 24 heures</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <FiSun size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Devis gratuit</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Évaluation sans engagement de votre projet solaire</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <FiSend size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Accompagnement</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Suivi personnalisé tout au long de votre projet</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;