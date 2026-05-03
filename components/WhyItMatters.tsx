const impacts = [
  {
    metric: "90%",
    label: "Reduction in report turnaround time",
    description: "What used to take hours is done in seconds.",
  },
  {
    metric: "100%",
    label: "Of orders automatically checked for issues",
    description: "No order ships without a full automated review.",
  },
  {
    metric: "0",
    label: "Manual report builds required",
    description: "Completely eliminate report writing from your workflow.",
  },
  {
    metric: "∞",
    label: "Scale without proportional headcount",
    description: "Handle more orders without adding staff.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Business impact</p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
              Operational gains that compound over time
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              DocuPull doesn&apos;t just speed up individual tasks — it restructures how your
              entire production workflow operates. Less manual work means fewer errors,
              faster turnarounds, and a team that can focus on what matters.
            </p>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                "Reduce order turnaround from days to seconds",
                "Eliminate manual report creation entirely",
                "Shrink review load to flagged orders only",
                "Remove bottlenecks caused by missing documents",
                "Scale your operation without adding headcount",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {impacts.map((item) => (
              <div key={item.metric} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <p className="text-4xl font-bold text-white mb-1">{item.metric}</p>
                <p className="text-sm font-semibold text-blue-400 mb-2">{item.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
