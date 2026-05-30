import { motion } from "framer-motion";

const comments = [
  {
    id: 1,
    name: "Ayu cantik",
    attendance: "hadir",
    date: "30 Mei 2026 pukul 14.49",
    message: "Semoga lancar sampai hari H yaaaaa kaowkoawkokawokaow",
  },
  {
    id: 2,
    name: "dijah",
    attendance: "hadir",
    date: "30 Mei 2026 pukul 14.10",
    message: "selamatt ya sayanggg🥰🥰",
  },
  {
    id: 3,
    name: "dijah",
    attendance: "hadir",
    date: "30 Mei 2026 pukul 14.10",
    message: "selamatt ya sayanggg🥰🥰",
  },
  {
    id: 4,
    name: "dijah",
    attendance: "hadir",
    date: "30 Mei 2026 pukul 14.10",
    message: "selamatt ya sayanggg🥰🥰",
  },
  {
    id: 5,
    name: "dijah",
    attendance: "hadir",
    date: "30 Mei 2026 pukul 14.10",
    message: "selamatt ya sayanggg🥰🥰",
  },
];

function CommentList() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="bg-white rounded-[30px] shadow-md p-8 mx-5 mb-10 mt-5"
    >
      <h2 className="text-2xl font-bold text-[#6b2222] mb-6">Daftar Ucapan</h2>

      <div className="pr-2 space-y-4 overflow-y-auto max-h-125">
        {comments.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="bg-gray-50 rounded-[20px] p-5 border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>

                <p className="mt-1 text-sm text-gray-400">{item.date}</p>
              </div>

              <span
                className={`font-semibold ${
                  item.attendance === "hadir"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.attendance === "hadir" ? "✓ Hadir" : "✗ Tidak Hadir"}
              </span>
            </div>

            <p className="mt-4 text-gray-700">{item.message}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CommentList;
