const points = [
  {
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
    title: "One system for every order",
    description: "Orders, documents, reports, and status — all in one platform. No more email chains. No more shared drives.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Reports generated, not written",
    description: "Title reports and legal descriptions are produced automatically the moment processing completes. ~14 seconds, not hours.",
  },
  {
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    title: "Issues caught automatically",
    description: "Missing deeds, open mortgages without satisfaction, and chain breaks are detected on every order without anyone asking.",
  },
  {
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    title: "Review only what needs you",
    description: "Completed orders ship without review. Your team opens flagged orders — and only flagged orders. That's where your judgment matters.",
  },
];

export default function SolutionOverview() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">The solution</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            The operating system for title production
          </h2>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            DocuPull replaces email, shared drives, and manual report writing
            with a single platform built for how title teams actually work.
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
      </div>
    </section>
  );
}
