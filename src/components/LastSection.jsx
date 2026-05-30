import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setTick((t) => t + 1); // trigger framer animation
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const itemClass = "text-center";

  const numberClass =
    "text-base font-bold leading-none tracking-wider sm:text-lg md:text-xl text-[#9e0e00]";

  const labelClass = "text-[8px] sm:text-[10px] uppercase text-[#9e0e00]";

  return (
    <div className="flex justify-center w-full mt-5">
      <div className="grid grid-cols-4 gap-0.5 sm:gap-1 md:gap-2 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] text-[#9e0e00]">
        {/* DAYS */}
        <div className={itemClass}>
          <h3 className={numberClass}>
            {String(timeLeft.days).padStart(2, "0")}
          </h3>
          <p className={labelClass}>Days</p>
        </div>

        {/* HOURS */}
        <div className={itemClass}>
          <h3 className={numberClass}>
            {String(timeLeft.hours).padStart(2, "0")}
          </h3>
          <p className={labelClass}>Hours</p>
        </div>

        {/* MINUTES */}
        <div className={itemClass}>
          <h3 className={numberClass}>
            {String(timeLeft.minutes).padStart(2, "0")}
          </h3>
          <p className={labelClass}>Minutes</p>
        </div>

        {/* SECONDS (ANIMATED) */}
        <div className={itemClass}>
          <AnimatePresence mode="wait">
            <motion.h3
              key={tick}
              className={numberClass}
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 1.2 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              {String(timeLeft.seconds).padStart(2, "0")}
            </motion.h3>
          </AnimatePresence>

          <p className={labelClass}>Seconds</p>
        </div>
      </div>
    </div>
  );
}
