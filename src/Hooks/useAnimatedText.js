import { useEffect, useState } from "react";

export default function useAnimatedText(text, speed = 80) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;

      setVisibleChars(current);

      if (current >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return text.split("").map((char, index) => ({
    char,
    isVisible: index < visibleChars,
  }));
}
