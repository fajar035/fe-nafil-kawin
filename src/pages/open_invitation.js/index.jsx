import { useNavigate } from "react-router-dom";
import useTypingText from "../../Hooks/useTypingText.js";
import useSound from "../../Hooks/useSound.js";

import { textName, title } from "../../utils/constants.js";

import Pernik1 from "../../assets/Images/pernik1.png";
import Pernik2 from "../../assets/Images/pernik2.png";
import Pernik3 from "../../assets/Images/pernik3.png";
import Pernik4 from "../../assets/Images/pernik4.png";
import Pernik5 from "../../assets/Images/pernik5.png";

import ayu from "../../assets/Images/ayu.png";
import nafil from "../../assets/Images/napil.png";

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
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="max-w-md px-4 py-8 mx-auto sm:max-w-lg">
        <div className="flex flex-col items-center">
          {/* ===== HERO ===== */}
          <div className="relative w-full">
            {/* DECOR TOP LEFT */}
            <img
              src={Pernik2}
              alt="pernik2"
              className="absolute left-0 w-12 -top-6 sm:w-16 sm:-top-8 rotate-12"
            />

            {/* DECOR TOP RIGHT */}
            <img
              src={Pernik3}
              alt="pernik3"
              className="absolute w-10 right-4 top-30 sm:top-30 sm:w-14 rotate-6"
            />

            {/* TITLE */}
            <h1 className="relative mb-6 text-5xl font-bold leading-tight text-center sm:text-5xl text-[#9e0e00]">
              <span className="invisible">{title}</span>

              <span className="absolute top-0 left-0 w-full">
                {displayTitle}
                {!isTitleDone && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            {/* ORNAMENT */}
            <img
              src={Pernik5}
              alt="pernik5"
              className="w-24 mx-auto mb-4 sm:w-28"
            />

            {/* PHOTO AREA */}
            <div className="relative w-[260px] sm:w-[320px] mx-auto">
              {/* FOTO TENGAH */}
              <img
                src={Pernik4}
                alt="pernik4"
                className="relative z-20 w-full"
              />

              {/* NAFIL */}
              <div className="absolute left-0 z-0 w-32 overflow-hidden -top-4 h-28 sm:-left-1 sm:w-42 sm:h-33 sm:-top-4">
                <img
                  src={nafil}
                  alt="nafil"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* AYU */}
              <div className="absolute z-0 w-32 overflow-hidden -top-5 right-7 h-28 sm:right-8 sm:w-42 sm:h-33 sm:-top-4">
                <img
                  src={ayu}
                  alt="ayu"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* DECORATION 1 */}
              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute z-10 w-6 top-2 left-2 sm:w-8 animate__animated animate__pulse animate__infinite"
              />

              {/* DECORATION 2 */}
              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute z-10 w-6 right-3 top-24 sm:w-8 animate__animated animate__wobble animate__infinite"
              />

              {/* DECORATION 3 */}
              <img
                src={Pernik1}
                alt="pernik1"
                className="absolute z-10 w-6 left-2 bottom-2 sm:w-8 animate__animated animate__rubberBand animate__infinite"
              />
            </div>

            {/* NAMA */}
            <p className="mt-6 text-xl font-bold text-center text-black sm:text-2xl">
              {displayTextName}
              {!isTextNameDone && <span className="animate-pulse">|</span>}
            </p>

            {/* TANGGAL */}
            <p className="mt-1 text-xl font-bold text-center text-black sm:text-2xl">
              6.6.26
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={goToHome}
            className="
              mt-8
              w-full
              max-w-xs
              rounded-lg
              bg-[#820e03]
              px-6
              py-3
              font-bold
              text-white
              underline
              transition
              hover:bg-[#6b0c02]
            "
          >
            Open Invitation !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
