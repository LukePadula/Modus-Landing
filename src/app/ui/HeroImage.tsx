import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck as fasCheck,
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import LaunchingSoon from "./hero/LaunchingSoon";
import styles from "./Hero.module.css";

export default function HeroImage() {
  return (
    <div
      style={{ backgroundColor: "#3142E8" }}
      className="max-w-md h-8/12 aspect-[11/16] p-2 flex flex-col absolute right-28 bottom-0 border-b-0 rounded-tr-3xl rounded-tl-3xl shadow-2xl border-6 border-black/80"
    >
      <div className="absolute -right-8 -top-4">
        <LaunchingSoon />
      </div>
      <div className="w-full mb-16">
        <div className="aspect-square w-2.5 h-2.5 bg-black rounded-full text-gray-800 absolute top-2.5 left-1/2 -translate-x-1/2"></div>
      </div>
      <h1 className="text-white text-center text-lg font-semibold mb-4">
        modus
      </h1>
      <div className="bg-black/10 rounded p-5 pb-0 mb-1 flex flex-col mt-auto h-full">
        <div className="flex gap-1">
          <div className="aspect-square w-7 p-1 rounded bg-white/30  text-white/60 flex justify-center items-center">
            <FontAwesomeIcon icon={fasCheck} />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="rounded-full h-2 w-full bg-white/40"></div>
            <div className="rounded-full h-2 w-2/3 bg-white/40"></div>
          </div>
        </div>
        <div className="flex gap-1 mt-4">
          <div className="aspect-square w-7 p-1 rounded bg-white/30  text-white/60 flex justify-center items-center">
            <FontAwesomeIcon icon={fasCheck} />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="rounded-full h-2 w-2/3 bg-white/40"></div>
            <div className="rounded-full h-2 w-1/3 bg-white/40"></div>
          </div>
        </div>
        <div className="flex gap-1 mt-4">
          <div className="aspect-square w-7 p-1 rounded bg-white/30 text-white/0 flex justify-center items-center">
            <FontAwesomeIcon icon={fasCheck} />
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="rounded-full h-2 w-2/3 bg-white/40"></div>
            <div className="rounded-full h-2 w-1/3 bg-white/40"></div>
          </div>
        </div>
        <div className="flex gap-2 py-2 mt-auto">
          <div className="w-full text-center bg-black/10 rounded py-2">
            <FontAwesomeIcon
              className="text-white/30 scale-165"
              icon={faCircleExclamation}
            />
          </div>
          <div className="w-full text-center bg-black/10 rounded py-2">
            <FontAwesomeIcon
              className="text-white/30 scale-165"
              icon={faCircleCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
