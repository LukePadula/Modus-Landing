"use client";
import { useState } from "react";
import Footer from "../ui/Footer";
import Hero from "../ui/hero/Hero";
import Header from "../ui/hero/Header";
import styles from "../ui/hero/Hero.module.css";
import Privacy from "../ui/privacy";
import BackgroundGrid from "../ui/hero/BackgroundGrid";
export default function Page() {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <Header page="content" />
      <div
        className={`${styles.heroBackgroundGradient} h-[20vw] text-white flex items-center justify-center relative`}
      >
        <BackgroundGrid lineType="dark" />
        <h1 className=" animate-slide-up text-center text-lg md:text-4xl font-semibold leading-tight ">
          Privacy Policy
        </h1>
      </div>
      <div>
        <Privacy />
      </div>
      <Footer></Footer>
    </div>
  );
}
