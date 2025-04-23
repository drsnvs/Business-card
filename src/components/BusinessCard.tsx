import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const BusinessCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="business-card w-full max-w-4xl mx-auto rounded-xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Business Info */}
        <div className="p-8 md:p-12 bg-navy text-white flex flex-col justify-between flex-shrink-0 md:w-1/2">
          <div>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-serif font-bold mb-2"
            >
              Shree Hari Creation
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gold text-lg md:text-xl mb-6"
            >
              Premium Dress Manufacturer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-light-blue/90 mb-8"
            >
              Crafting exquisite dresses with precision and passion since 2010. We specialize in high-quality fabric selection, expert tailoring, and timeless designs.
            </motion.p>
          </div>
          
          <div className="mt-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-4 mb-4"
            >
              <a href="tel:+919727632511" className="flex items-center text-light-blue hover:text-gold transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 97276 32511</span>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-4 mb-4"
            >
              <a href="mailto:info@eleganceattire.com" className="flex items-center text-light-blue hover:text-gold transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                <span>jigar.owner@gmail.com</span>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-4"
            >
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-light-blue hover:text-gold transition-colors">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Fashion Street, Design District, CA 90210</span>
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Right Section - Photo */}
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Elegant dress being made" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="flex justify-end space-x-4">
              <a href="https://www.instagram.com/jigar_______.02/" className="text-white hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/sondagar.jigar.9" className="text-white hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessCard;