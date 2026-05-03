const plans = [
  {
    name: "Starter",
    description: "For small teams processing a low volume of orders each month.",
    price: null,
    cta: "Book a Demo",
    ctaHref: "#",
    features: [
      "Up to 50 orders / month",
      "Document upload workflow",
      "Automated report generation",
      "Issue detection & flagging",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    description: "Most teams choose this. Built for production-scale title operations.",
    price: null,
    cta: "Book a Demo",
    ctaHref: "#",
    features: [
      "Up to 500 orders / month",
      "Both workflow paths (upload + search)",
      "Priority processing queue",
      "Full-service title search",
      "Dedicated onboarding",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Custom pricing for high-volume or multi-location title operations.",
    price: null,
    cta: "Contact Us",
    ctaHref: "#",
    features: [
      "Unlimited orders",
      "Custom integrations",
      "SLA guarantees",
      "Dedicated account manager",
      "White-label options",
      "Custom reporting",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Simple, transparent plans
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto">
            Book a demo to learn about pricing. No contracts required to start.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-blue-600 border-2 border-blue-600 text-white"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full self-start mb-5">
                  Most popular
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <p className={`text-2xl font-bold mb-8 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                Contact for pricing
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-blue-50" : "text-slate-600"}`}>
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
