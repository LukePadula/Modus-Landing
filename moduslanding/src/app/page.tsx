import Hero from "./ui/hero/Hero";
import LandingContent from "./ui/landingContent/LandingContent";
import ContactForm from "./ui/landingContent/ContactForm";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LandingContent />
      <ContactForm />
      <Footer />
    </>
  );
}
