const before = [
  "Orders arrive via email threads",
  "Files scattered across shared drives",
  "Manual title report creation",
  "Full manual document review",
  "Delays from missing documents",
  "No visibility into order status",
];

const after = [
  "Centralized order dashboard",
  "Files uploaded directly to orders",
  "Reports generated automatically",
  "Only flagged issues need review",
  "Missing documents detected instantly",
  "Real-time status for every order",
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-white" id="product">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">The problem</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Title production is stuck in the past
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            Most teams are still managing orders through email chains, shared drives, and
            fully manual report writing. It&apos;s slow, error-prone, and impossible to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <h3 className="font-semibold text-slate-800">Without DocuPull</h3>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="font-semibold text-slate-800">With DocuPull</h3>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
