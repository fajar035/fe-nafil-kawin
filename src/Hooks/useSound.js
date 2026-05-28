import { useRef } from "react";
import bgMusic from "../assets/Audio/audio.mp3";

export default function useSound() {
  const audioRef = useRef(new Audio(bgMusic));
  const isPlayingRef = useRef(false);

  const play = async () => {
    try {
      const audio = audioRef.current;

      if (isPlayingRef.current) return; // 🚫 cegah double play

      audio.loop = true;
      audio.currentTime = 0;

      await audio.play();
      isPlayingRef.current = true;
    } catch (e) {
      console.log("blocked:", e);
    }
  };

  const stop = () => {
    const audio = audioRef.current;

    audio.pause();
    audio.currentTime = 0;
    isPlayingRef.current = false;
  };

  return { play, stop };
}
