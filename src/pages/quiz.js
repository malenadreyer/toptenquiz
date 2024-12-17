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

  return (
    <div className="grid w-full max-w-[1000px] mt-24 m-auto items-center">
      <h2 className="text-2xl font-semibold text-center mb-8">
        {steps[currentStep].title}
      </h2>

      {/* Content for hvert trin */}
      <div className="mb-32">{steps[currentStep].content}</div>

      {/* Navigation - placeret fast i bunden */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-4">
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
