const links = {
  Product: [
    { label: "How it works", href: "#workflow" },
    { label: "Product tour", href: "#product-preview" },
    { label: "Pricing", href: "#pricing" },
  ],
  Platform: [
    { label: "Upload workflow", href: "#workflow" },
    { label: "Title search", href: "#workflow" },
    { label: "Report generation", href: "#product" },
  ],
  Company: [
    { label: "Contact", href: "#contact" },
    { label: "Book a Demo", href: "#" },
  ],
  Account: [
    { label: "Log In", href: "https://app.docupull.com" },
    { label: "Book a Demo", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="text-xl font-bold text-white tracking-tight">
              Docu<span className="text-blue-400">Pull</span>
            </a>
            <p className="text-sm mt-3 leading-relaxed">
              The operating system for title production teams.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">{section}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} DocuPull. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
