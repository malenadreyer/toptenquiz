"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    // Vis reglerne efter 2 sekunder
    const timer = setTimeout(() => {
      setShowRules(true);
    }, 2000);
    return () => clearTimeout(timer); // Ryd op efter timeout
  }, []);

  return (
    <div className="relative h-screen text-white">
      {/* Baggrundsvideo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/3550818-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay-indhold */}
      <div className="relative flex pt-36 justify-center h-screen z-10 bg-opacity-50">
        <div className="text-center">
          {/* Velkommen-tekst */}
          <h1 className="text-4xl font-bold opacity-0 animate-fade-in">
            Velkommen til Top 10 Quiz af 2024
          </h1>

          {/* Regler */}
          {showRules && (
            <div className="opacity-0 animate-fade-in-slow mt-6">
              <h2 className="text-2xl font-semibold mb-4">Regler:</h2>
              <ul className="text-lg">
                <li>Regler er så ledes, den med flest point vinder</li>
                <li>
                  Hver runde kommer der en liste over f.eks top 10 rigeste lande
                </li>
                <li>Denne liste er fundet af data fra internettet.</li>
                <li>
                  Hvis du f.eks sagde Kina, ville du få 2 point, men hvis du
                  sagde Sydkorea ville du få 10 point!
                </li>
                <li>
                  Det gælder om at ramme nr 10 på listen. Dog er det altid smart
                  at sige et sikkert svar
                </li>
                <li>
                  Fordi hvis du ikke rammer nogle på listen, er der ingen point
                  til dit hold
                </li>
              </ul>
            </div>
          )}

          <Link href="/quiz">
            <button className="relative px-6 py-2 mt-20 m-auto border border-white text-white rounded-lg overflow-hidden transition duration-300 group">
              {/* GIF som baggrund */}
              <span
                className="absolute inset-0 bg-center bg-cover animate-glimmer opacity-70 group-hover:opacity-90"
                style={{ backgroundImage: "url('/gifs.gif')" }}
              ></span>

              {/* Hvid overlay ved hover */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>

              {/* Tekst */}
              <span className="relative z-10">Start quiz!</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
