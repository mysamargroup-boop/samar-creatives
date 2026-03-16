export function StatsRow() {
  const stats = [
    { label: "Projects Shipped", value: "12" },
    { label: "Years Experience", value: "3" },
    { label: "Happy Clients", value: "8" },
    { label: "Chai ke Cup ☕", value: "∞" }
  ];

  return (
    <div className="bg-accent py-14 px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col gap-1 border-r border-white/20 last:border-none px-4 md:px-6">
          <span className="font-display text-5xl sm:text-7xl text-white leading-none tracking-tighter">
            {stat.value}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/70 font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}