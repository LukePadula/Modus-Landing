"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolledPastHero(y > window.innerHeight - 20);
      setScrolled(y !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDiv = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex justify-between items-center p-3 fixed w-full z-30 transition-colors duration-300
        ${
          scrolled
            ? "backdrop-blur-lg shadow-[0_4px_20px_rgba(66,81,226,0.4)] opacity-85"
            : "bg-transparent"
        }
        ${
          scrolledPastHero
            ? "text-brand bg-indigo-50 header opacity-100"
            : "text-white"
        }`}
    >
      <small className="text-base z-30 font-semibold">Modus</small>
      <div
        className={`flex gap-8 transform transition-all duration-300 ease-out
          ${
            scrolledPastHero
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
      >
        <button
          onClick={() => scrollToDiv("contact")}
          className="text-sm cursor-pointer text-black"
        >
          Contact us
        </button>
        <button
          onClick={() => scrollToDiv("waitlist")}
          className="bg-indigo-900 text-sm text-white rounded-sm cursor-pointer p-2"
        >
          Join waitlist
        </button>
      </div>
    </div>
  );
}
