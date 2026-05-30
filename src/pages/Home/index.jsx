import { useEffect } from "react";
import useAnimatedText from "../../Hooks/useAnimatedText.js";
import { motion } from "framer-motion";
import TextAnimated from "../../components/TextAnimated.jsx";

import Pernik2 from "../../assets/Images/pernik2.png";
import Pernik3 from "../../assets/Images/pernik3.png";
import Pernik6 from "../../assets/Images/pernik6.png";
import Pernik7 from "../../assets/Images/pernik7.png";
import Pernik10 from "../../assets/Images/pernik10.png";
import Pernik12 from "../../assets/Images/pernik12.png";
import Pernik13 from "../../assets/Images/pernik13.png";
import mandiriLogo from "../../assets/Images/mandiri.png";
import bcaLogo from "../../assets/Images/bca.png";
import Love from "../../assets/Images/love.png";
import Photo1 from "../../assets/Images/photo1.png";
import Photo2 from "../../assets/Images/photo2.png";
import Photo3 from "../../assets/Images/photo3.png";

import {
  textName,
  textSaveDate,
  textAyat,
  textSurah,
  textSalam,
  textPembuka,
  textLier,
  textAyu,
  textNafil,
  textBinAyu,
  textBinNafil,
} from "../../utils/constants.js";
import TextTitleAnimated from "../../components/TextTitleAnimated.jsx";
import CalendarStrip from "../../components/CalenderStrip.jsx";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form.jsx";
import CommentList from "../../components/CommentList.jsx";
import BankCard from "../../components/BankCard.jsx";
import Timeline from "../../components/Timeline.jsx";
import { Countdown } from "../../components/LastSection.jsx";

