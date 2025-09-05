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
    <section className="max-w-sm">
      <div
        className={`${style.tenancyCardGradient} flex flex-col justify-center items-center text-center p-4 rounded-tl-sm rounded-tr-sm`}
      >
        <div className="p-4.5 bg-indigo-800 w-4 h-4 flex justify-center items-center rounded-sm mb-2">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2 className="font-semibold text-xl">{title}</h2>
        <small className="text-sm text-indigo-200">{subtitle}</small>
      </div>
      <p className="text-base p-4 text-center text-black border-solid border-1 border-neutral-300 rounded-bl-sm rounded-br-sm">
        {description}
      </p>
    </section>
  );
}
