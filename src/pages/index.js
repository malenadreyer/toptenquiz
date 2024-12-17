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
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        {/* Velkommen-tekst */}
        <h1 className="text-4xl font-bold opacity-0 animate-fade-in mb-6">
          Velkommen til Top 10 Quiz af 2024
        </h1>

        {/* Regler */}
        {showRules && (
          <div className="opacity-0 animate-fade-in-slow mb-6">
            <h2 className="text-2xl font-semibold mb-4">Regler:</h2>
            <ul className="text-lg">
              <li>Regler er så ledes, den med flest point vinder</li>
              <li>Hve runde kommer der en liste over f.eks top 10 rigeste lande</li>
              <li>Denne liste er fundet af data fra internettet.</li>
              <li>Hvis du f.eks sagde Kina, ville du få 2 point, men hvis du sagde Sydkorea ville du få 10 point!</li>
              <li>Det gælder om at ramme nr 10 på listen. Dog er det altid smart at sige et sikkert svar</li>
              <li>Fordi hvis du ikke rammer nogle på listen, er der ingen point til dit hold</li>
            </ul>
          </div>
        )}

        {/* Start spil-knap */}
        {showRules && (
          <Link href="/quiz">
            <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition duration-300">
              Start Spil
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
