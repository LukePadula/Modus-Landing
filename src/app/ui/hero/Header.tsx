"use client"; // add this if you're using Next.js App Router

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { log } from "node:console";
import SectionHeaderBackground from "../SectionHeaderBackground";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (!scrolledPastHero && window.scrollY > window.innerHeight - 20) {
        console.log("User scrolled past one full screen height!");
        setScrolledPastHero(true);
      } else {
        console.log("BACK");

        setScrolledPastHero(false);
      }

      if (window.scrollY === 0) {
        setScrolled(false);
      } else if (!scrolled) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center p-4 fixed w-full z-30 transition-colors transtion-text duration-300 ${
        scrolled
          ? "backdrop-blur-lg shadow-[0_4px_20px_rgba(66,81,226,0.4)] opacity-85"
          : "bg-transparent"
      } ${scrolledPastHero ? "text-brand bg-indigo-50 header" : "text-white"}`}
    >
      <small className=" text-base z-30 font-semibold">Modus</small>
      <div className="flex justify-center items-center cursor-pointer w-4 h-4">
        <FontAwesomeIcon
          icon={faBars}
          className="hover:text-gray-300/0 transition-colors scale-125"
        />
      </div>
    </div>
  );
}
