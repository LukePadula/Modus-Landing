import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./TenancyCard.module.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconDefinition;
  title: string;
  subtitle: string;
  description: string;
}
export default function TenancyCard({
  icon,
  title,
  subtitle,
  description,
}: Props) {
  return (
    <div className="max-w-sm h-full flex flex-col">
      <div
        className={`${style.tenancyCardGradient} flex flex-col justify-center items-center text-center p-4 rounded-tl-lg rounded-tr-lg`}
      >
        <div className="p-4.5 bg-indigo-800 w-4 h-4 flex justify-center items-center rounded-lg mb-2">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2 className="font-semibold text-xl">{title}</h2>
        <small className="text-xsm text-indigo-200">{subtitle}</small>
      </div>
      <p className="text-sm p-4 text-center text-black border border-neutral-200 rounded-bl-lg rounded-br-lg flex-1">
        {description}
      </p>
    </div>
  );
}
