import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TextAnimated({ text, speed = 0.03, duration = 0.3, className = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <div ref={ref}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 20,
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
            delay: index * speed,
            duration,
          }}
          className={`inline-block whitespace-pre ${className}`}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default TextAnimated;
