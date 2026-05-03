export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            Built for title production teams
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            From title search to report —{" "}
            <span className="text-blue-600">in seconds</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Upload search packages or submit order details. DocuPull generates
            complete title reports, legal descriptions, and automatically flags
            missing documents and chain of title issues.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors text-base"
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

          <p className="text-sm text-slate-400 mt-4">Secure platform · No credit card required for demo</p>
        </div>

        {/* Product UI Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-4 text-xs text-slate-400 font-mono">app.docupull.com/orders</span>
            </div>

            {/* Dashboard content */}
            <div className="flex h-[420px]">
              {/* Sidebar */}
              <div className="w-52 bg-slate-900 border-r border-slate-800 p-4 flex flex-col gap-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">Navigation</div>
                {["Dashboard", "Orders", "Reports", "Search Queue", "Settings"].map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer ${
                      i === 1
                        ? "bg-blue-600 text-white font-medium"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="w-4 h-4 bg-current opacity-60 rounded-sm"></span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-white font-semibold text-base">Orders</h3>
                    <p className="text-slate-400 text-xs mt-0.5">12 orders · 3 need review</p>
                  </div>
                  <button className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                    + New Order
                  </button>
                </div>

                {/* Order rows */}
                <div className="space-y-2">
                  {[
                    { id: "ORD-2841", address: "1204 Bayshore Dr, Miami, FL", status: "Completed", color: "bg-emerald-500" },
                    { id: "ORD-2840", address: "890 Pine Ridge Blvd, Orlando, FL", status: "Flagged", color: "bg-amber-500" },
                    { id: "ORD-2839", address: "3312 Oak Street, Tampa, FL", status: "Processing", color: "bg-blue-500" },
                    { id: "ORD-2838", address: "556 Coral Way, Fort Lauderdale, FL", status: "Completed", color: "bg-emerald-500" },
                    { id: "ORD-2837", address: "77 Harbor View Ct, Jacksonville, FL", status: "Flagged", color: "bg-amber-500" },
                    { id: "ORD-2836", address: "2910 Sunset Blvd, Sarasota, FL", status: "Completed", color: "bg-emerald-500" },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between bg-slate-800 rounded-lg px-4 py-3 hover:bg-slate-750 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 text-xs font-mono">{order.id}</span>
                        <span className="text-slate-300 text-sm">{order.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${order.color}`}></span>
                        <span className={`text-xs font-medium ${
                          order.status === "Flagged" ? "text-amber-400" :
                          order.status === "Processing" ? "text-blue-400" : "text-emerald-400"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating callouts */}
          <div className="absolute -right-4 top-24 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 hidden lg:block">
            <p className="text-xs font-semibold text-slate-900">2 issues flagged</p>
            <p className="text-xs text-slate-500 mt-0.5">Missing deed · Chain break</p>
          </div>
          <div className="absolute -left-4 bottom-24 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 hidden lg:block">
            <p className="text-xs font-semibold text-emerald-600">Report ready</p>
            <p className="text-xs text-slate-500 mt-0.5">ORD-2841 · 14 seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
}
