interface Props {
  lineType: "light" | "dark";
}

export default function BackgroundGrid({ lineType }: Props) {
  return (
    <div
      className="absolute inset-0 grid overflow-hidden"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(65px, 1fr))",
      }}
    >
      {Array.from({ length: 500 }).map((_, i) => (
        <div
          key={i}
          className={`aspect-square border  ${
            lineType === "light" ? "border-red" : "border-black/7"
          }`}
        />
      ))}
    </div>
  );
}
