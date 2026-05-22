import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import MeetNaeNae from "./pages/MeetNaeNae";
import SupportTeam from "./pages/SupportTeam";
import CelebritySupporters from "./pages/CelebritySupporters";
import Events from "./pages/Events";
import OurImpact from "./pages/OurImpact";
import Sponsors from "./pages/Sponsors";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import TermsOfUse from "./pages/TermsOfUse";
import Cancer from "./pages/initiatives/Cancer";
import Diabetes from "./pages/initiatives/Diabetes";
import Fitness from "./pages/initiatives/Fitness";
import Homelessness from "./pages/initiatives/Homelessness";
import MentalHealth from "./pages/initiatives/MentalHealth";
import VisualImpairment from "./pages/initiatives/VisualImpairment";
import InitiativeGeneric from "./pages/initiatives/Generic";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/meet-nae-nae" element={<MeetNaeNae />} />
        <Route path="/support-team" element={<SupportTeam />} />
        <Route path="/celebrity-supporters" element={<CelebritySupporters />} />
        <Route path="/events" element={<Events />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/initiatives/cancer" element={<Cancer />} />
        <Route path="/initiatives/diabetes" element={<Diabetes />} />
        <Route path="/initiatives/fitness-physical-health" element={<Fitness />} />
        <Route path="/initiatives/homelessness" element={<Homelessness />} />
        <Route path="/initiatives/mental-health" element={<MentalHealth />} />
        <Route path="/initiatives/visual-impairment" element={<VisualImpairment />} />
        <Route path="/initiatives/:slug" element={<InitiativeGeneric />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
