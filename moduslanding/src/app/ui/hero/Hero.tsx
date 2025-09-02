import styles from "./Hero.module.css";
import BackgroundGrid from "./BackgroundGrid";
import LaunchingSoon from "./LaunchingSoon";
import Header from "./Header";
import SectionHeaderBackground from "../SectionHeaderBackground";

export default function Hero() {
  return (
    <div
      className={`${styles.heroBackgroundGradient} h-screen w-screen relative`}
    >
      <Header />
      <div className="p-5 sm:p-15 pt-26 sm:pt-26">
        <BackgroundGrid />
        <LaunchingSoon />
        <div className="sm:grid grid-cols-2 gap-4 z-10 relative">
          <div>
            <SectionHeaderBackground styleType="hero">
              <h1 className="text-3xl md:text-5xl font-semibold">Streamline</h1>
            </SectionHeaderBackground>
            <h1 className="text-3xl md:text-5xl font-semibold">
              your property inspections
            </h1>
            <div className=" bg-white flex relative w-[90%] mt-8 rounded-sm h-12 max-w-86">
              <input
                type="text"
                placeholder="Your Email"
                className="bg-white text-black ps-2 w-full rounded-sm"
              />
              <button className="top-0 bg-indigo-900 m-1 text-sm rounded-sm w-32 p-0.5 pl-1 pr-1">
                Join waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
