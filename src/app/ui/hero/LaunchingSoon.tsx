import styles from "./LaunchingSoon.module.css";

export default function LaunchingSoon() {
  return (
    <div
      className={`${styles.shake} w-24 md:w-20 aspect-square p-2 grid content-center rounded-md shadow-2xl text-center`}
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
