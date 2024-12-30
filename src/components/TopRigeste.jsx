"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TopRigeste = () => {
    const [showList, setShowList] = useState(false);

    const top10Rigeste = [
      "1. Familen Lego - 368.1 miliarder formue",
      "2. Familien Bestseller - 85.9 miliarder formue",
      "3. Familien Danfoss - 84.7 miliarder formue",
      "4. Familien Coloplast - 74.7 miliarder formue",
      "5. Familien Jysk - 43.6 miliarder formue",
      "6. Familien Selfinvest - 43.5 miliarder formue",
      "7. Familien Ecco - 24.4 miliarder formue",
      "8. Familien Aage Kjær Maskinfabrik - 18.0 miliarder formue",
      "9. Familien KEA Holding(vindmøller) - 17 miliarder formue",
      "10. Familien A.P Møller Mærsk - 16.4 miliarder formue",
    ];
  
    // Animation for venstre kolonne (1-5)
    const leftAnimation = {
      hidden: { opacity: 0, x: -100 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: (i - 1) * 2 + 1.5},
      }),
    };
  
    // Animation for højre kolonne (6-10), starter efter venstre kolonne er færdig
    const rightAnimation = {
      hidden: { opacity: 0, x: 100 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: (i - 1) * 2 + 1.5 }, // Ekstra delay for højre kolonne
      }),
    };
    const headerAnimation = {
      hidden: { y: 250 }, // Starter i center
      visible: { y: -10, transition: { duration: 0.8, ease: "easeInOut" } }, // Glider op
    };
    return (
      <div className="grid w-[1000px] m-auto items-center justify-items-center ">
          
          <motion.h1
          initial="hidden"
          animate={showList ? "visible" : "hidden"}
          variants={headerAnimation}
          className="text-3xl text-white z-10 text-center font-bold mb-4"
        >
          Top 10 mest rigeste dansker(I dette tilfælde, hvad deres firma hedder)
        </motion.h1>
  
      
        <button
    onClick={() => setShowList(true)}
    className="relative px-6 py-2 m-auto border border-white text-white rounded-lg overflow-hidden transition duration-300 group">
    {/* GIF som baggrund */}
    <span 
      className="absolute inset-0 bg-center bg-cover animate-glimmer opacity-70 group-hover:opacity-90" 
      style={{ backgroundImage: "url('/gifs.gif')" }}>
    </span>
    
    {/* Hvid overlay ved hover */}
    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
    
    {/* Tekst */}
    <span className="relative z-10">Vis svar</span>
  </button>
     
        {/* Grid-layout for to kolonner */}
        {showList && (
          <div className="grid grid-cols-2 gap-5 w-full m-auto ">
            {/* Venstre kolonne: 1-5 */}
            <ul>
              {top10Rigeste.slice(0, 5).map((film, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={leftAnimation}
                  className="pt-5 text-xl text-white font-bold "
                >
                  {film}
                </motion.li>
              ))}
            </ul>
  
            {/* Højre kolonne: 6-10 */}
            <ul>
              {top10Rigeste.slice(5).map((film, index) => (
                <motion.li
                  key={index + 5}
                  custom={index + 5}
                  initial="hidden"
                  animate="visible"
                  variants={rightAnimation}
                  className="pt-5 font-bold text-white text-xl"
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
  export default TopRigeste;