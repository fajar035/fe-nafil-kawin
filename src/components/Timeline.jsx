import { Heart } from "lucide-react";

const timelineData = [
  {
    title: "Awal Pertemuan",
    description: `Pertemuan kami dimulai pada saat masa SMK tahun 2016.
Cinta monyet-an anak SMK yang menjalin hubungan hanya 1 bulan haha :D.
Lalu putus dan berteman seperti biasa sampai lulus SMK.`,
  },
  {
    title: "Perjalanan Bersama",
    description: `Long story short, di awal tahun 2022 kami dekat kembali dengan status sama-sama jomblo.
Terus jadinya yaa... BALIKAN.
Haha emang cerita yang dulu belum selesai guys karena masih sama-sama cari jati diri.`,
  },
  {
    title: "Komitmen",
    description: `Sejak awal dekat kembali, kami sudah berkomitmen untuk menjalani hubungan yang lebih serius dan ingin saling bertumbuh bersama.
Dan Bismillah perjalanan baru kami sebentar lagi akan dimulai.`,
  },
];

export default function Timeline() {
  return (
    <section className="max-w-4xl px-6 py-12 mx-auto">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-5 bottom-0 w-0.75 bg-red-200" />

        {timelineData.map((item, index) => (
          <div key={index} className="relative flex pb-16 gap-7 last:pb-0">
            {/* Heart */}
            <div className="relative z-10 shrink-0">
              <div className="flex items-center justify-center w-12 h-12">
                <Heart className="fill-[#9e0e00] text-[#9e0e00]" size={36} />
              </div>
            </div>

            {/* Content */}
            <div className="pt-1">
              <h3 className="text-xl font-bold text-[#9e0e00] mb-3">
                {item.title}
              </h3>

              <p className="leading-relaxed text-black whitespace-pre-line ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
