import { Toaster } from "react-hot-toast";
import Home from "../Home/index.jsx";
import OpenInvitation from "../open_invitation.js/index.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Index({ page }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // bisa "auto" kalau gak mau animasi
    });
  }, [pathname]);
  return (
    <>
      <Toaster position="bottom-center" />
      <div className="flex items-center justify-center min-h-screen bg-[#f8f8f8]">
        <div className="w-full overflow-hidden bg-[#f8f8f8] shadow-2xl max-w-105">
          {page === "home" && <Home />}
          {page === "open-invitation" && <OpenInvitation />}
        </div>
      </div>
    </>
  );
}

export default Index;
