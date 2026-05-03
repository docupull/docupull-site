const callouts = [
  { label: "Track every order", description: "Live status across your entire pipeline", position: "top-6 left-6" },
  { label: "Focus on flagged issues", description: "Only orders that need attention surface", position: "top-6 right-6" },
  { label: "Download completed reports", description: "One-click export for every finished order", position: "bottom-6 left-1/2 -translate-x-1/2" },
];

const orders = [
  { id: "ORD-2841", address: "1204 Bayshore Dr, Miami, FL", type: "Upload", status: "Completed", time: "14s" },
  { id: "ORD-2840", address: "890 Pine Ridge Blvd, Orlando, FL", type: "Upload", status: "Flagged", flag: "Missing deed" },
  { id: "ORD-2839", address: "3312 Oak Street, Tampa, FL", type: "Search", status: "Processing", time: "—" },
  { id: "ORD-2838", address: "556 Coral Way, Fort Lauderdale, FL", type: "Search", status: "Completed", time: "8m" },
  { id: "ORD-2837", address: "77 Harbor View Ct, Jacksonville, FL", type: "Upload", status: "Flagged", flag: "Chain break" },
];

export default function ProductPreview() {
  return (
    <section className="py-24 px-6 bg-slate-50" id="product-preview">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Product</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Full visibility across every order
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            One dashboard. Every order, document, and report in one place — with real-time
            status and instant issue detection.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
            {/* Chrome */}
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-800 border-b border-slate-700">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-4 text-xs text-slate-400 font-mono">DocuPull — Orders</span>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-4 border-b border-slate-800">
              {[
                { label: "Total Orders", value: "248" },
                { label: "Completed", value: "231", color: "text-emerald-400" },
                { label: "Flagged", value: "12", color: "text-amber-400" },
                { label: "Processing", value: "5", color: "text-blue-400" },
              ].map((stat) => (
                <div key={stat.label} className="px-6 py-4 border-r border-slate-800 last:border-0">
                  <p className={`text-2xl font-bold ${stat.color ?? "text-white"}`}>{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-sm font-semibold">Recent Orders</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                    2 need review
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-500 text-xs">
                      <th className="text-left pb-3 pr-4 font-medium">Order ID</th>
                      <th className="text-left pb-3 pr-4 font-medium">Property</th>
                      <th className="text-left pb-3 pr-4 font-medium">Type</th>
                      <th className="text-left pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    {orders.map((o) => (
                      <tr key={o.id} className="border-t border-slate-800">
                        <td className="py-3 pr-4">
                          <span className="text-slate-400 font-mono text-xs">{o.id}</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className="text-slate-300">{o.address}</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${
                            o.type === "Search"
                              ? "bg-purple-500/10 text-purple-400"
                              : "bg-blue-500/10 text-blue-400"
                          }`}>
                            {o.type}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              o.status === "Completed" ? "bg-emerald-500" :
                              o.status === "Flagged" ? "bg-amber-500" : "bg-blue-500"
                            }`}></span>
                            <span className={`text-xs font-medium ${
                              o.status === "Completed" ? "text-emerald-400" :
                              o.status === "Flagged" ? "text-amber-400" : "text-blue-400"
                            }`}>
                              {o.status}
                            </span>
                            {o.flag && (
                              <span className="text-xs text-slate-500">· {o.flag}</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Callout cards */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {callouts.map((c) => (
              <div key={c.label} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-900">{c.label}</p>
                <p className="text-xs text-slate-500 mt-1">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
