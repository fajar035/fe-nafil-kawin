import CalendarDay from "./Calender";

function CalendarStrip() {
  return (
    <div className="w-full rotate-[-4deg] overflow-hidden border-t-4 border-b-4 border-[#9e0e00]">
      <div className="grid grid-cols-3">
        {/* Jumat */}
        <div className="border-r-4 border-[#9e0e00]">
          <div className="py-2 text-center text-[#9e0e00] border-b-4 border-[#9e0e00]">
            Jumat
          </div>

          <div className="flex items-center justify-center h-40">
            <span className="text-6xl font-bold text-[#9e0e00]">5</span>
          </div>
        </div>

        {/* Sabtu */}
        <div className="border-r-4 border-[#9e0e00]">
          <div className="py-2 text-center text-[#9e0e00] border-b-4 border-[#9e0e00]">
            Sabtu
          </div>

          <div className="flex items-center justify-center h-40">
            <CalendarDay day={6} label="D-day !!" />
          </div>
        </div>

        {/* Minggu */}
        <div>
          <div className="py-2 text-center text-[#9e0e00] border-b-4 border-[#9e0e00]">
            Minggu
          </div>

          <div className="flex items-center justify-center h-40">
            <span className="text-6xl font-bold text-[#9e0e00]">7</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarStrip;
