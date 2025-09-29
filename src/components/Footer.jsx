import React from 'react';
import { FiFacebook, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo + About */}
          <div>
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Vaga Solar Logo" 
                className="w-12 h-12 object-contain" 
              />
              <span className="ml-3 text-xl font-bold text-white">
                Vaga<span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Solar</span>
              </span>
            </div>
            <p className="mt-6 text-gray-400">
              Solutions solaires innovantes pour un avenir énergétique durable en Tunisie.
            </p>
<div className="mt-6 flex space-x-4">
  <a
    href="https://www.facebook.com/Vaga.Solar.Tunisie/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-gray-400 hover:text-yellow-500 transition-colors"
  >
    <FiFacebook size={20} />
  </a>
</div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors">À propos</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-yellow-500 transition-colors">Projets</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-500 transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Nos services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Installation Résidentielle</span></li>
              <li><span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Solutions Industrielles</span></li>
              <li><span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Systèmes de Stockage</span></li>
              <li><span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Maintenance & Support</span></li>
              <li><span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Audit Énergétique</span></li>
              <li><span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Financement Solaire</span></li>
            </ul>
          </div>
          
          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <FiMapPin className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                <span className="text-gray-400">Tunis, Tunisie</span>
              </li>
              <li className="flex">
                <FiPhone className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                <span className="text-gray-400">+216 40 018 523</span>
              </li>
              <li className="flex">
                <FiMail className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                <span className="text-gray-400">contact@vagasolar.tn</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-4 py-2 rounded-r-lg transition-all duration-300">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} VagaSolar. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;