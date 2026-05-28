import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useTypingText from "../../Hooks/useTypingText.js";
import useAnimatedText from "../../Hooks/useAnimatedText.js";
import { motion } from "framer-motion";

function Index() {
  const navigate = useNavigate();
  const animatedText = useAnimatedText("SAVE THE DATE!", 80);

  //   const title = "SAVE THE\nDATE!";

  //   const { displayed, isDone } = useTypingText(title, 100);

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
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-[420px] h-[100vh] bg-white shadow-2xl overflow-hidden">
        <div className="h-full bg-white p-4">
          <div className="w-full px-30 flex items-center justify-center">
            <h1 className="text-[50px] font-bold text-[#9e0e00] text-center">
              {animatedText.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)",
                  }}
                  animate={
                    item.isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                  }}
                  className="inline-block whitespace-pre"
                >
                  {item.char}
                </motion.span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
