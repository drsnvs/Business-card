import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const words = ["Jigar", "-Sondagar"]; // Words to animate

  // Subtle color combinations for each word
  const colorCombos = [
    ['#6C8EAD', '#A1C6EA', '#C8D9F1', '#B3D0E6', '#A6B9D6'], // Muted blue tones for "Jigar"
    ['#7D8C7D', '#A4B2A4', '#BCCBB8', '#D2D8D2', '#B0C0B0'], // Muted green tones for "Sondagar"
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-center"
      >
        <motion.h2 className="text-4xl md:text-5xl font-semibold text-white">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6 + index * 0.6, // Stagger delay between each word
                duration: 1,
              }}
              className="inline-block"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: letterIndex * 0.3, // Delay for each letter to fade in
                    duration: 0.6,
                  }}
                  className="inline-block"
                  style={{
                    color: colorCombos[index][letterIndex % colorCombos[index].length], // Assign each letter a color from the combo
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              {" "} {/* Space between words */}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Loader;
