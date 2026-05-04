const metrics = [
  {
    value: "10,000+",
    label: "Orders processed",
    sub: "Across all order types",
    color: "text-slate-900",
  },
  {
    value: "All 50",
    label: "U.S. states covered",
    sub: "Current Owner · 2O · Full Search",
    color: "text-blue-600",
  },
  {
    value: "~14s",
    label: "Avg. report turnaround",
    sub: "From upload to completed report",
    color: "text-slate-900",
  },
  {
    value: "4",
    label: "Active client teams",
    sub: "Title operations using DocuPull",
    color: "text-slate-900",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by growing title operations teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className={`text-4xl md:text-5xl font-bold tracking-tight ${m.color}`}>{m.value}</p>
              <p className="text-sm font-semibold text-slate-800 mt-2">{m.label}</p>
              <p className="text-xs text-slate-400 mt-1 leading-snug">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
