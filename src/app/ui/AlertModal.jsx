import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./AlertsModal.module.css";

export default function AlertModal() {
  return (
    <div
      className={`${styles.toast} ${styles.bg} p-3 items-center justify-center text-center fixed top-[11%] z-40 bg rounded-md left-1/2 transform-translate-x-1/2 drop-shadow-md`}
    >
      <FontAwesomeIcon className="scale-140 mr-3" icon={faCircleCheck} />
      <small className="text-xsm text-center">
        Thanks for joining our waitlist. We will keep you updated with our
        progress.
      </small>
    </div>
  );
}
