export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-white" id="pricing">
      <div className="max-w-4xl mx-auto text-center">
        <p className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest mb-5">Pricing</p>
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
          Pricing that scales with your volume
        </h2>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12">
          Simple per-order pricing — no subscriptions, no seat fees, no contracts.
          Pay for what you process. Book a demo and we'll walk you through the numbers.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              title: "Per-order pricing",
              description: "You pay per report or per search — not a monthly flat fee. Low volume months cost less automatically.",
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "No minimums",
              description: "No minimum order commitments. Start processing as soon as you're set up.",
            },
            {
              icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              title: "No long-term contracts",
              description: "Month-to-month. Cancel or pause any time. No lock-in.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <p className="text-slate-700 text-base mb-6">
            Ready to see what DocuPull costs for your order volume?
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/7ae332d37d13468fa312e0ab4b4d5148@docupull.com/meetingtype/LVGX36V0LEWcFn2QVqzQNA2?anonymous&ismsaljsauthenabled&ep=mlink" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-slate-400 mt-4">We&apos;ll walk you through pricing on the call. No pressure.</p>
        </div>
      </div>
    </section>
  );
}
