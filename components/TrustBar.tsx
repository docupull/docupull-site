const metrics = [
  { value: "90%", label: "Faster report turnaround" },
  { value: "100%", label: "Automated issue detection" },
  { value: "0", label: "Manual report builds needed" },
  { value: "2", label: "Workflow paths supported" },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-slate-500 font-medium mb-8 uppercase tracking-wider">
          Trusted by title production teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-bold text-slate-900">{m.value}</p>
              <p className="text-sm text-slate-500 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
