import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconDefinition;
  text: string;
}

export default function SellingPoint({ icon, text }: Props) {
  return (
    <div className="p-5 min-h-[140px] h-full flex flex-col justify-start border border-neutral-300 rounded-lg bg-white shadow-sm">
      <div className="mb-3 text-brand bg-brand">
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
