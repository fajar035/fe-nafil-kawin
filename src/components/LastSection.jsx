import { useEffect, useState } from "react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-5  w-fit">
      <div className="grid grid-cols-4 gap-3 text-[#9e0e00]">
        <div className="text-center">
          <h3 className="text-xl font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </h3>
          <p className="text-xs uppercase">Days</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </h3>
          <p className="text-xs uppercase">Hours</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </h3>
          <p className="text-xs uppercase">Minutes</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </h3>
          <p className="text-xs uppercase">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default function LastSection() {
  return (
    <section className="px-10 py-10 bg-red-100 ">
      <div className="relative grid items-center grid-cols-2 gap-10">
        {/* LEFT */}
        <div
          className="text-[#9e0e00]"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          <p className="mb-8 text-3xl font-bold leading-none">
            OUR BIG DAY
            <br />
            AWAITS
          </p>

          {/* <Countdown targetDate="2026-06-06T08:00:00" /> */}

          <h3 className="mt-12 text-3xl font-bold leading-tight">
            SAVE
            <br />
            THE
            <br />
            DATE!
          </h3>

          <h3 className="mt-12 text-3xl font-bold">
            SEE YOU
            <br />
            ON 6.6.26
          </h3>

          <p className="mt-8 text-3xl ">Ayu & Nafil</p>
        </div>

        {/* RIGHT */}
        <div className="relative bg-blue-400">
          <div className="bg-[#9e0e00] p-2 rounded-xl absolute rotate-[-8deg] w-[200px] -top-30 -right-20">
            <img
              src="/photo1.jpg"
              alt=""
              className="w-full aspect-[5/6] object-cover rounded-md bg-white p-2"
            />

            <img
              src="/photo2.jpg"
              alt=""
              className="w-full aspect-[5/6] object-cover rounded-md bg-white p-2 mt-2"
            />

            <img
              src="/photo3.jpg"
              alt=""
              className="w-full aspect-[5/6] object-cover rounded-md bg-white p-2 mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
