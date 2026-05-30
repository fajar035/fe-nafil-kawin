import { motion } from "framer-motion";
import { useState } from "react";
import useCountUpInView from "../Hooks/useCountUpInView.js";

function Form() {
  const [form, setForm] = useState({
    name: "",
    message: "",
    attendance: "",
  });

  const [hadirRef, hadirCount] = useCountUpInView(125, 2000);

  const [tidakHadirRef, tidakHadirCount] = useCountUpInView(18, 2000);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // hit api disini
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="w-full px-6 py-5 bg-[#f8f8f8]"
    >
      {/* Counter */}
      <div className="grid grid-cols-2 gap-5 mb-8">
        <div ref={hadirRef}>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="bg-white rounded-[30px] shadow-md flex justify-center items-center flex-col w-full h-40"
          >
            <motion.p
              key={hadirCount}
              className="text-5xl font-bold text-center text-green-600"
              animate={{
                scale: [1.15, 1],
              }}
              transition={{
                duration: 0.15,
              }}
            >
              {hadirCount}
            </motion.p>

            <p className="mt-3 font-semibold text-center text-gray-600 text-md">
              ✓ Hadir
            </p>
          </motion.div>
        </div>

        <div ref={tidakHadirRef}>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="bg-white rounded-[30px] shadow-md flex justify-center items-center flex-col w-full h-40"
          >
            <motion.p
              key={tidakHadirCount}
              className="text-5xl font-bold text-center text-red-500"
              animate={{
                scale: [1.15, 1],
              }}
              transition={{
                duration: 0.15,
              }}
            >
              {tidakHadirCount}
            </motion.p>

            <p className="mt-3 text-sm font-semibold text-center text-gray-600">
              ✗ Tidak Hadir
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[30px] shadow-md p-8"
      >
        {/* Nama */}
        <div className="mb-8">
          <label className="block mb-3 text-md font-bold text-[#6b2222]">
            Nama
          </label>

          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            placeholder="Masukkan nama Anda"
            className="w-full h-16 px-5 border border-gray-200 rounded-[18px] focus:border-[#9e0e00] outline-none"
          />
        </div>

        {/* Ucapan */}
        <div className="mb-8">
          <label className="block mb-3 text-md font-bold text-[#6b2222]">
            Ucapan
          </label>

          <textarea
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            placeholder="Tuliskan ucapan Anda di sini..."
            className="w-full p-5 border border-gray-200 rounded-[18px] resize-none focus:border-[#9e0e00] outline-none"
          />
        </div>

        {/* Kehadiran */}
        <div className="mb-8">
          <label className="block mb-4 text-md font-bold text-[#6b2222]">
            Pilih Kehadiran
          </label>

          <div className="space-y-4">
            <label
              className={`flex items-center gap-4 p-5 rounded-[18px] border cursor-pointer transition
              ${
                form.attendance === "hadir"
                  ? "border-[#9e0e00] bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="attendance"
                value="hadir"
                checked={form.attendance === "hadir"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    attendance: e.target.value,
                  })
                }
                className="hidden"
              />

              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${
                  form.attendance === "hadir"
                    ? "border-[#9e0e00]"
                    : "border-gray-400"
                }`}
              >
                {form.attendance === "hadir" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9e0e00]" />
                )}
              </div>

              <span className="font-semibold text-[#6b2222]">✓ Hadir</span>
            </label>

            <label
              className={`flex items-center gap-4 p-5 rounded-[18px] border cursor-pointer transition
              ${
                form.attendance === "tidak_hadir"
                  ? "border-[#9e0e00] bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="attendance"
                value="tidak_hadir"
                checked={form.attendance === "tidak_hadir"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    attendance: e.target.value,
                  })
                }
                className="hidden"
              />

              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${
                  form.attendance === "tidak_hadir"
                    ? "border-[#9e0e00]"
                    : "border-gray-400"
                }`}
              >
                {form.attendance === "tidak_hadir" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9e0e00]" />
                )}
              </div>

              <span className="font-semibold text-[#6b2222]">
                ✗ Tidak Hadir
              </span>
            </label>
          </div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          type="submit"
          className="w-full h-16 bg-[#9e0e00] text-white font-bold text-md rounded-[18px] shadow-md"
        >
          Kirim Ucapan
        </motion.button>
      </form>
    </motion.section>
  );
}

export default Form;
