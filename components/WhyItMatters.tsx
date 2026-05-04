export default function WhyItMatters() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 uppercase tracking-widest mb-5">Business impact</p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
              Remove bottlenecks.<br />Move faster. Scale without friction.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              The biggest constraint in title production isn&apos;t demand — it&apos;s capacity.
              DocuPull removes the work that scales linearly with order volume, so your
              team handles more without burning out or hiring ahead.
            </p>
            <ul className="space-y-4">
              {[
                { heading: "Cut turnaround times dramatically", detail: "Hours of work per order now completes in seconds." },
                { heading: "Eliminate manual report creation", detail: "Reports generated the moment processing completes. Zero manual work." },
                { heading: "Reduce review workload", detail: "Your team only opens flagged orders. Clean orders ship automatically." },
                { heading: "Scale without adding headcount", detail: "Handle 2–3× the volume without proportional staffing." },
              ].map((item) => (
                <li key={item.heading} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-blue-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.heading}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { metric: "~14s", label: "Avg. report turnaround", detail: "From upload to completed report" },
              { metric: "100%", label: "Orders auto-checked for issues", detail: "Every single order, every time" },
              { metric: "0", label: "Manual reports needed", detail: "Completely eliminated from workflow" },
              { metric: "2–3×", label: "Order capacity per team", detail: "Without adding headcount" },
            ].map((item) => (
              <div key={item.metric} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <p className="text-4xl font-bold text-white mb-1 tracking-tight">{item.metric}</p>
                <p className="text-sm font-semibold text-blue-400 mb-1">{item.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
