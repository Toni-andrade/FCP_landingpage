const stats = [
  { label: "Range", value: "$5K \u2013 $250K" },
  { label: "Friction", value: "0 Credit Impact" },
  { label: "Structure", value: "Flexible" },
  { label: "Guidance", value: "1-on-1" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-outline-variant/10 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-12 md:py-16 px-6 sm:px-12 space-y-4"
            >
              <div className="font-mono text-[10px] uppercase text-outline tracking-[0.2em]">
                {stat.label}
              </div>
              <div className="font-headline text-3xl md:text-4xl text-primary">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
