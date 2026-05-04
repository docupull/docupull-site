const points = [
  {
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    title: "Search",
    description: "AI searches county record systems across all 50 states, identifying and retrieving the documents relevant to each order.",
  },
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Compilation",
    description: "Raw records are assembled into a complete, structured search package — ready for report generation with no manual sorting.",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Report Generation",
    description: "Title reports and legal descriptions are generated automatically the moment processing completes. Seconds, not hours.",
  },
  {
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    title: "Issue Detection",
    description: "Missing deeds, open mortgages, and breaks in chain of title are flagged automatically on every order — before they reach your client.",
  },
];

export default function SolutionOverview() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 uppercase tracking-widest mb-5">The solution</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            One system. From search to final report.
          </h2>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            DocuPull replaces your entire workflow — handling search, document compilation,
            report generation, and issue detection in one platform.
            No more stitching together tools. No more manual handoffs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 leading-snug">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            What used to take hours of manual effort now happens in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
