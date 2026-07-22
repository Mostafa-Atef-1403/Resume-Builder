import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HERO_IMG from "../assets/hero-image.png";

import { FeaturesCards } from "../context/context";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuth, setOpenAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <div className="w-full min-h-full bg-white pb-96">
      {/* ================ The Container ================ */}
      <div className="container mx-auto px-4 py-6">
        {/* ================ Heade r================ */}

        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold">Resume Magic</div>
          <button
            className="bg-green-200 text-md font-semibold text-black px-7 py-2.5
                      rounded-md hover:bg-gray-700 hover:text-white transition cursor-pointer"
            onClick={() => setOpenAuth(true)}
          >
            Login | Signup
          </button>
        </header>

        {/* ================ Hero ================ */}

        <div className="flex items-center flex-col md:flex-row">
          {/* hero text */}
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Build your{" "}
              <span
                className="text-transparent bg-clip-text 
              bg-[radial-gradient(circle,_#7182ff_0%,_#3fff52_100%)]
              bg-[length: 200%_200%] animate-text-shine"
              >
                Resume Effortlessly!
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              Craft a standout resume in minutes with our smart and easy resume
              builder.
            </p>
            <button
              className="bg-black text-white font-semibold text-sm px-8 py-3
              rounded-lg hover:bg-gray-800 transition cursor-pointer"
              onClick={handleCTA}
            >
              Get Started
            </button>
          </div>
          {/* hero img */}
          <div className="w-full md:w-1/2">
            <img src={HERO_IMG} alt="HERO_IMG" className="w-full rounded-lg" />
          </div>
        </div>

        {/* ================ Features ================ */}

        <section className="mt-5">
          <h2 className="text-2xl font-bold text-center mb-12">
            Features That Make You Shine
          </h2>

          {/* features cards container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FeaturesCards.map((card) => (
              // each card
              <div className="bg-gray-50 hover:shadow-md shadow-sm p-6 rounded-xl transition">
                <h3 className="text-lg font-semibold mb-3">{card.h3}</h3>
                <p className="text-gray-600">{card.p}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
