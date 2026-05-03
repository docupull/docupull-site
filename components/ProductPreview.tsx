export default function ProductPreview() {
  return (
    <section className="py-24 px-6 bg-slate-50" id="product-preview">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Product</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            See exactly what your team gets
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            From order submission to completed report — every step happens inside DocuPull.
            Your team only opens what needs review.
          </p>
        </div>

        <div className="space-y-16">

          {/* View 1: Order dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Order management</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Every order, one place. Real-time status, always.
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                No more inbox digging. Every order has a live status — Processing, Flagged,
                or Completed. Your team sees exactly where every order stands without asking anyone.
              </p>
              <ul className="space-y-3">
                {[
                  "Filter by status, type, or date range",
                  "Upload workflow and full search orders side by side",
                  "Flagged orders surface automatically at the top",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 px-5 py-3 bg-slate-900 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                <span className="ml-3 text-xs text-slate-500 font-mono">Orders</span>
              </div>
              <div className="p-5">
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Total", value: "248", color: "text-white" },
                    { label: "Completed", value: "231", color: "text-emerald-400" },
                    { label: "Flagged", value: "12", color: "text-amber-400" },
                    { label: "Processing", value: "5", color: "text-blue-400" },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-800 rounded-xl p-3 text-center">
                      <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Order rows */}
                <div className="space-y-1.5">
                  {[
                    { id: "2841", addr: "1204 Bayshore Dr, Miami, FL", status: "Completed", type: "Upload", sub: "14s" },
                    { id: "2840", addr: "890 Pine Ridge Blvd, Orlando, FL", status: "Flagged", type: "Upload", sub: "Missing deed" },
                    { id: "2839", addr: "3312 Oak Street, Tampa, FL", status: "Processing", type: "Search", sub: "" },
                    { id: "2838", addr: "556 Coral Way, Fort Lauderdale, FL", status: "Completed", type: "Search", sub: "8m 22s" },
                    { id: "2837", addr: "77 Harbor View Ct, Jacksonville, FL", status: "Flagged", type: "Upload", sub: "Chain break" },
                  ].map((o) => (
                    <div key={o.id} className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${o.status === "Flagged" ? "bg-amber-500/10 border border-amber-500/20" : "bg-slate-800/60"}`}>
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-slate-600 font-mono text-xs shrink-0">#{o.id}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded font-medium shrink-0 ${o.type === "Search" ? "bg-purple-500/10 text-purple-400" : "bg-blue-500/10 text-blue-400"}`}>{o.type}</span>
                        <span className="text-slate-300 text-sm truncate">{o.addr}</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-2 ml-3">
                        <span className={`text-xs ${o.sub && o.status === "Flagged" ? "text-amber-400/70" : "text-slate-500"}`}>{o.sub}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${o.status === "Completed" ? "bg-emerald-400" : o.status === "Flagged" ? "bg-amber-400" : "bg-blue-400 animate-pulse"}`}></span>
                          <span className={`text-xs font-medium ${o.status === "Completed" ? "text-emerald-400" : o.status === "Flagged" ? "text-amber-400" : "text-blue-400"}`}>{o.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* View 2: Report output */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Report generation</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Complete title reports, written automatically
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                DocuPull writes the full title report and legal description from the documents
                you provide. No templates to fill in. No copy-pasting. Just a complete,
                formatted report ready to download.
              </p>
              <ul className="space-y-3">
                {[
                  "Title report structured consistently on every order",
                  "Legal description extracted and formatted",
                  "Chain of title documented with all recorded instruments",
                  "PDF download ready in seconds",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:order-1 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              {/* Document header */}
              <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Title Report — ORD-2841</p>
                    <p className="text-slate-400 text-xs">Generated in 14 seconds · Ready to download</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </button>
              </div>

              {/* Report content preview */}
              <div className="p-6 font-mono text-xs leading-relaxed text-slate-700 bg-white max-h-80 overflow-hidden relative">
                <div className="mb-4">
                  <p className="font-bold text-slate-900 text-sm mb-1">TITLE REPORT</p>
                  <p className="text-slate-500">Order: ORD-2841 · Prepared by DocuPull · May 3, 2026</p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-800 mb-1">PROPERTY DESCRIPTION</p>
                  <p className="text-slate-600 leading-relaxed">
                    Lot 14, Block 7, BAYSHORE ESTATES SUBDIVISION, according to the Plat
                    thereof, as recorded in Plat Book 48, Page 22, of the Public Records
                    of Miami-Dade County, Florida.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-800 mb-1">CHAIN OF TITLE</p>
                  <div className="space-y-1.5 text-slate-600">
                    <p>1. <span className="text-slate-700">Warranty Deed</span> — Robert & Susan Harmon to James L. Torres</p>
                    <p className="pl-3 text-slate-400">Recorded: 01/14/2009 · OR Book 26411, Page 1842</p>
                    <p>2. <span className="text-slate-700">Warranty Deed</span> — James L. Torres to Michael R. Chen</p>
                    <p className="pl-3 text-slate-400">Recorded: 08/22/2014 · OR Book 29103, Page 0447</p>
                    <p>3. <span className="text-slate-700">Warranty Deed</span> — Michael R. Chen to Current Owner</p>
                    <p className="pl-3 text-slate-400">Recorded: 03/15/2021 · OR Book 32807, Page 1194</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-800 mb-1">ENCUMBRANCES</p>
                  <div className="space-y-1 text-slate-600">
                    <p>1. Mortgage — First National Bank of Miami</p>
                    <p className="pl-3 text-slate-400">Recorded: 03/15/2021 · Amount: $485,000</p>
                    <p className="pl-3 text-slate-400">Outstanding balance confirmed · No lien releases pending</p>
                  </div>
                </div>

                {/* Fade out */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              <div className="border-t border-slate-100 px-6 py-3 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="text-xs text-slate-500">No issues detected · Chain complete · All instruments verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* View 3: Flagging detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3">Automated issue detection</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Problems surfaced before they reach your client
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                DocuPull checks every order for missing deeds, missing mortgages, and breaks
                in the chain of title. Issues are flagged with specific details — so when
                you open a flagged order, you know exactly what to look for.
              </p>
              <ul className="space-y-3">
                {[
                  "Missing deed between recorded owners detected instantly",
                  "Open mortgages without recorded satisfaction flagged",
                  "Gaps in chain of title identified by year and grantor",
                  "Every issue described specifically, not generically",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 bg-slate-900 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                <span className="ml-3 text-xs text-slate-500 font-mono">Order #2840 — Issue Review</span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white font-semibold text-sm">890 Pine Ridge Blvd, Orlando, FL</p>
                    <p className="text-slate-500 text-xs mt-0.5">Upload · Received 9:14 AM · Processed in 18s</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    1 Issue
                  </span>
                </div>

                {/* Issue card */}
                <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-amber-300 font-semibold text-sm mb-1">Missing Deed — 2018 Transfer</p>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        A warranty deed is recorded between Sandra P. Ellis (grantor, 2013) and
                        David M. Kowalski (grantee, 2021), but no instrument for the 2018 transfer
                        was found in the package or county records.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Gap: 2018–2021</span>
                        <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Expected: Warranty deed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What's ready */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Report status</p>
                  <div className="space-y-2">
                    {[
                      { label: "Title report (draft)", status: "Ready", ok: true },
                      { label: "Legal description", status: "Generated", ok: true },
                      { label: "Chain of title", status: "Gap flagged", ok: false },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">{r.label}</span>
                        <span className={`text-xs font-medium ${r.ok ? "text-emerald-400" : "text-amber-400"}`}>{r.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
