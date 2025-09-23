import Hero from "./ui/hero/Hero";
import LandingContent from "./ui/landingContent/LandingContent";
import ContactForm from "./ui/landingContent/ContactForm";
import Footer from "./ui/Footer";
import AlertModal from "./ui/AlertModal";

export default function Home() {
  return (
    <div className="relative">
      <AlertModal />
      <Hero />
      <LandingContent />
      <ContactForm />
      <Footer />
    </div>
  );
}
