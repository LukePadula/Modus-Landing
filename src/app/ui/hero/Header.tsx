import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex justify-between align-middle p-5">
      <small className="font-semibold text-base">Modus</small>
      <div className="flex justify-center items-center cursor-pointer w-4 h-4">
        <FontAwesomeIcon
          icon={faBars}
          className="hover:text-gray-800 transition-colors w-full h-full"
        />
      </div>
    </div>
  );
}
