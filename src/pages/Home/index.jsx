import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useTypingText from "../../Hooks/useTypingText.js";
import useAnimatedText from "../../Hooks/useAnimatedText.js";
import { motion } from "framer-motion";

import Pernik6 from "../../assets/Images/pernik6.png";
import Pernik7 from "../../assets/Images/pernik7.png";

import {
  textName,
  textSaveDate,
  textAyat,
  textSurah,
  textSalam,
  textPembuka,
  textLier,
} from "../../utils/constants.js";

function Index() {
  //   const navigate = useNavigate();
  const animatedTextSaveDate = useAnimatedText(textSaveDate, 80);
  const animateTextName = useAnimatedText(textName, 100);
  const animatedTextAyat = useAnimatedText(textAyat, 0.5);
  const animatedTextSurah = useAnimatedText(textSurah, 250);
  const animatedTextSalam = useAnimatedText(textSalam, 70);
  const animatedTextPembuka = useAnimatedText(textPembuka, 10);
  const animatedTextLier = useAnimatedText(textLier, 100);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("isRefreshing", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  //   useEffect(() => {
  //     const isRefreshing = sessionStorage.getItem("isRefreshing");

  //     if (isRefreshing) {
  //       sessionStorage.removeItem("isRefreshing");

  //       navigate("/open-invitation", {
  //         replace: true,
  //       });
  //     }
  //   }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-[420px] h-[100vh] bg-white shadow-2xl overflow-hidden">
        <div className="h-full py-10 bg-white">
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

          <div className="w-full animate__animated animate__backInUp">
            <img
              src={Pernik6}
              alt="Pernik6"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-8">
            <p className="text-2xl font-bold text-[#9e0e00] text-center">
              {animateTextName.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                    // filter: "blur(8px)",
                  }}
                  animate={
                    item.isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          //   filter: "blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                  }}
                  className="inline-block whitespace-pre"
                >
                  {item.char}
                </motion.span>
              ))}
            </p>

            <p className="text-sm">
              {animatedTextAyat.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                    // filter: "blur(8px)",
                  }}
                  animate={
                    item.isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          //   filter: "blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                  }}
                  className="inline-block whitespace-pre"
                >
                  {item.char}
                </motion.span>
              ))}
            </p>

            <p className="mt-2 text-sm">
              {animatedTextSurah.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                    // filter: "blur(8px)",
                  }}
                  animate={
                    item.isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          //   filter: "blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                  }}
                  className="inline-block whitespace-pre"
                >
                  {item.char}
                </motion.span>
              ))}
            </p>
          </div>

          <div className="flex items-center justify-center w-full my-10">
            <img
              src={Pernik7}
              alt="Pernik7"
              className="object-cover w-[200px] animate__animated animate__backInLeft animate__delay-1s"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-8">
            <p className="mb-5 text-sm">
              {animatedTextSalam.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                    // filter: "blur(8px)",
                  }}
                  animate={
                    item.isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          //   filter: "blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                  }}
                  className="inline-block whitespace-pre"
                >
                  {item.char}
                </motion.span>
              ))}
            </p>

            <p className="text-sm">
              {animatedTextPembuka.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                    // filter: "blur(8px)",
                  }}
                  animate={
                    item.isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          //   filter: "blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                  }}
                  className="inline-block whitespace-pre"
                >
                  {item.char}
                </motion.span>
              ))}
            </p>

            <p className="text-2xl font-bold text-[#9e0e00] text-center mt-10">
              {animatedTextLier.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                    // filter: "blur(8px)",
                  }}
                  animate={
                    item.isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          //   filter: "blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                  }}
                  className="inline-block whitespace-pre"
                >
                  {item.char}
                </motion.span>
              ))}
            </p>

            {/* <img
              src={Pernik7}
              alt="Pernik7"
              className="object-cover w-[200px] animate__animated animate__backInLeft animate__delay-1s"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
