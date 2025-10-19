"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  page: "hero" | "content";
}

export default function Header({ page }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let heightLimit;

      if (page == "hero") {
        heightLimit = window.innerHeight - 20;
      } else {
        heightLimit = (window.innerHeight * 20) / 100;
      }

      setScrolledPastHero(y > heightLimit);
      setScrolled(y !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDiv = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -48;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex justify-between items-center h-16 p-3 pl-7 pr-7 fixed w-full z-30 transition-colors duration-300 animate-slide-up
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
      {page == "content" && (
        <a href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          <small className="text-base ml-2 z-30 font-semibold font-indigo-900">
            modus
          </small>
        </a>
      )}
      {page == "hero" && (
        <small className="text-base ml-3 z-30 font-semibold font-indigo-900">
          modus
        </small>
      )}

      {page == "hero" && (
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
      )}
    </div>
  );
}
