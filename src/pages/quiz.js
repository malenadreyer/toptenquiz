"use client";
import TopFilm from "@/components/TopFilm";
import TopGoogle from "@/components/TopGoogle";
import TopHadet from "@/components/TopHadet";
import TopHjemmeside from "@/components/TopHjemmeside";
import TopJule from "@/components/TopJule";
import TopPodcast from "@/components/TopPodcast";
import TopRigeste from "@/components/TopRigeste";
import TopSange from "@/components/TopSange";
import TopSprog from "@/components/TopSprog";
import TopPornhub from "@/components/TopPornhub";
import { useState } from "react";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [holdInputs, setHoldInputs] = useState([{ holdNavn: "", tal: "" }]);

  // Steps array med komponenter
  const steps = [
    { title: "", content: <TopFilm /> },
    { title: "Trin 2", content: <TopGoogle /> },
    { title: "Trin 3", content: <TopHjemmeside /> },
    { title: "Trin 4", content: <TopSange /> },
    { title: "Trin 5", content: <TopSprog /> },
    { title: "Trin 6", content: <TopPodcast /> },
    { title: "Trin 7", content: <TopJule /> },
    { title: "Trin 8", content: <TopRigeste /> },
    { title: "Trin 9", content: <TopHadet /> },
    { title: "Trin 10", content: <TopPornhub /> },
  ];

  // Håndterer ændringer i inputfelterne
  const handleInputChange = (index, field, value) => {
    const newInputs = [...holdInputs];
    newInputs[index][field] = value;
    setHoldInputs(newInputs);
  };

  // Tilføj et nyt inputfelt
  const handleAddInput = () => {
    setHoldInputs([...holdInputs, { holdNavn: "", tal: "" }]);
  };

  // Fjern et inputfelt
  const handleRemoveInput = (index) => {
    const newInputs = holdInputs.filter((_, i) => i !== index);
    setHoldInputs(newInputs);
  };

  return (
    <div className="grid w-full max-w-[1000px] mt-10 m-auto  items-center">
      <h2 className="text-2xl font-semibold text-center mb-8">
        {steps[currentStep].title}
      </h2>

      {/* Content for hvert trin */}
      <div className="mb-32">{steps[currentStep].content}</div>

      {/* Inputfelter til holdnavn og tal */}
      <div className="fixed bottom-[80px] left-0 ">
        <div className=" flex w-[1400px] m-auto gap-4 justify-center items-center ">
          <div className=" flex gap-5">
            {holdInputs.map((input, index) => (
              <div
                key={index}
                className="grid bg-neutral-800 rounded-lg p-5 grid-cols-1 justify-items-center gap-2 items-center" >
                {/* Holdnavn input */}
                <input
                  type="text"
                  value={input.holdNavn}
                  onChange={(e) => handleInputChange(index, "holdNavn", e.target.value)}
                  placeholder="Tema name"
                  className="px-2 py-1  w-32"
                />
                {/* Tal input */}
                <input
                  type="number"
                  value={input.tal}
                  onChange={(e) => handleInputChange(index, "tal", e.target.value)}
                  placeholder="Points"
                  className="px-2 py-1  w-32"
                />
                {/* Fjern-knap */}
                <button
  onClick={() => handleRemoveInput(index)}
  className="relative px-2  m-auto border border-white text-white rounded-[9999px] overflow-hidden transition duration-300 group">
  {/* GIF som baggrund */}
  <span 
    className="absolute inset-0 bg-center bg-cover opacity-70 group-hover:opacity-90" 
    style={{ backgroundImage: "url('/gifs.gif')" }}>
  </span>
  
  {/* Hvid overlay ved hover */}
  <span className="absolute inset-0  opacity-0 group-hover:opacity-20 transition duration-300"></span>
  
  {/* Tekst */}
  <span className="relative z-10 text-white">-</span>
</button>
              </div>
            ))}
           
          </div>
          <div >
           <button
  onClick={handleAddInput}
  className="relative px-2  m-auto border border-white text-white rounded-[9999px] overflow-hidden transition duration-300 group">
  {/* GIF som baggrund */}
  <span 
    className="absolute inset-0 bg-center bg-cover opacity-70 group-hover:opacity-90" 
    style={{ backgroundImage: "url('/gifs.gif')" }}>
  </span>
  
  {/* Hvid overlay ved hover */}
  <span className="absolute inset-0  opacity-0 group-hover:opacity-20 transition duration-300"></span>
  
  {/* Tekst */}
  <span className="relative z-10 text-white">+</span>
</button>
            </div>
        </div>
      </div>

      {/* Navigation - placeret fast i bunden */}
      <div className="fixed bottom-0 left-0 w-full pb-5">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-md ${
              currentStep === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Forrige
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Næste
            </button>
          ) : (
            <button
              onClick={() => alert("Quizzen er færdig!")}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Afslut Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
