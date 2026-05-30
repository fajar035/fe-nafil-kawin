import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";

export default function BankCard({ bank, logo, accountNumber, accountName }) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(accountNumber);
    toast.success("Nomor rekening berhasil disalin");
  };

  return (
    <div className="relative w-full max-w-xl p-8 ">
      {/* Frame */}
      <div className="relative border-[3px] border-black rounded-[20px] p-8">
        {/* Corner decoration */}
        <div className="absolute -top-3 left-1 w-10 h-10  border-b-[3px] border-r-[3px] border-black rounded-br-full" />
        <div className="absolute -top-3 right-1 w-10 h-10  border-b-[3px] border-l-[3px] border-black rounded-bl-full" />
        <div className="absolute -bottom-3 left-1 w-10 h-10  border-t-[3px] border-r-[3px] border-black rounded-tr-full" />
        <div className="absolute -bottom-3 right-1 w-10 h-10  border-t-[3px] border-l-[3px] border-black rounded-tl-full" />

        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt={bank} className="object-contain h-14" />
        </div>

        <h2 className="mb-10 text-3xl tracking-wider">{accountNumber}</h2>

        <div className="flex items-end justify-between gap-7">
          <div>
            <p className="text-lg">Account name:</p>
            <p className="text-xl font-bold">{accountName}</p>
          </div>

          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-6 py-3 text-white bg-red-700 cursor-pointer rounded-xl hover:bg-red-800"
          >
            <Copy size={18} />
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
