import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, PenTool, Ruler, Users } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="w-10 h-10 text-gold" />,
    title: 'Expert Craftsmanship',
    description: 'Our skilled tailors bring decades of experience to every garment, ensuring exceptional quality and attention to detail.'
  },
  {
    icon: <PenTool className="w-10 h-10 text-gold" />,
    title: 'Custom Designs',
    description: 'We work closely with clients to create bespoke designs that match their vision and requirements perfectly.'
  },
  {
    icon: <Ruler className="w-10 h-10 text-gold" />,
    title: 'Premium Materials',
    description: 'We source only the finest fabrics and materials from trusted suppliers around the world.'
  },
  {
    icon: <Users className="w-10 h-10 text-gold" />,
    title: 'Client-First Approach',
    description: 'Our business is built on relationships and we pride ourselves on exceptional service and client satisfaction.'
  }
];

const About = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading text-white mb-6">About Us</h2>
        <p className="text-light-blue/90 max-w-3xl mx-auto text-lg">
          At Shree Hari Creation, we've been crafting premium dresses since 2010. Our passion for fashion and commitment to quality has made us a trusted name in the industry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-md transition-all duration-500"
          >
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-light-blue/80">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 bg-navy/40 backdrop-blur-sm rounded-lg p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/4620621/pexels-photo-4620621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Workshop" 
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">Our Story</h3>
            <p className="text-light-blue/90 mb-4">
              Shree Hari Creation began as a small family workshop with a big dream: to create dresses that make people feel beautiful. Today, we've grown into a respected manufacturer supplying boutiques and retailers across the country.
            </p>
            <p className="text-light-blue/90">
              Despite our growth, we maintain the same dedication to craftsmanship and personal service that defined us from day one. Every dress that leaves our workshop represents our commitment to quality and beauty.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
