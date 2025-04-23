import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dresses = [
  {
    id: 1,
    title: 'Evening Elegance',
    image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Evening Wear'
  },
  {
    id: 2,
    title: 'Summer Collection',
    image: 'https://images.pexels.com/photos/7760792/pexels-photo-7760792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Casual'
  },
  {
    id: 3,
    title: 'Bridal Dream',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Wedding'
  },
  {
    id: 4,
    title: 'Business Chic',
    image: 'https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Business'
  },
  {
    id: 5,
    title: 'Gala Ready',
    image: 'https://i.pinimg.com/736x/e0/5f/84/e05f8410099f81eae1b5e6caf0d6a5c6.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Evening Wear'
  },
  {
    id: 6,
    title: 'Bohemian Spirit',
    image: 'https://images.pexels.com/photos/4937144/pexels-photo-4937144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Casual'
  }
];

const Collection = () => {
  // Explicitly define that selectedImage can be a string or null
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading text-white">Our Collection</h2>
        <p className="text-light-blue/90 max-w-3xl mx-auto text-lg">
          Discover our latest designs, crafted with care and attention to detail. Each piece represents our commitment to quality and style.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dresses.map((dress, index) => (
          <motion.div 
            key={dress.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg overflow-hidden border border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-md transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedImage(dress.image)} // ✅ This works now
          >
            <div className="relative h-[400px] w-full">
              <img 
                src={dress.image} 
                alt={dress.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-gold text-sm font-medium mb-1">{dress.category}</span>
                <h3 className="text-white text-xl font-serif font-bold">{dress.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img 
              src={selectedImage} 
              alt="Enlarged Dress" 
              className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <a 
          href="#contact" 
          className="inline-block bg-gold text-navy font-medium px-8 py-3 rounded-full hover:bg-gold/90 transition-colors"
        >
          Request Custom Design
        </a>
      </motion.div>
    </div>
  );
};

export default Collection;
