import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import useSound from "../../Hooks/index.js";
import Pernik2 from "../../assets/Images/pernik2.png";
import Pernik3 from "../../assets/Images/pernik3.png";
import Pernik4 from "../../assets/Images/pernik4.png";
import Pernik5 from "../../assets/Images/pernik5.png";
import Pernik1 from "../../assets/Images/pernik1.png";
import nafil from "../../assets/Images/napil.png";
import ayu from "../../assets/Images/ayu.png";

function Index() {
  const navigate = useNavigate();
  const { play } = useSound();

  const title = "THESE KIDS ARE GETTING MARRIED";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(title.slice(0, i));
      i++;

      if (i > title.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const isDone = displayed.length === title.length;

  const goToHome = async () => {
    await play();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-[420px] h-[100vh] bg-white shadow-2xl overflow-hidden">
        <div className="h-full bg-white flex flex-col items-center justify-center gap-6 p-4">
          {/* SECTION */}
          <div className="w-full mb-4 relative">
            <img
              src={Pernik2}
              alt="pernik2"
              className="absolute top-[-47px] left-2 w-20 rotate-[15deg]"
            />

            <img
              src={Pernik3}
              alt="pernik3"
              className="absolute top-[98px] right-[37px] w-15 rotate-[7deg]"
            />

            {/* ===== TITLE (FIXED TYPOGRAPHY LAYOUT) ===== */}
            <h1 className="text-[55px] font-bold mb-4 text-center text-[#9e0e00] leading-[1.1] relative">
              {/* placeholder biar layout gak geser */}
              <span className="invisible select-none">{title}</span>

              {/* typing overlay */}
              <span className="absolute top-0 left-0 w-full text-center">
                {displayed}
                {!isDone && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            <img src={Pernik5} alt="pernik5" className="w-30 mx-auto" />

            <div className="relative w-full">
              {/* FOTO UTAMA (PALING DEPAN) */}
              <img
                src={Pernik4}
                alt="pernik4"
                className="w-70 mx-auto relative z-20"
              />

              {/* NAFIL (BELAKANG) */}
              <div className="absolute top-[-15px] left-[52.9px] w-35 h-30 overflow-hidden z-0">
                <img
                  src={nafil}
                  alt="nafil"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* AYU (BELAKANG JUGA) */}
              <div className="absolute top-[-17px] right-[87px] w-35 h-30 overflow-hidden z-0">
                <img
                  src={ayu}
                  alt="ayu"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DECORATION */}
              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute top-0 left-7 w-10 z-10 animate__animated animate__pulse animate__infinite"
              />

              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute top-30 right-10 w-10 z-10 animate__animated animate__wobble animate__infinite"
              />

              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute bottom-0 left-7 w-10 z-10 animate__animated animate__rubberBand animate__infinite"
              />
            </div>

            <p className="text-center text-black font-bold text-2xl mt-4">
              Ayu & Nafil
            </p>

            <p className="text-center text-black font-bold text-2xl">6.6.26</p>
          </div>

          <button
            onClick={goToHome}
            className="bg-[#820e03] hover:bg-[#6b0c02] text-white font-bold py-2 px-4 rounded underline"
          >
            Open Invitation !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
