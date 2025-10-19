"use client";
import { useState } from "react";
import Hero from "./ui/hero/Hero";
import LandingContent from "./ui/landingContent/LandingContent";
import ContactForm from "./ui/landingContent/ContactForm";
import Footer from "./ui/Footer";
import AlertModal from "./ui/AlertModal";

export default function Home() {
  const [alert, setAlert] = useState(false);

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 4000);
  };
  return (
    <div className="relative">
      {alert && <AlertModal />}
      <Hero showAlert={showAlert} />
      <LandingContent />
      <ContactForm showAlert={showAlert} />
      <Footer />
    </div>
  );
}
