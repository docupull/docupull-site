export default function TwoPathWorkflow() {
  return (
    <section className="py-24 px-6 bg-white" id="workflow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            No matter where you start, we handle the rest
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            DocuPull works whether you already have documents or need us to perform
            the title search from scratch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path A */}
          <div className="relative bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              Path A · Already have documents
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Upload &amp; generate</h3>

            <div className="space-y-4">
              {[
                { step: "1", text: "Upload your search package — PDFs or any file format" },
                { step: "2", text: "DocuPull processes documents and extracts data" },
                { step: "3", text: "Title report and legal description generated instantly" },
                { step: "4", text: "Missing documents and chain issues flagged automatically" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <p className="text-sm text-slate-700 pt-1">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-xl p-4 border border-blue-100">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600 font-medium">Report ready in seconds</span>
              </div>
            </div>
          </div>

          {/* Path B */}
          <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="inline-flex items-center gap-2 bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              Path B · Need a title search
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Submit &amp; we search</h3>

            <div className="space-y-4">
              {[
                { step: "1", text: "Submit order details — address, parties, requirements" },
                { step: "2", text: "DocuPull performs the county title search" },
                { step: "3", text: "We assemble the complete search package" },
                { step: "4", text: "Report and legal description generated and delivered" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-slate-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <p className="text-sm text-slate-300 pt-1">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300 font-medium">End-to-end coverage, no extra vendors</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          Both paths deliver the same result: a complete, verified title report with issues flagged.
        </p>
      </div>
    </section>
  );
}
