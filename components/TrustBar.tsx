const metrics = [
  { value: "~14s", label: "Average report generation time" },
  { value: "100%", label: "Of orders auto-checked for title issues" },
  { value: "0", label: "Manual reports needed after processing" },
  { value: "2", label: "Workflow paths — upload or full search" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
          What title teams see from day one
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-4xl font-bold text-slate-900 tracking-tight">{m.value}</p>
              <p className="text-sm text-slate-500 mt-2 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
