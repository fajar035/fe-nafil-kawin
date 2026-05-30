import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useCountUpInView from "../Hooks/useCountUpInView.js";
import { addComment } from "../service/index.js";

function Form({ data, setSuccessAdd }) {
  const [form, setForm] = useState({
    name: "",
    comment: "",
    available: 0,
  });

  const [hadirRef, hadirCount] = useCountUpInView(data?.available, 2000);

  const [tidakHadirRef, tidakHadirCount] = useCountUpInView(
    data?.unavailable,
    2000,
  );

  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(false);

    // hit api disini
    addComment(form)
      .then((res) => {
        const { available } = res.data;
        toast.success(
          available === 1
            ? "Terima kasih atas kehadirannya"
            : "Terima kasih, doain aja yah",
        );
      })
      .catch((err) => {
        console.log("ERR : ", err);
        toast.error("Terjadi kesalahan");
      })
      .finally(() => {
        setIsLoading(true);
        setSuccessAdd(true);
        setForm({
          name: "",
          comment: "",
          available: 0,
        });
      });
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
            value={form.comment}
            onChange={(e) =>
              setForm({
                ...form,
                comment: e.target.value,
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
                form.available === "1"
                  ? "border-[#9e0e00] bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="available"
                value={1}
                checked={form.available === "1"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    available: e.target.value,
                  })
                }
                className="hidden"
              />

              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${
                  form.available === "1"
                    ? "border-[#9e0e00]"
                    : "border-gray-400"
                }`}
              >
                {form.available === "1" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9e0e00]" />
                )}
              </div>

              <span className="font-semibold text-[#6b2222]">✓ Hadir</span>
            </label>

            <label
              className={`flex items-center gap-4 p-5 rounded-[18px] border cursor-pointer transition
              ${
                form.available === "0"
                  ? "border-[#9e0e00] bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="available"
                value={0}
                checked={form.available === "0"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    available: e.target.value,
                  })
                }
                className="hidden"
              />

              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${
                  form.available === "0"
                    ? "border-[#9e0e00]"
                    : "border-gray-400"
                }`}
              >
                {form.available === "0" && (
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
          disabled={
            form.name.length === 0 || form.comment.length === 0 || !isLoading
          }
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          type="submit"
          className="w-full h-16 bg-[#9e0e00] text-white font-bold text-md rounded-[18px] shadow-md"
        >
          {isLoading ? "Kirim Ucapan" : "Loading"}
        </motion.button>
      </form>
    </motion.section>
  );
}

export default Form;
