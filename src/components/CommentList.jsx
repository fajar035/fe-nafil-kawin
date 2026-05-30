import { motion } from "framer-motion";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "numeric",
    month: "short", // "Mei" bukan "Mei" panjang
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

// Output: 30 Mei 2026, 14.10.00

function CommentList({ data }) {
  //   const data = [];
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
      className="bg-white w-full rounded-[30px] shadow-md p-3 mx-5 mb-10 mt-5"
    >
      <h2 className="text-2xl font-bold text-[#6b2222] mb-6 mt-3 ml-3">
        Daftar Ucapan
      </h2>

      <div className="pr-2 space-y-4 overflow-y-auto max-h-125">
        {data?.length === 0 ? (
          <div className="bg-gray-50 w-full rounded-[20px] p-5 border border-gray-100 text-center">
            <p>No data</p>
          </div>
        ) : (
          data?.map((item, index) => (
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
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {formatDate(item.created_at)}
                  </p>
                </div>

                <span
                  className={`font-semibold text-sm ${
                    item.available === 1 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.available === 1 ? "✓ Hadir" : "✗ Tidak Hadir"}
                </span>
              </div>

              <p className="mt-4 text-gray-700">{item.comment}</p>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default CommentList;
