// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const dresses = [
//   {
//     id: 1,
//     title: 'Evening Elegance',
//     image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Evening Wear'
//   },
//   {
//     id: 2,
//     title: 'Summer Collection',
//     image: 'https://images.pexels.com/photos/7760792/pexels-photo-7760792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Casual'
//   },
//   {
//     id: 3,
//     title: 'Bridal Dream',
//     image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Wedding'
//   },
//   {
//     id: 4,
//     title: 'Business Chic',
//     image: 'https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Business'
//   },
//   {
//     id: 5,
//     title: 'Gala Ready',
//     image: 'https://i.pinimg.com/736x/e0/5f/84/e05f8410099f81eae1b5e6caf0d6a5c6.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Evening Wear'
//   },
//   {
//     id: 6,
//     title: 'Bohemian Spirit',
//     image: 'https://images.pexels.com/photos/4937144/pexels-photo-4937144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Casual'
//   }
// ];

// const Collection = () => {
//   // Explicitly define that selectedImage can be a string or null
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const closeModal = () => setSelectedImage(null);

//   return (
//     <div className="container mx-auto">
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="section-heading text-white">Our Collection</h2>
//         <p className="text-light-blue/90 max-w-3xl mx-auto text-lg">
//           Discover our latest designs, crafted with care and attention to detail. Each piece represents our commitment to quality and style.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {dresses.map((dress, index) => (
//           <motion.div 
//             key={dress.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="rounded-lg overflow-hidden border border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-md transition-all duration-500 cursor-pointer"
//             onClick={() => setSelectedImage(dress.image)} // ✅ This works now
//           >
//             <div className="relative h-[400px] w-full">
//               <img 
//                 src={dress.image} 
//                 alt={dress.title} 
//                 className="w-full h-full object-cover object-top"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
//                 <span className="text-gold text-sm font-medium mb-1">{dress.category}</span>
//                 <h3 className="text-white text-xl font-serif font-bold">{dress.title}</h3>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Image Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div 
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
//             onClick={closeModal}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.img 
//               src={selectedImage} 
//               alt="Enlarged Dress" 
//               className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="mt-12 text-center"
//       >
//         <a 
//           href="#contact" 
//           className="inline-block bg-gold text-navy font-medium px-8 py-3 rounded-full hover:bg-gold/90 transition-colors"
//         >
//           Request Custom Design
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default Collection;
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface Dress {
//   id: string;
//   title: string;
//   image: string;
//   category: string;
// }

// const Collection = () => {
//   const [dresses, setDresses] = useState<Dress[]>([]);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
//   const folderName = import.meta.env.VITE_CLOUDINARY_FOLDER || 'dresses';

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/${folderName}.json`);
//         const data = await res.json();

//         const formattedDresses = data.resources.map((item: any) => ({
//           id: item.public_id,
//           title: item.public_id.split('/').pop().replace(/_/g, ' '), // Create title from filename
//           image: `https://res.cloudinary.com/${cloudName}/image/upload/${item.public_id}.jpg`,
//           category: 'Category', // You can customize this based on naming
//         }));

//         setDresses(formattedDresses);
//       } catch (error) {
//         console.error('Failed to fetch images:', error);
//       }
//     };

//     fetchImages();
//   }, [cloudName, folderName]);

//   const closeModal = () => setSelectedImage(null);

//   return (
//     <div className="container mx-auto">
//       {/* (same as your UI code, just map over dynamic `dresses`) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {dresses.map((dress, index) => (
//           <motion.div 
//             key={dress.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="rounded-lg overflow-hidden border border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-md transition-all duration-500 cursor-pointer"
//             onClick={() => setSelectedImage(dress.image)}
//           >
//             <div className="relative h-[400px] w-full">
//               <img 
//                 src={dress.image} 
//                 alt={dress.title} 
//                 className="w-full h-full object-cover object-top"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
//                 <span className="text-gold text-sm font-medium mb-1">{dress.category}</span>
//                 <h3 className="text-white text-xl font-serif font-bold">{dress.title}</h3>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Image Modal and Button Same as Your Code */}
//     </div>
//   );
// };

// export default Collection;
import React, { useState, useEffect } from 'react';

interface Dress {
  id: string;
  title: string;
  image: string;
  category: string;
}

const Collection = () => {
  const [dresses, setDresses] = useState<Dress[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images', {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });

        const data = await response.json();

        if (Array.isArray(data)) {
          setDresses(data);
        } else {
          console.error('Invalid response structure:', data);
        }
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, []);

  const closeModal = () => setSelectedImage(null);

  // Function to optimize the image URL for better performance
  const getOptimizedImageUrl = (imageUrl: string) => {
    return imageUrl.replace('/upload/', '/upload/w_auto,q_auto/');
  };

  const getImageName = (imageUrl: string) => {
    const imageParts = imageUrl.split('/');
    return imageParts[imageParts.length - 1];
  };

  return (
    <div className="container mx-auto py-8">
      {dresses.length === 0 ? (
        <p>Loading images...</p>
      ) : (
        <div
          className={`${dresses.length > 9 ? 'max-h-[80vh] overflow-y-auto pr-2' : ''}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dresses.map((dress) => (
              <div
                key={dress.id}
                className="rounded-lg overflow-hidden border border-transparent hover:border-yellow-400 hover:shadow-yellow-400/30 hover:shadow-md transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(dress.image)}
              >
                <div className="relative h-[400px] w-full">
                  <img
                    src={getOptimizedImageUrl(dress.image)} // Optimized URL
                    alt={dress.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy" // Lazy load
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-gold text-sm font-medium mb-1">{dress.category}</span>
                    <h3 className="text-white text-xl font-serif font-bold">{dress.title}</h3>
                    <p className="text-white text-sm">{getImageName(dress.image)}</p> {/* Displaying only image name */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal Section */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-4 animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent click on image from closing modal
          >
            <img
              src={getOptimizedImageUrl(selectedImage)} // Optimized URL
              alt="Selected"
              className="object-contain max-w-[90vw] max-h-[90vh]"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
