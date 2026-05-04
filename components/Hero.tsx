export default function Hero() {
  return (
    <section className="pt-28 pb-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline block */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-blue-100">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            AI-powered title production · All 50 states
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
            From county search to title report —
            <br />
            <span className="text-blue-600">in seconds.</span>
          </h1>

          <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            DocuPull uses AI to search county records, compile document packages,
            and generate title reports and legal descriptions — automatically flagging
            issues so your team only reviews what matters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://outlook.office.com/bookwithme/user/7ae332d37d13468fa312e0ab4b4d5148@docupull.com/meetingtype/LVGX36V0LEWcFn2QVqzQNA2?anonymous&ismsaljsauthenabled&ep=mlink" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors text-base shadow-sm"
            >
              Book a Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://app.docupull.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors text-base"
            >
              Log In
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-4">Built for title production teams · Secure · Scalable</p>
        </div>

        {/* Product mockup — Order dashboard + report detail */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 ring-1 ring-white/5">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-slate-900 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <div className="ml-4 flex items-center gap-1 bg-slate-800 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                app.docupull.com
              </div>
            </div>

            <div className="flex h-72 sm:h-96 md:h-[480px]">
              {/* Sidebar — hidden on mobile */}
              <div className="hidden md:flex w-56 bg-slate-900 border-r border-slate-800 flex-col py-4">
                <div className="px-4 mb-4">
                  <span className="text-white font-bold text-base">Docu<span className="text-blue-400">Pull</span></span>
                </div>
                <nav className="flex-1 px-3 space-y-0.5">
                  {[
                    { name: "Dashboard", active: false, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                    { name: "Orders", active: true, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                    { name: "Reports", active: false, icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                    { name: "Search Queue", active: false, icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                    { name: "Settings", active: false, icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
                  ].map((item) => (
                    <div key={item.name} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm cursor-pointer ${item.active ? "bg-blue-600 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}>
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </nav>
                <div className="px-4 pt-4 border-t border-slate-800 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">JR</div>
                    <div>
                      <p className="text-xs font-medium text-slate-300">Jamie R.</p>
                      <p className="text-xs text-slate-500">Admin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main panel */}
              <div className="flex-1 flex overflow-hidden">
                {/* Order list */}
                <div className="flex-1 p-4 md:p-5 overflow-hidden lg:border-r lg:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold">Orders</h3>
                      <p className="text-slate-400 text-xs mt-0.5">14 total · <span className="text-amber-400">3 flagged</span></p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      New Order
                    </button>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex gap-2 mb-4">
                    {["All", "Flagged", "Processing", "Completed"].map((tab, i) => (
                      <span key={tab} className={`text-xs px-2.5 py-1 rounded-md cursor-pointer ${i === 0 ? "bg-slate-700 text-white" : "text-slate-500 hover:text-slate-300"}`}>
                        {tab}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    {[
                      { id: "2841", address: "1204 Bayshore Dr, Miami, FL", type: "Upload", status: "Completed", time: "14s" },
                      { id: "2840", address: "890 Pine Ridge Blvd, Orlando, FL", type: "Upload", status: "Flagged", note: "Missing deed" },
                      { id: "2839", address: "3312 Oak Street, Tampa, FL", type: "Search", status: "Processing" },
                      { id: "2838", address: "556 Coral Way, Fort Lauderdale, FL", type: "Search", status: "Completed", time: "8m" },
                      { id: "2837", address: "77 Harbor View Ct, Jacksonville, FL", type: "Upload", status: "Flagged", note: "Chain break" },
                      { id: "2836", address: "2910 Sunset Blvd, Sarasota, FL", type: "Upload", status: "Completed", time: "22s" },
                    ].map((o) => (
                      <div key={o.id} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${o.id === "2840" ? "bg-amber-500/10 border border-amber-500/20" : "hover:bg-slate-800"}`}>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500 text-xs font-mono shrink-0">#{o.id}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${o.type === "Search" ? "bg-purple-500/10 text-purple-400" : "bg-blue-500/10 text-blue-400"}`}>{o.type}</span>
                          </div>
                          <p className="text-slate-300 text-sm mt-0.5 truncate">{o.address}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <div className="flex items-center gap-1.5 justify-end">
                            <span className={`w-1.5 h-1.5 rounded-full ${o.status === "Completed" ? "bg-emerald-400" : o.status === "Flagged" ? "bg-amber-400" : "bg-blue-400 animate-pulse"}`}></span>
                            <span className={`text-xs font-medium ${o.status === "Completed" ? "text-emerald-400" : o.status === "Flagged" ? "text-amber-400" : "text-blue-400"}`}>{o.status}</span>
                          </div>
                          {o.note && <p className="text-xs text-slate-500 mt-0.5">{o.note}</p>}
                          {o.time && <p className="text-xs text-slate-500 mt-0.5">{o.time}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detail panel — hidden on mobile/tablet */}
                <div className="hidden lg:block w-72 p-5 bg-slate-950 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-500 font-mono">#2840</span>
                      <p className="text-white text-sm font-semibold mt-0.5">Order Detail</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      Flagged
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 mb-1">Property</div>
                  <p className="text-slate-200 text-sm mb-4">890 Pine Ridge Blvd, Orlando, FL 32801</p>

                  <div className="text-xs text-slate-400 mb-2">Issues detected</div>
                  <div className="space-y-2 mb-5">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="text-amber-300 text-xs font-semibold">Missing Deed</span>
                      </div>
                      <p className="text-slate-400 text-xs">Warranty deed from 2018 transfer not found in package</p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 mb-2">Report status</div>
                  <div className="bg-slate-800 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">Title Report</span>
                      <span className="text-xs text-emerald-400 font-medium">Draft ready</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Legal Description</span>
                      <span className="text-xs text-emerald-400 font-medium">Generated</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors">
                    Download Draft Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating callout */}
          <div className="absolute -right-5 top-16 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden xl:block">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Report generated</p>
                <p className="text-xs text-slate-500">ORD-2841 · 14 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
