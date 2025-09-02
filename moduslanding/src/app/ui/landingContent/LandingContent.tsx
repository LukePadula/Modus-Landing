import SectionHeaderBackground from "../SectionHeaderBackground";
import TenancyCard from "./TenancyCard";
import {
  faKey,
  faClipboardCheck,
  faDoorOpen,
  faPersonRunning,
  faFile,
  faCouch,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import SellingPoint from "./SellingPoint";

export default function LandingContent() {
  const tenancyCards = [
    {
      icon: faKey,
      title: "Check-in",
      subtitle: "Set the standard from day one",
      description:
        "Record the condition of every room and item before move-in with photos, notes, and flagged issues.",
    },
    {
      icon: faClipboardCheck,
      title: "Inspection",
      subtitle: "Stay on top of property health",
      description:
        "Schedule mid-tenancy inspections, log issues, and share updates with tenants instantly.",
    },
    {
      icon: faDoorOpen,
      title: "Check-out",
      subtitle: "Make move-out stress free",
      description:
        "Track any damages, compare against check-in records, and generate final reports easily.",
    },
  ];

  const sellingPointCards = [
    {
      icon: faPersonRunning,
      text: "Turn slow, bureaucratic checks into quick, streamlined workflows.",
    },
    {
      icon: faFile,
      text: "Forget templates. Each inspection flows seamlessly from the previous one.",
    },
    {
      icon: faCouch,
      text: "Keep track of inventory and spot degradation by comparing with previous photos.",
    },
    {
      icon: faLaptop,
      text: "Create a clear digital record that both you and your tenants can trust.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center p-5 sm:p-15 pt-8 sm:pt-26">
      <SectionHeaderBackground styleType="content">
        <h1 className="font-semibold text-3xl">A better workflow</h1>
      </SectionHeaderBackground>
      <h1 className="font-semibold text-3xl text-black text-center">
        for the whole tenancy cycle.
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {tenancyCards.map((card, index) => (
          <TenancyCard
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>
      <h1 className="font-semibold text-3xl text-black text-center">
        Inspections focusing on what
      </h1>
      <SectionHeaderBackground styleType="content">
        <h1 className="font-semibold text-3xl">matters most</h1>
      </SectionHeaderBackground>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {sellingPointCards.map((card, i) => (
          <SellingPoint key={i} icon={card.icon} text={card.text} />
        ))}
      </div>
    </section>
  );
}
