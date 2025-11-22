import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import PrivacyPolicy from "@/react-app/pages/PrivacyPolicy";
import TermsOfUse from "@/react-app/pages/TermsOfUse";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}
