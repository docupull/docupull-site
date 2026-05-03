const features = [
  {
    category: "Speed",
    headline: "~14 seconds from upload to report",
    description:
      "Title reports and legal descriptions are generated as soon as your documents are processed. No queue, no wait, no manual work.",
    tag: "bg-yellow-50 border-yellow-100",
    iconBg: "bg-yellow-100 text-yellow-600",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    category: "Accuracy",
    headline: "Every issue caught. Every time.",
    description:
      "Missing deeds, missing mortgages, and chain of title breaks are detected automatically — not just when someone remembers to check.",
    tag: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-600",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    category: "Focus",
    headline: "Your reviewers work only flagged orders",
    description:
      "Completed orders need zero human review. Your team opens flagged orders only — the ones where your expertise actually changes the outcome.",
    tag: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    category: "Coverage",
    headline: "From search to final report, end-to-end",
    description:
      "Already have documents? Upload them. Need us to run the search? Submit the order. Either way, you get a complete report without additional vendors.",
    tag: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100 text-purple-600",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
];

export default function FeatureBlocks() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Capabilities</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Built around outcomes, not features
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto">
            Every capability in DocuPull exists to move an order from received to completed —
            faster, more accurately, with less work from your team.
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
