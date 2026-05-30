import { motion } from "framer-motion";

const letterVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function TextTitleAnimated({ word, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay,
        staggerChildren: 0.05,
      }}
      className="flex justify-center"
    >
      {word.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default TextTitleAnimated;
