const DEMO_URL =
  "https://outlook.office.com/bookwithme/user/7ae332d37d13468fa312e0ab4b4d5148@docupull.com/meetingtype/LVGX36V0LEWcFn2QVqzQNA2?anonymous&ismsaljsauthenabled&ep=mlink";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-blue-600">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Modernize your title production workflow
        </h2>
        <p className="text-xl text-blue-100 mb-4">
          From county search to final report — all in one system.
        </p>
        <p className="text-blue-200 text-base mb-10">
          See a full title report generated in under 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors text-base"
          >
            Book a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://app.docupull.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
          >
            Log In
          </a>
        </div>
        <p className="text-blue-200 text-sm mt-6">Built for title production teams · Secure · Scalable</p>
      </div>
    </section>
  );
}
