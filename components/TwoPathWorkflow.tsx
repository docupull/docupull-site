export default function TwoPathWorkflow() {
  return (
    <section className="pt-24 pb-12 px-6 bg-slate-50" id="workflow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest mb-5">
            How it works
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Start anywhere
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto">
            Have documents or need a search — same result either way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Path A */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                A
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Already have documents</p>
                <h3 className="text-lg font-bold text-slate-900">Upload &amp; generate</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { step: "1", text: "Upload your search package — PDFs or any file format" },
                { step: "2", text: "DocuPull processes and extracts all document data" },
                { step: "3", text: "Title report and legal description generated instantly" },
                { step: "4", text: "Missing documents and chain breaks flagged automatically" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    {item.step}
                  </span>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Report ready in ~14 seconds</p>
                <p className="text-xs text-slate-500 mt-0.5">From upload to completed report</p>
              </div>
            </div>
          </div>

          {/* Path B — equal visual weight */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white text-sm font-bold flex items-center justify-center">
                B
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Need a title search</p>
                <h3 className="text-lg font-bold text-slate-900">Submit &amp; we handle it</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { step: "1", text: "Submit order details — property address, parties, requirements" },
                { step: "2", text: "DocuPull performs the county title search on your behalf" },
                { step: "3", text: "We assemble the complete search package from county records" },
                { step: "4", text: "Full report and legal description generated and delivered" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                    {item.step}
                  </span>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">End-to-end, no extra vendors</p>
                <p className="text-xs text-slate-500 mt-0.5">Search, package, and report — all in one</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap pt-1">
              {["Current Owner", "Two Owner (2O)", "Full Search"].map((type) => (
                <span key={type} className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200">
                  {type}
                </span>
              ))}
              <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-100">
                All 50 states
              </span>
            </div>
          </div>
        </div>

        {/* Convergence note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-slate-600">
              Both paths deliver the same output: a complete title report with issues flagged
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