function Index() {
  const navigate = useNavigate();
  const animatedTextSaveDate = useAnimatedText(textSaveDate, 80);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("isRefreshing", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const isRefreshing = sessionStorage.getItem("isRefreshing");

    if (isRefreshing) {
      sessionStorage.removeItem("isRefreshing");

      navigate("/open-invitation", {
        replace: true,
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen py-20 bg-[#f8f8f8] shadow-2xl max-w-105">
      {/* SAVE THE DATE */}
      <div className="flex items-center justify-center w-full text-center">
        <h1 className="w-full text-[50px] font-bold text-[#9e0e00] leading-none">
          {animatedTextSaveDate.map((item, index) => {
            const isExclamation = item.char === "!";
            const allDone = animatedTextSaveDate.every((x) => x.isVisible);

            // enter setelah SAVE dan THE
            const shouldBreak = index === 4 || index === 8;

            if (shouldBreak) {
              return <br key={index} />;
            }

            return (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={
                  item.isVisible
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                }}
                className={`
            inline-block whitespace-pre
            ${
              isExclamation && allDone ? "animate__animated animate__hinge" : ""
            }
          `}
                style={{
                  animationDelay: isExclamation ? "0.5s" : "0s",
                }}
              >
                {item.char}
              </motion.span>
            );
          })}
        </h1>
      </div>
      {/* SAVE THE DATE */}

      <div className="w-full animate__animated animate__backInUp">
        <img
          src={Pernik6}
          alt="Pernik6"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full px-8">
        <p className="text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={textName} speed={0.04} duration={0.3} />
        </p>

        <p className="text-center">
          <TextAnimated text={textAyat} speed={0.005} />
        </p>

        <p className="mt-2 text-center">
          <TextAnimated text={textSurah} speed={0.03} />
        </p>
      </div>

      <div className="flex items-center justify-center w-full mt-10 mb-5">
        <img
          src={Pernik7}
          alt="Pernik7"
          className="object-cover w-50 animate__animated animate__backInLeft animate__delay-1s"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full px-8">
        <p className="mb-5">
          <TextAnimated text={textSalam} speed={0.03} className="font-2xl" />
        </p>

        <p className="text-center">
          <TextAnimated text={textPembuka} speed={0.01} />
        </p>
        <p className="text-2xl font-bold text-[#9e0e00] text-center mt-10">
          <TextAnimated text={textLier} speed={0.05} />
        </p>
        <div className="my-5 overflow-hidden h-85 w-70 rounded-4xl">
          <motion.img
            src={Love}
            alt="Love"
            className="object-cover w-full h-full"
            initial={{
              opacity: 0,
              filter: "blur(20px)",
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
            }}
          />
          `
        </div>

        <p className="text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={textAyu} speed={0.05} />
        </p>

        <p className="text-center">
          <TextAnimated text={textBinAyu} speed={0.01} />
        </p>

        <p className="text-2xl font-bold text-[#9e0e00] text-center my-5">&</p>

        <p className="text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={textNafil} speed={0.05} />
        </p>

        <p className="text-center">
          <TextAnimated text={textBinNafil} speed={0.01} />
        </p>
      </div>

      <div className="flex items-center justify-center w-full gap-10 my-10">
        <motion.img
          src={Pernik10}
          alt="Pernik10"
          className="object-cover w-40"
          animate={{
            rotate: [-4, 4, -4],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        />

        <div className="text-[50px] font-bold text-[#9e0e00]">
          <div className="rotate-[4deg]">
            <TextTitleAnimated word="SAVE" delay={1} />
          </div>

          <div className="rotate-2">
            <TextTitleAnimated word="THE" delay={1.5} />
          </div>

          <div className="rotate-6">
            <TextTitleAnimated word="DATE!" delay={2} />
          </div>
        </div>
      </div>

      <div className="my-10">
        <CalendarStrip />
      </div>

      <div className="flex items-center justify-center w-full mt-10 mb-5">
        <motion.img
          src={Pernik12}
          alt="Pernik12"
          className="object-cover w-20"
          initial={{
            opacity: 0,
            x: 120,
            rotate: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        />
      </div>

      <p className="text-2xl font-bold text-[#9e0e00] text-center">
        <TextAnimated text={"Akad"} speed={0.05} />
      </p>

      <p className="text-center">
        <TextAnimated text={"Sabtu, 6 Juni 2026"} speed={0.01} />
      </p>

      <p className="text-center">
        <TextAnimated text={"07.00 WIB"} speed={0.01} />
      </p>

      <p className="text-center">
        <TextAnimated text={"KUA Citeureup"} speed={0.01} />
      </p>

      <p className="text-2xl font-bold text-[#9e0e00] text-center mt-5">
        <TextAnimated text={"Walimatul Ursy"} speed={0.05} />
      </p>

      <p className="text-center">
        <TextAnimated text={"Sabtu, 6 Juni 2026"} speed={0.01} />
      </p>

      <p className="text-center">
        <TextAnimated text={"09.00 WIB - 15.00 WIB"} speed={0.01} />
      </p>

      <p className="mt-5 text-lg font-bold text-center">
        <TextAnimated text={"Rumah Mempelai Wanita"} speed={0.01} />
      </p>

      <p className="text-center">
        <TextAnimated
          text={"Desa Sanja No.41 Rt 001/Rw 004, Sanja,"}
          speed={0.01}
        />
      </p>

      <p className="text-center">
        <TextAnimated text={"Citeureup, Bogor"} speed={0.01} />
      </p>

      <div className="flex items-center justify-center my-5">
        <button
          onClick={() =>
            window.open(
              "https://maps.app.goo.gl/3juStcGkg9UcerGz7?g_st=aw",
              "_blank",
            )
          }
          className="bg-[#9e0e00] cursor-pointer underline text-white py-2 px-4 rounded hover:bg-[#7a0b00]"
        >
          Lihat Lokasi
        </button>
      </div>

      <div className="flex items-center justify-center mb-10">
        <motion.img
          src={Pernik13}
          alt="Pernik13"
          className="object-cover w-20"
          initial={{
            opacity: 0,
            x: -120,
            rotate: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-2xl font-bold text-[#9e0e00] text-center mt-5">
          <TextAnimated text={"Ucapan dan Kehadiran"} speed={0.05} />
        </p>

        <p className="text-center">
          <TextAnimated
            text={"Berikan doa dan ucapan terbaik untuk kami."}
            speed={0.05}
          />
        </p>

        <Form />

        <CommentList />

        <p className="text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={"Weeding"} speed={0.05} />
        </p>

        <p className="text-2xl font-bold text-[#9e0e00] text-center mb-5">
          <TextAnimated text={"Gift"} speed={0.05} />
        </p>

        <p className="text-center">
          <TextAnimated text={"Doa Restu Anda merupakan"} speed={0.05} />
        </p>
        <p className="mb-5 text-center">
          <TextAnimated
            text={"karunia yang sangat berarti bagi kami."}
            speed={0.05}
          />
        </p>

        <p className="text-center">
          <TextAnimated
            text={"Dan jika memberi adalah ungkapan tanda kasih,"}
            speed={0.05}
          />
        </p>

        <p className="mb-10 text-center">
          <TextAnimated
            text={"Anda dapat memberi melalui dibawah ini."}
            speed={0.05}
          />
        </p>

        <motion.div
          className="rotate-10"
          initial={{
            opacity: 0,
            x: -120,
            rotate: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        >
          <BankCard
            bank="Mandiri"
            logo={mandiriLogo}
            accountNumber="1330026088583"
            accountName="Ayu Lestari"
          />
        </motion.div>

        <motion.div
          className="mb-10 -rotate-10"
          initial={{
            opacity: 0,
            x: 120,
            rotate: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        >
          <BankCard
            bank="BCA"
            logo={bcaLogo}
            accountNumber="1673095538"
            accountName="Nafil Maulana"
          />
        </motion.div>

        <p className="text-center">
          <TextAnimated
            text={"Dan bisa mengirimkan hadiah dalam bentuk fisik"}
            speed={0.05}
          />
        </p>

        <p className="mb-5 text-center">
          <TextAnimated
            text={"melalui konfirmasi ke nomor berikut:"}
            speed={0.05}
          />
        </p>

        <button
          onClick={() => window.open("https://wa.me/6282314736775", "_blank")}
          className="bg-[#9e0e00] cursor-pointer underline text-white py-2 px-4 rounded hover:bg-[#7a0b00]"
        >
          Nomor Whatsapp
        </button>

        <p className="mt-10 text-2xl font-bold text-[#9e0e00] text-center">
          <TextAnimated text={"Love Story"} speed={0.05} />
        </p>

        <Timeline />
      </div>

      {/* <LastSection /> */}

      <div className="flex items-center justify-between w-full gap-2 ">
        {/* left */}
        <div className="w-full px-5 ">
          <p className="text-[39px] font-bold text-[#9e0e00] leading-none ">
            <TextAnimated text={"Our Big Day"} speed={0.05} />
          </p>

          <p className="text-[30px] font-bold text-[#9e0e00]  ">
            <TextAnimated text={"Awaits"} speed={0.05} />
          </p>

          <Countdown targetDate="2026-06-06T08:00:00" />

          <div className="flex items-center w-full my-10">
            <img src={Pernik2} alt="pernik2" className="w-20 rotate-15" />

            <div>
              <p className="text-[30px] font-bold text-[#9e0e00]  ">
                <TextAnimated text={"SAVE"} speed={0.05} />
              </p>
              <p className="text-[30px] font-bold text-[#9e0e00]  ">
                <TextAnimated text={"THE"} speed={0.05} />
              </p>

              <p className="text-[30px] font-bold text-[#9e0e00]  ">
                <TextAnimated text={"DATE!"} speed={0.05} />
              </p>
            </div>

            <img src={Pernik3} alt="pernik3" className=" w-15 rotate-[7deg]" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[30px] font-bold text-[#9e0e00]  ">
              <TextAnimated text={"SEE YOU"} speed={0.05} />
            </p>

            <p className="text-[30px] font-bold text-[#9e0e00]  ">
              <TextAnimated text={"on 6.6.26"} speed={0.05} />
            </p>

            <p className="text-[30px]  text-[#9e0e00]  ">
              <TextAnimated text={"Ayu & Nafil"} speed={0.05} />
            </p>
          </div>
        </div>

        {/* right */}
        <div className="relative w-50 ">
          <div className="bg-[#9e0e00] p-2  rounded-xl rotate-[-8deg] ">
            <img
              src={Photo1}
              alt="photo1"
              className="object-cover w-full p-2 bg-white rounded-md aspect-5/6"
            />

            <img
              src={Photo2}
              alt="photo2"
              className="object-cover w-full p-2 mt-2 bg-white rounded-md aspect-5/6"
            />

            <img
              src={Photo3}
              alt="photo3"
              className="object-cover w-full p-2 mt-2 bg-white rounded-md aspect-5/6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
