import styles from "./LaunchingSoon.module.css";

export default function LaunchingSoon() {
  return (
    <div
      className={`${styles.shake} w-33 md:w-22 aspect-square grid content-center rounded-md shadow-2xl text-center`}
      style={{
        backgroundColor: "#FFC215",
      }}
    >
      <small className="text-black text-center text-base md:text-sm font-semibold">
        Launching Soon
      </small>
    </div>
  );
}
