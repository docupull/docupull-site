const features = [
  {
    category: "Speed",
    headline: "Reports in seconds, not days",
    description:
      "Title reports and legal descriptions are generated the moment documents are processed. No waiting, no queues, no manual writing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "bg-yellow-50 text-yellow-600 border-yellow-100",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    category: "Accuracy",
    headline: "Issues caught before they become problems",
    description:
      "Missing mortgages, missing deeds, and breaks in the chain of title are detected automatically on every order — every time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    category: "Focus",
    headline: "Only review what actually needs attention",
    description:
      "Completed orders require zero manual review. Your team spends time only on flagged orders — the ones that genuinely need human judgment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    accent: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    category: "Coverage",
    headline: "From search to final report, end-to-end",
    description:
      "Whether you upload documents or submit order details for a full search, DocuPull handles the entire workflow from start to finish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    accent: "bg-purple-50 text-purple-600 border-purple-100",
    iconBg: "bg-purple-100 text-purple-600",
  },
];

export default function FeatureBlocks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Capabilities</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Built around outcomes, not features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.category} className={`rounded-2xl p-8 border ${f.accent}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.iconBg}`}>
                {f.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">{f.category}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.headline}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
