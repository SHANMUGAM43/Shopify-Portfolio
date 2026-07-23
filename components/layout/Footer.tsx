import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-[#050505] py-12 mt-24"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link
            href="/"
            className="text-white font-bold text-base hover:text-purple-400 transition-colors"
            aria-label="Home"
          >
            <span className="gradient-text">Shanmugam Paramasivam</span>
          </Link>
          <p className="text-zinc-500 text-sm mt-1">Senior Shopify Developer</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-500 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-zinc-500 text-sm text-center md:text-right">
          Designed & Developed by <span className="text-white font-semibold">Shanmugam Paramasivam</span>
        </p>
      </div>
    </footer>
  );
}
