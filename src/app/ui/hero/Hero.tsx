"use client";

import { useState } from "react";
import styles from "./Hero.module.css";
import BackgroundGrid from "./BackgroundGrid";
import LaunchingSoon from "./LaunchingSoon";
import Header from "./Header";
import SectionHeaderBackground from "../SectionHeaderBackground";
import HeroImage from "../HeroImage";
import axios from "axios";
import { Turnstile } from "@marsidev/react-turnstile";

interface HeroFormProps {
  showAlert: () => void;
}

export default function Hero({ showAlert }: HeroFormProps) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const submitWaitlist = async () => {
    try {
      const res = await axios.post(
        "/api/waitlist",
        { email, token },
        { headers: { "Content-Type": "application/json" } }
      );

      showAlert();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div
      id="waitlist"
      className={`${styles.heroBackgroundGradient} h-screen relative text-white`}
    >
      <Header />
      <div className="p-5 h-[94%] flex justify-items-center items-center md:px-18 lg:px-44 xl:px-80">
        <BackgroundGrid lineType="dark" />
        <div className="absolute right-3 top-15 md:hidden">
          <LaunchingSoon />
        </div>

        <div className="hidden md:block">
          <HeroImage />
        </div>
        <div className="sm:grid grid-cols-2 gap-4 z-10 relative">
          <div className="animate-slide-up opacity-0">
            <SectionHeaderBackground styleType="hero">
              <h1 className="text-5xl text-white font-semibold leading-tight">
                Streamline
              </h1>
            </SectionHeaderBackground>
            <h1 className="text-5xl font-semibold leading-tight">
              your property inspections
            </h1>
            <div className=" bg-white flex relative w-[90%] mt-8 rounded-sm h-14 max-w-86">
              <input
                type="text"
                placeholder="Your Email"
                className="bg-white text-black ps-2 w-full rounded-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={submitWaitlist}
                className="top-0 bg-indigo-900 m-1 text-sm rounded-sm w-32 p-0.5 pl-1 pr-1 cursor-pointer"
              >
                Join waitlist
              </button>
            </div>
            <div className="mt-4">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setToken(token)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
