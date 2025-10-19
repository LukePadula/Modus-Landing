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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface HeroFormProps {
  showAlert: () => void;
}

export default function Hero({ showAlert }: HeroFormProps) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitWaitlist = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/waitlist",
        { email, token },
        { headers: { "Content-Type": "application/json" } }
      );
      setLoading(false);
      setWaitlistJoined(true);

      // showAlert();
    } catch (err) {
      setLoading(false);
      console.error("Error:", err);
    }
  };

  return (
    <div
      id="waitlist"
      className={`${styles.heroBackgroundGradient} h-screen relative text-white`}
    >
      <Header page="hero" />
      <div className="p-5 h-[100%] flex justify-items-center items-center md:px-18 lg:px-36 xl:px-80">
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
                Zoriana
              </h1>
            </SectionHeaderBackground>
            <h1 className="text-5xl font-semibold leading-tight">
              please smooch me lady!
            </h1>
            <div className="mt-8 mb-4">
              {!waitlistJoined && (
                <>
                  <div className=" bg-white flex relative w-[90%] h-14 mt-8 mb-2 rounded-sm max-w-86">
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      className="bg-white text-black ps-2 w-full rounded-sm"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div>
                      {loading && (
                        <div className="w-16 h-full p-0.5 pl-1 pr-1 flex items-center justify-center">
                          <div className="spinner"></div>
                        </div>
                      )}
                      {!loading && (
                        <button
                          onClick={submitWaitlist}
                          className="h-12 top-0 bg-indigo-900 m-1 text-sm rounded-sm w-26 p-0.5 pl-1 pr-1 cursor-pointer"
                        >
                          Join waitlist
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="text-sm mt-4">
                    <small className="text-indigo-100 text-sm">
                      Joining our waitlist means you agree to our{" "}
                    </small>
                    <Link href="/privacy" className="underline text-sm">
                      privacy policy
                    </Link>
                    .
                  </div>
                </>
              )}
              {waitlistJoined && !loading && (
                <div className="p-3 rounded bg-emerald-600 animate-slide-up opacity-0">
                  <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                      className="scale-140 mr-3"
                      icon={faCircleCheck}
                    />
                    <h2 className="text-lg font-semibold">You&apos;re in!</h2>
                  </div>
                  <small>
                    We will keep you updated with updates and exclusive early
                    access details
                  </small>
                </div>
              )}
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
