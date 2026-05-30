import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CalendarDay({ day, label }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      setCount(current);

      if (current >= day) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [isInView, day]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                scale: 1,
                rotate: 0,
                opacity: 1,
              }
            : {}
        }
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 12,
        }}
        className="relative flex items-center justify-center w-24 h-24"
      >
        {day === 6 && (
          <>
            {/* lingkaran luar */}
            <div className="absolute inset-0 border-2 border-[#9e0e00] rounded-full rotate-6" />
            {/* lingkaran dalam */}
            <div className="absolute inset-1 border border-[#9e0e00] rounded-full -rotate-6" />
          </>
        )}

        {/* angka */}
        <motion.span
          key={count}
          initial={{
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="text-6xl font-bold text-[#9e0e00]"
        >
          {count}
        </motion.span>
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          delay: 0.7,
        }}
        className="mt-2 text-[#9e0e00] rotate-[-8deg]"
      >
        {label}
      </motion.p>
    </div>
  );
}

export default CalendarDay;
