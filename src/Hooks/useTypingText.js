import { useEffect, useState } from "react";

export default function useTypingText(text, speed = 100) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));

      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const isDone = displayed.length === text.length;

  return {
    displayed,
    isDone,
  };
}
