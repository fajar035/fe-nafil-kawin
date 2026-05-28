import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="container mx-auto text-white text-2xl">
      <p className="mb-4">Halaman Home</p>
      <p>
        Selamat datang di halaman Home! Di sini Anda dapat menemukan informasi
        tentang acara pernikahan kami, termasuk tanggal, lokasi, dan detail
        lainnya. Kami sangat senang untuk berbagi momen spesial ini dengan Anda.
        Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau
        ingin memberikan ucapan selamat. Terima kasih telah menjadi bagian dari
        perjalanan kami!
      </p>

      <Link
        to="/open-invitation"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Kembali ke Open Invitation
      </Link>
    </div>
  );
}

export default Index;
