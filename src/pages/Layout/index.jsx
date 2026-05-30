import Home from "../Home/index.jsx";
import OpenInvitation from "../open_invitation.js/index.jsx";

function Index({ page }) {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full overflow-hidden bg-white shadow-2xl max-w-105">
          {page === "home" && <Home />}
          {page === "open-invitation" && <OpenInvitation />}
        </div>
      </div>
    </>
  );
}

export default Index;
