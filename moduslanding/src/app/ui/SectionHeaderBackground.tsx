import styles from "./SectionHeaderBackground.module.css";

interface Props {
  children: React.ReactNode;
  styleType: "hero" | "content";
}

export default function SectionHeaderBackground({
  children,
  styleType,
}: Props) {
  return (
    <div className="inline-block relative rounded-sm p-1">
      <div
        className={`absolute inset-0 rounded-sm ${
          styleType === "hero"
            ? styles.heroTitleGradient
            : styles.contentTitleGradient
        }`}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
