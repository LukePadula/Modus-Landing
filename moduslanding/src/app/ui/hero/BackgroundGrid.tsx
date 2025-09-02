export default function BackgroundGrid() {
  return (
    <div
      className="absolute inset-0 grid overflow-hidden"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(65px, 1fr))",
      }}
    >
      {Array.from({ length: 500 }).map((_, i) => (
        <div key={i} className="aspect-square border border-black/6" />
      ))}
    </div>
  );
}
