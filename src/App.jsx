import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/index.jsx";

export default function App() {
  return (
    <Routes>
      {/* default route */}
      <Route path="/" element={<Navigate to="/open-invitation" replace />} />

      {/* main page */}
      <Route
        path="/open-invitation"
        element={<Layout page="open-invitation" />}
      />
      <Route path="/home" element={<Layout page="home" />} />

      {/* optional fallback */}
      <Route path="*" element={<Navigate to="/open-invitation" replace />} />
    </Routes>
  );
}
