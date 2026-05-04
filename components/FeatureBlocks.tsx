const features = [
  {
    category: "Search",
    headline: "County records searched automatically",
    description:
      "AI searches county records across all 50 states, retrieving the relevant documents for each order — no manual lookup.",
    tag: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    category: "Compilation",
    headline: "Structured packages, built for you",
    description:
      "Raw records assembled into complete, structured packages automatically. No manual sorting, no missing documents.",
    tag: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100 text-purple-600",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    category: "Report Generation",
    headline: "Title reports written in seconds",
    description:
      "Title reports and legal descriptions generated the moment processing completes. Consistent formatting, every order.",
    tag: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-600",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    category: "Issue Detection",
    headline: "Problems caught before they reach clients",
    description:
      "Missing deeds, unsatisfied mortgages, and chain breaks flagged on every order — automatically, not just when someone checks.",
    tag: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100 text-amber-600",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
];

export default function FeatureBlocks() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest mb-5">What we do</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            We handle the work
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto">
            Four capabilities. One platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.category} className={`rounded-2xl p-8 border bg-white ${f.tag}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.iconBg}`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">{f.category}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.headline}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
