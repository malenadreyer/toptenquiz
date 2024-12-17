"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TopFilm = () => {
  const [showList, setShowList] = useState(false);

  const top10Films = [
    "1. Inside Out - 652 million dollars",
    "2. DeadPool & Wolverine - 636 million dollars",
    "3. Despicale me 4 - 361 million dollars",
    "4. Wicked - 359 million dollars",
    "5. Moana 2 - 337 million dollars",
    "6. Beetle Juice Beetle Juice - 294 million dollars",
    "7. Dune Part Two - 282,1 million dollars",
    "8. Twisters -  267,2 million dollars",
    "9. GodZilla x Kong - 195,8 million dollars",
    "10. Kung Fu Panda 4 - 193 million dollars",
  ];

  // Animation for venstre kolonne (1-5)
  const leftAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: (i - 1) * 0.8 + 1.5},
    }),
  };

  // Animation for højre kolonne (6-10), starter efter venstre kolonne er færdig
  const rightAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: (i - 1) * 0.8 + 1.5 }, // Ekstra delay for højre kolonne
    }),
  };
  const headerAnimation = {
    hidden: { y: 200 }, // Starter i center
    visible: { y: -50, transition: { duration: 0.8, ease: "easeInOut" } }, // Glider op
  };
  return (
    <div className="grid w-[1000px] m-auto items-center justify-items-center ">
        
        <motion.h1
        initial="hidden"
        animate={showList ? "visible" : "hidden"}
        variants={headerAnimation}
        className="text-3xl z-10 text-center font-bold mb-4"
      >
        Top 10 film i 2024 (ud fra boxoffice)
      </motion.h1>

    
      <button
        onClick={() => setShowList(true)}
        className="px-6 py-2 m-auto bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Vis svar
      </button>
   
      {/* Grid-layout for to kolonner */}
      {showList && (
        <div className="grid grid-cols-2 gap-8 w-full m-auto ">
          {/* Venstre kolonne: 1-5 */}
          <ul>
            {top10Films.slice(0, 5).map((film, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={leftAnimation}
                className="py-4 text-2xl font-bold "
              >
                {film}
              </motion.li>
            ))}
          </ul>

          {/* Højre kolonne: 6-10 */}
          <ul>
            {top10Films.slice(5).map((film, index) => (
              <motion.li
                key={index + 5}
                custom={index + 5}
                initial="hidden"
                animate="visible"
                variants={rightAnimation}
                className="py-4 font-bold text-2xl"
              >
                {film}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopFilm;
