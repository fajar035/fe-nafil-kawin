import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TextAnimated({ text, speed = 0.03, duration = 0.3, className = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const words = text.split(" ");

  return (
    <div ref={ref}>
      {words.map((word, wordIndex) => {
        // Hitung offset delay berdasarkan total karakter sebelum kata ini
        const charOffset = words
          .slice(0, wordIndex)
          .reduce((acc, w) => acc + w.length + 1, 0);

        return (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap mr-[0.25em]"
          >
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: (charOffset + charIndex) * speed,
                  duration,
                }}
                className={`inline-block ${className}`}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </div>
  );
}

export default TextAnimated;
