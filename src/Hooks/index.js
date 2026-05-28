import { useRef } from "react";
import bgMusic from "../assets/Audio/audio.mp3";

export default function useSound() {
  const audioRef = useRef(new Audio(bgMusic));

  const play = async () => {
    try {
      audioRef.current.loop = true;
      await audioRef.current.play();
    } catch (e) {
      console.log("blocked:", e);
    }
  };

  const stop = () => {
    audioRef.current.pause();
  };

  return { play, stop };
}
