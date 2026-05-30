import { useNavigate } from "react-router-dom";
import useTypingText from "../../Hooks/useTypingText.js";
import { textName, title } from "../../utils/constants.js";

import useSound from "../../Hooks/useSound.js";
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

  const { displayed: displayTitle, isDone: isTitleDone } = useTypingText(
    title,
    100,
  );
  const { displayed: displayTextName, isDone: isTextNameDone } = useTypingText(
    textName,
    200,
  );

  const goToHome = async () => {
    await play();
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full h-screen overflow-hidden bg-white shadow-2xl max-w-105">
        <div className="flex flex-col items-center justify-center h-full gap-6 p-4 bg-white">
          {/* SECTION */}
          <div className="relative w-full mb-4">
            <img
              src={Pernik2}
              alt="pernik2"
              className="absolute -top-11.75 left-2 w-20 rotate-15"
            />

            <img
              src={Pernik3}
              alt="pernik3"
              className="absolute top-24.5 right-9.25 w-15 rotate-[7deg]"
            />

            {/* ===== TITLE (FIXED TYPOGRAPHY LAYOUT) ===== */}
            <h1 className="text-[55px] font-bold mb-4 text-center text-[#9e0e00] leading-[1.1] relative">
              {/* placeholder biar layout gak geser */}
              <span className="invisible select-none">{title}</span>

              {/* typing overlay */}
              <span className="absolute top-0 left-0 w-full text-center">
                {displayTitle}
                {!isTitleDone && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            <img src={Pernik5} alt="pernik5" className="mx-auto w-30" />

            <div className="relative w-full">
              {/* FOTO UTAMA (PALING DEPAN) */}
              <img
                src={Pernik4}
                alt="pernik4"
                className="relative z-20 mx-auto w-70"
              />

              {/* NAFIL (BELAKANG) */}
              <div className="absolute -top-3.75 left-[52.9px] w-35 h-30 overflow-hidden z-0">
                <img
                  src={nafil}
                  alt="nafil"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* AYU (BELAKANG JUGA) */}
              <div className="absolute -top-4.25 right-21.75 w-35 h-30 overflow-hidden z-0">
                <img
                  src={ayu}
                  alt="ayu"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* DECORATION */}
              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute top-0 z-10 w-10 left-7 animate__animated animate__pulse animate__infinite"
              />

              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute z-10 w-10 top-30 right-10 animate__animated animate__wobble animate__infinite"
              />

              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute bottom-0 z-10 w-10 left-7 animate__animated animate__rubberBand animate__infinite"
              />
            </div>

            <p className="mt-4 text-2xl font-bold text-center text-black">
              {displayTextName}
              {!isTextNameDone && <span className="animate-pulse">|</span>}
            </p>

            <p className="text-2xl font-bold text-center text-black">6.6.26</p>
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
