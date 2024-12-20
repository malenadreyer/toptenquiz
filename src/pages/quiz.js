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
import Link from "next/link";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [holdInputs, setHoldInputs] = useState([{ holdNavn: "", tal: "" }]);

  // Steps array med komponenter
  const steps = [
    { title: "", content: <TopFilm /> },
    { title: "", content: <TopGoogle /> },
    { title: "", content: <TopHjemmeside /> },
    { title: "", content: <TopSange /> },
    { title: "", content: <TopSprog /> },
    { title: "", content: <TopPodcast /> },
    { title: "", content: <TopJule /> },
    { title: "", content: <TopRigeste /> },
    { title: "", content: <TopHadet /> },
    { title: "", content: <TopPornhub /> },
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
    <div>
      <Link className="text-white" href="/">Tilbage til regler</Link>
    <div className="grid w-full max-w-[1000px] mt-10 m-auto  items-center">
      <h2 className="text-2xl font-semibold text-center mb-8">
        {steps[currentStep].title}
      </h2>

      {/* Content for hvert trin */}
      <div className="mb-32">{steps[currentStep].content}</div>

      {/* Inputfelter til holdnavn og tal */}
      <div className="fixed grid  w-[1000px] m-auto bottom-[40px]   ">
        <div className="   m-auto gap-4 justify-center items-center ">
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
                <div className="grid grid-cols-2 gap-5">
                <button
  onClick={() => handleRemoveInput(index)}
  className="relative px-[10px]  m-auto border border-white text-white rounded-[9999px] overflow-hidden transition duration-300 group">
  {/* GIF som baggrund */}
  <span 
    className="absolute inset-0 bg-center bg-cover opacity-70 group-hover:opacity-90" 
    style={{ backgroundImage: "url('/gifs.gif')" }}>
  </span>
  
  {/* Hvid overlay ved hover */}
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>  
  {/* Tekst */}
  <span className="relative z-10 text-white">-</span>
</button>
<button
  onClick={handleAddInput}
  className="relative px-2  m-auto border border-white text-white rounded-[9999px] overflow-hidden transition duration-300 group">
  {/* GIF som baggrund */}
  <span 
    className="absolute inset-0 bg-center bg-cover opacity-70 group-hover:opacity-90" 
    style={{ backgroundImage: "url('/gifs.gif')" }}>
  </span>
  
  {/* Hvid overlay ved hover */}
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
  
  {/* Tekst */}
  <span className="relative z-10 text-white">+</span>
</button>
</div>
              </div>
            ))}
           
          </div>
          <div >
           
            </div>
        </div>
      </div>

      {/* Navigation - placeret fast i bunden */}
<div className="fixed grid w-full bottom-0 pb-5">
  <div className="grid grid-cols-2 w-[1000px] items-center px-4">
    <div className="items-start justify-start">
    {/* Forrige knap */}
   
    <button
    onClick={() => setCurrentStep((prev) => prev - 1)}
    disabled={currentStep === 0}
    className="relative px-6 py-2 m-auto border border-white text-white rounded-lg overflow-hidden transition duration-300 group">
    {/* GIF som baggrund */}
    <span 
      className="absolute inset-0 bg-center bg-cover animate-glimmer opacity-70 group-hover:opacity-90" 
      style={{ backgroundImage: "url('/gifs.gif')" }}>
    </span>
    
    {/* Hvid overlay ved hover */}
    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
    
    {/* Tekst */}
    <span className="relative z-10">Forrige</span>
  </button>
    </div>
<div className="grid justify-end">
    {/* Næste eller Afslut Quiz knap */}
    {currentStep < steps.length - 1 ? (
      
        <button
        onClick={() => setCurrentStep((prev) => prev + 1)}
        
        className="relative px-6 py-2 m-auto border border-white text-white rounded-lg overflow-hidden transition duration-300 group">
        {/* GIF som baggrund */}
        <span 
          className="absolute inset-0 bg-center bg-cover animate-glimmer opacity-70 group-hover:opacity-90" 
          style={{ backgroundImage: "url('/gifs.gif')" }}>
        </span>
        
        {/* Hvid overlay ved hover */}
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
        
        {/* Tekst */}
        <span className="relative z-10">Næste</span>
      </button>
    ) : (
      <button
        onClick={() => alert("Quizzen er færdig!")}
        className="justify-self-end px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Afslut Quiz
      </button>
      
    )}
    </div>
  </div>
</div>


    </div>
    </div>
  );
};

export default Quiz;
