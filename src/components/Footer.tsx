import React from 'react';
import { Instagram, Facebook, Twitter, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Scissors className="w-10 h-10 text-gold mb-3" />
          <h3 className="text-2xl font-serif font-bold text-white">Shree Hari Creation</h3>
          <p className="text-light-blue/80 mt-2">Jigar Sondagar</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/jigar_______.02/" className="text-light-blue hover:text-gold transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/sondagar.jigar.9" className="text-light-blue hover:text-gold transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          {/* <a href="#" className="text-light-blue hover:text-gold transition-colors">
            <Twitter className="w-6 h-6" />
          </a> */}
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-center">
          <a href="#home" className="text-light-blue hover:text-gold transition-colors">Home</a>
          <a href="#about" className="text-light-blue hover:text-gold transition-colors">About</a>
          <a href="#collection" className="text-light-blue hover:text-gold transition-colors">Collection</a>
          <a href="#contact" className="text-light-blue hover:text-gold transition-colors">Contact</a>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-light-blue/60 text-sm">
            &copy; {new Date().getFullYear()} Shree Hari Creation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;