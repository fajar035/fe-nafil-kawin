import Home from "../Home/index.jsx";
import OpenInvitation from "../open_invitation.js/index.jsx";

function Index({ page }) {
  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-[420px] h-[100vh] bg-white shadow-2xl overflow-hidden">
          {page === "home" && <Home />}
          {page === "open-invitation" && <OpenInvitation />}
        </div>
      </div>
    </>
  );
}

export default Index;
