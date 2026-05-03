const DEMO_URL =
  "https://outlook.office.com/bookwithme/user/7ae332d37d13468fa312e0ab4b4d5148@docupull.com/meetingtype/LVGX36V0LEWcFn2QVqzQNA2?anonymous&ismsaljsauthenabled&ep=mlink";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      {/* Hidden checkbox drives the mobile menu — no JS required */}
      <input type="checkbox" id="mobile-nav" className="sr-only peer" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Docu<span className="text-blue-600">Pull</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#product" className="hover:text-slate-900 transition-colors">Product</a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://app.docupull.com"
            className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Log In
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book a Demo
          </a>
          {/* Hamburger label — toggles the hidden checkbox */}
          <label
            htmlFor="mobile-nav"
            className="md:hidden cursor-pointer p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile menu — shown when checkbox is checked */}
      <div className="md:hidden hidden peer-checked:flex flex-col bg-white border-t border-slate-100 px-6 pb-4">
        {[
          { label: "Product", href: "#product" },
          { label: "How it works", href: "#workflow" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
          { label: "Log In", href: "https://app.docupull.com" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 py-3 border-b border-slate-100 last:border-0 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
