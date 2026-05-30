import { useEffect } from "react";
import useAnimatedText from "../../Hooks/useAnimatedText.js";
import { motion } from "framer-motion";
import TextAnimated from "../../components/TextAnimated.jsx";

import Pernik6 from "../../assets/Images/pernik6.png";
import Pernik7 from "../../assets/Images/pernik7.png";
import Pernik10 from "../../assets/Images/pernik10.png";
import Love from "../../assets/Images/love.png";

import {
  textName,
  textSaveDate,
  textAyat,
  textSurah,
  textSalam,
  textPembuka,
  textLier,
  textAyu,
  textNafil,
  textBinAyu,
  textBinNafil,
} from "../../utils/constants.js";
import TextTitleAnimated from "../../components/TextTitleAnimated.jsx";
import CalendarStrip from "../../components/CalenderStrip.jsx";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const animatedTextSaveDate = useAnimatedText(textSaveDate, 80);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("isRefreshing", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const isRefreshing = sessionStorage.getItem("isRefreshing");

    if (isRefreshing) {
      sessionStorage.removeItem("isRefreshing");

      navigate("/open-invitation", {
        replace: true,
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen py-20 bg-white shadow-2xl max-w-105">
      {/* SAVE THE DATE */}
      <div className="flex items-center justify-center w-full text-center">
        <h1 className="w-full text-[50px] font-bold text-[#9e0e00] leading-none">
          {animatedTextSaveDate.map((item, index) => {
            const isExclamation = item.char === "!";
            const allDone = animatedTextSaveDate.every((x) => x.isVisible);

            // enter setelah SAVE dan THE
            const shouldBreak = index === 4 || index === 8;

            if (shouldBreak) {
              return <br key={index} />;
            }

            return (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={
                  item.isVisible
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                }}
                className={`
            inline-block whitespace-pre
            ${
              isExclamation && allDone ? "animate__animated animate__hinge" : ""
            }
          `}
                style={{
                  animationDelay: isExclamation ? "0.5s" : "0s",
                }}
              >
                {item.char}
              </motion.span>
            );
          })}
        </h1>
      </div>
      {/* SAVE THE DATE */}

      <div className="w-full animate__animated animate__backInUp">
        <img
          src={Pernik6}
          alt="Pernik6"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full px-8">
        <p className="text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={textName} speed={0.04} duration={0.3} />
        </p>

        <p className="text-center">
          <TextAnimated text={textAyat} speed={0.005} />
        </p>

        <p className="mt-2 text-center">
          <TextAnimated text={textSurah} speed={0.03} />
        </p>
      </div>

      <div className="flex items-center justify-center w-full mt-10 mb-5">
        <img
          src={Pernik7}
          alt="Pernik7"
          className="object-cover w-50 animate__animated animate__backInLeft animate__delay-1s"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full px-8">
        <p className="mb-5">
          <TextAnimated text={textSalam} speed={0.03} className="font-2xl" />
        </p>

        <p className="text-center">
          <TextAnimated text={textPembuka} speed={0.01} />
        </p>
        <p className="text-2xl font-bold text-[#9e0e00] text-center mt-10">
          <TextAnimated text={textLier} speed={0.05} />
        </p>
        <div className="my-5 overflow-hidden bg-red-400 h-85 w-70 rounded-4xl">
          <img src={Love} alt="Love" className="object-cover w-full h-full" />`
        </div>

        <p className="text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={textAyu} speed={0.05} />
        </p>

        <p className="text-center">
          <TextAnimated text={textBinAyu} speed={0.01} />
        </p>

        <p className="text-2xl font-bold text-[#9e0e00] text-center my-5">&</p>

        <p className="text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={textNafil} speed={0.05} />
        </p>

        <p className="text-center">
          <TextAnimated text={textBinNafil} speed={0.01} />
        </p>
      </div>

      <div className="flex items-center justify-center w-full gap-10 my-10">
        <img src={Pernik10} alt="Pernik10" className="object-cover w-40" />

        <div className="text-[50px] font-bold text-[#9e0e00]">
          <div className="rotate-[4deg]">
            <TextTitleAnimated word="SAVE" delay={1} />
          </div>

          <div className="rotate-2">
            <TextTitleAnimated word="THE" delay={1.5} />
          </div>

          <div className="rotate-6">
            <TextTitleAnimated word="DATE!" delay={2} />
          </div>
        </div>
      </div>

      {/* <CalendarDay day={5} />
      <CalendarDay day={6} label="D-day !!" />
      <CalendarDay day={7} /> */}

      <div className="my-10">
        <CalendarStrip />
      </div>
    </div>
  );
}

export default Index;
